import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { ADMNavBar } from "@/components/ADMNavBar";
import styled from "styled-components";
import { getTemporadas, createTemporada, updateTemporada } from "@/service/api";

const Container = styled.div`
  width: 100%;
  padding: 54px 16px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--green);
`;

const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 16px;
  color: var(--black);
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 18px;
`;

const Placeholder = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 12px;
  margin-bottom: 18px;
  color: var(--black);
`;

const ButtonBar = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background: var(--white);
  color: var(--black);
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const SaveButton = styled(EditButton)`
  background: var(--dark-green);
  color: var(--white);
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const CancelButton = styled(EditButton)`
  background: red;
  color: var(--white);
`;

const Textarea = styled.textarea`
  color: var(--black);
  background-color: var(--white);
  font-size: 18px;
  line-height: calc(18px * 1.5);
  max-width: 1150px;
  width: 80%;
  margin-bottom: 18px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--dark-white);
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Text = styled.span`
  font-size: 18px;
  line-height: calc(18px * 1.5);
  max-width: 1150px;
  color: var(--black);
  margin-bottom: 18px;
  white-space: pre-wrap;
`;

export function ADMSeason() {
    const [temporada, setTemporada] = useState(null);
    const [editText, setEditText] = useState('');
    const [editFile, setEditFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        getTemporadas().then(data => {
            if (data.length > 0) setTemporada(data[0]);
        });
    }, []);

    const startEdit = () => {
        setEditText(temporada?.text || '');
        setPreviewSrc(temporada?.image || '');
        setEditFile(null);
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setEditFile(file);
        setPreviewSrc(URL.createObjectURL(file));
    };

    const saveEdit = async () => {
        setSaving(true);
        try {
            const formData = new FormData();
            formData.append('text', editText);
            if (editFile) formData.append('image', editFile);

            let updated;
            if (temporada?.id) {
                updated = await updateTemporada(temporada.id, formData);
            } else {
                updated = await createTemporada(formData);
            }

            // Refetch para obter URLs normalizadas
            const data = await getTemporadas();
            if (data.length > 0) setTemporada(data[0]);
            setIsEditing(false);
        } catch (err) {
            console.error(err);
            alert('Erro ao salvar. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <>
            <ADMNavBar />
            <Container>
                <Title>Edição de Temporada</Title>

                {!isEditing ? (
                    <ButtonBar>
                        <EditButton onClick={startEdit}>Editar</EditButton>
                    </ButtonBar>
                ) : (
                    <ButtonBar>
                        <SaveButton onClick={saveEdit} disabled={saving}>
                            {saving ? 'Salvando...' : 'Salvar'}
                        </SaveButton>
                        <CancelButton onClick={cancelEdit}>Cancelar</CancelButton>
                    </ButtonBar>
                )}

                {isEditing ? (
                    <>
                        {previewSrc
                            ? <Image src={previewSrc} alt="preview" />
                            : <Placeholder>Nenhuma imagem selecionada</Placeholder>
                        }
                        <Input type="file" accept="image/*" onChange={handleFileChange} />
                        <Textarea
                            rows={10}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            placeholder="Texto da temporada..."
                        />
                    </>
                ) : (
                    <>
                        {temporada?.image
                            ? <Image src={temporada.image} alt="Banner da temporada atual" />
                            : <Placeholder>Nenhuma imagem cadastrada</Placeholder>
                        }
                        {temporada?.text && <Text>{temporada.text}</Text>}
                        {!temporada && <Text>Nenhuma temporada cadastrada. Clique em Editar para criar.</Text>}
                    </>
                )}
            </Container>
            <Footer />
        </>
    );
}
