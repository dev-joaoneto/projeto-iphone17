import { useState } from 'react';
import Azul from "../../public/img/iphone-blue.jpg"
import Natural from "../../public/img/iphone-silver.jpg"
import Laranja from "../../public/img/iphone-orange.jpg"

function Colors() {
    const colors = [
        { id: 'blue', name: 'Titânio Azul', image: Azul, colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: Natural, colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: Laranja, colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' },
    ];

    const [selectedColor, setSelectedColor] = useState('blue');

    return (
        <section id='colors' className='bg-black py-20 px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-5xl md:text-6xl font-bold mb-4'>Escolha sua cor</h2>
                    <p className='text-gray-400 text-xl'>Quatro acabamentos em titânio lindos</p>
                </div>

                <div className='flex justify-center mb-12'>
                    <div className='relative w-full max-w-3xl'>
                        <div className='relative flex items-center justify-center min-h-100'>
                            <img src={colors.find(color => color.id === selectedColor).image}
                                alt='iphone 17'
                                className='max-w-full max-h-full mx-auto'></img>
                        </div>

                        <div className='absolute bottom-8 left-0 right-0 text-center'>
                            <div className='px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block'>
                                <h3 className='text-2xl font-semibold'>{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    {colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={`relative transition-all duration-300 cursor-pointer`}>
                            <div className={`w-14 h-14 rounded-full border-4
                                             ${color.colorClass}
                                             ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}`}>
                            </div>
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
                    {models.map((model, index) => (
                        <div key={index} className='bg-linear-to-br from-gray-900 to-transparent p-8 rounded-3xl border border-gray-800'>
                            <div className='text-4xl mb-4'>📱</div>
                            <h3 className='text-2xl font-bold mb-3'>iPhone 17 {model.name}</h3>
                            <p className='text-gray-400 mb-4'>{model.screen}</p>
                            <ul className='space-y-2 text-gray-300'>
                                <li className=''>{model.storage}</li>
                                <li className=''>{model.battery}</li>
                                <li className=''>{model.weight}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-16'>
                    <button className='bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-6 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer'>
                        Compre agora a partir de R$ 9.299,00
                    </button>
                    <p>Ou até em 12x de R$ 774,92 sem juros</p>
                </div>
            </div>
        </section>
    );
}

export default Colors;