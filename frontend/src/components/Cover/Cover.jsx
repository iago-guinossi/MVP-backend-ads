import dedoDeDeus from '@/assets/dedodedeus.jpg'
import parnaso1 from '@/assets/parnaso.jpeg'
import parnaso2 from '@/assets/parnaso_2.jpeg'
import parnaso3 from '@/assets/parnaso_3.jpeg'
import { Slider } from '@/components/Slider'

const COVER_IMAGES = [
    {
        src: dedoDeDeus,
        alt: 'Imagem do Dedo de Deus',
    },
    {
        src: parnaso1,
        alt: 'Imagem do Parque Nacional da Serra dos Órgãos',
    },
    {
        src: parnaso2,
        alt: 'Imagem do Parque Nacional da Serra dos Órgãos',
    },
    {
        src: parnaso3,
        alt: 'Imagem do Parque Nacional da Serra dos Órgãos',
    },
]

export function Cover() {
    return <Slider images={COVER_IMAGES} />
}