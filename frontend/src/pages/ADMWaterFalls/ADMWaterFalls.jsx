import { ADMNavBar } from "@/components/ADMNavBar"
import { Footer } from "@/components/Footer"
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { ModalEdit } from "../../components/ModalEdit";
import { getCachoeiras, createCachoeira, updateCachoeira, deleteCachoeira } from "@/service/api";

const Container = styled.div`
    width: 100%;
    padding: 54px 16px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: var(--green);
`

const Title = styled.h1`
    font-size: 32px;
    margin: 0 auto 16px;
    color: var(--black);
`

const SubContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const CreateButton = styled.button`
    padding: 8px 16px;
    background: var(--white);
    color: var(--black);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 16px;
`

const newCard = {
    name: "",
    summary: "",
    images: [],
    location: ""
};

export function ADMWaterfalls() {
    const [cachoeiras, setCachoeiras] = useState([]);
    const [cardSelecionado, setCardSelecionado] = useState(null);
    const [saving, setSaving] = useState(false);

    const fetchData = useCallback(() => {
        getCachoeiras().then(setCachoeiras);
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    const handleSave = async (formData) => {
        setSaving(true);
        try {
            if (cardSelecionado.id) {
                await updateCachoeira(cardSelecionado.id, formData);
            } else {
                await createCachoeira(formData);
            }
            fetchData();
            setCardSelecionado(null);
        } catch (err) {
            console.error(err);
            alert('Erro ao salvar. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        setSaving(true);
        try {
            await deleteCachoeira(cardSelecionado.id);
            fetchData();
            setCardSelecionado(null);
        } catch (err) {
            console.error(err);
            alert('Erro ao deletar. Tente novamente.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <>
            <ADMNavBar />
            <Container>
                <Title>Edição Cachoeiras</Title>
                <CreateButton onClick={() => setCardSelecionado(newCard)}>Criar Card</CreateButton>
                <SubContainer>
                    {cachoeiras.map((cachoeira) => (
                        <Card key={cachoeira.id} {...cachoeira} onClick={() => setCardSelecionado(cachoeira)} />
                    ))}
                </SubContainer>
                {cardSelecionado && (
                    <ModalEdit
                        card={cardSelecionado}
                        onClose={() => setCardSelecionado(null)}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        loading={saving}
                    />
                )}
            </Container>
            <Footer />
        </>
    )
}
