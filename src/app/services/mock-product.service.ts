// mock-product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {
  private data: any[] = [
    {   id: 1, 
        productName: 'PulseTech SonicWave', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1400, 
        rating: '4.1',
        productImageURL: 'https://tse2.mm.bing.net/th?id=OIP.vgEWJR6D56YaPHjFGxxIaAHaGs&pid=Api&P=0&h=300.png',
        specifications: 
            {
                overview: 'The PulseTech SonicWave headphones are high-quality, over-ear wired headphones designed to deliver exceptional audio clarity and comfort for an immersive listening experience.',
        keyFeatures: [
            {
                category: 'Sound Quality',
                details: [
                    '40mm dynamic drivers for crisp and balanced audio.',
                    'Frequency Response: 20Hz - 20kHz.',
                    'Impedance: 32 ohms.',
                    'Sensitivity: 105dB/mW.'
                ]
            },
            {
                category: 'Comfort and Design',
                details: [
                    'Soft, cushioned ear cups and an adjustable headband for extended comfort.',
                    'Durable construction with a sleek and timeless design.'
                ]
            },
            {
                category: 'Cable',
                details: [
                    'Detachable 3.5mm audio cable for versatile connectivity.',
                    'Cable Length: 1.2 meters.',
                    'Gold-plated connectors for reliable signal transmission.'
                ]
            },
            {
                category: 'Controls',
                details: [
                    'Inline remote and microphone for hands-free calls and music control (compatible with most smartphones).'
                ]
            },
            {
                category: 'Foldable Design',
                details: [
                    'Compact and foldable for easy storage and portability.'
                ]
            },
            {
                category: 'Compatibility',
                details: [
                    'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and laptops.'
                ]
            }
        ],
        dimensionsAndWeight: [
            'Headphones (unfolded): 180mm x 160mm x 75mm (L x W x H)',
            'Weight: 220g (without cable)'
        ],
        packageContents: [
            'AudioMax Pro-Wired headphones',
            'Detachable 3.5mm audio cable',
            'User manual'
        ],
        warranty: '1-year limited warranty covering manufacturing defects.',
        additionalInfo: 'The AudioMax Pro-Wired headphones provide an excellent audio experience with comfort and versatility. Whether you\'re at home, on the go, or in the office, these headphones are your perfect companion for high-quality sound and convenience.'
    },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 2, 
        productName: 'HarmoniX AcoustiSync Elite', 
        discountPercentage: '30%', 
        currentPrice: 1308, 
        fullPrice: 1800, 
        rating: '4.9',
        productImageURL: 'https://th.bing.com/th/id/OIP.fCwAuDIOubC0vKN8eqZ8-QHaHa?pid=ImgDet&rs=1.png',
        specifications: {
            overview: 'The HarmoniX AcoustiSync Elite headphones offer an outstanding wireless audio experience with advanced features for music lovers on the go.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        '50mm custom neodymium drivers for immersive and powerful sound.',
                        'Frequency Response: 10Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 110dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an ergonomic headband for all-day comfort.',
                        'Sleek and modern design with customizable LED lighting.'
                    ]
                },
                {
                    category: 'Wireless Connectivity',
                    details: [
                        'Bluetooth 5.0 for seamless wireless pairing with your devices.',
                        'Supports aptX HD for high-resolution audio streaming.'
                    ]
                },
                {
                    category: 'Battery Life',
                    details: [
                        'Up to 30 hours of playback time on a single charge.',
                        'Quick charge feature: 10 minutes of charging for 2 hours of playback.'
                    ]
                },
                {
                    category: 'Controls',
                    details: [
                        'Intuitive touch controls for playback, calls, and volume adjustments.',
                        'Built-in noise-canceling microphone for crystal-clear phone calls.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Collapsible design for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal compatibility with Bluetooth-enabled devices, including smartphones, tablets, and laptops.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 170mm x 80mm (L x W x H)',
                'Weight: 250g'
            ],
            packageContents: [
                'HarmoniX AcoustiSync Elite headphones',
                'USB-C charging cable',
                '3.5mm audio cable',
                'Carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience music like never before with the HarmoniX AcoustiSync Elite headphones. With premium sound quality, long-lasting battery life, and a comfortable design, these headphones are your ideal companion for music enjoyment.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ] 
    },
    { 
        id: 3,
        productName: 'EchoSounds EchoBeats Plus', 
        discountPercentage: '20%', 
        currentPrice: 800, 
        fullPrice: 1000, 
        rating: '4.5',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG7659.png',
        specifications: {
            overview: 'Introducing the EchoSounds EchoBeats Plus headphones, a timeless choice for audiophiles seeking high-quality wired audio performance.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Precision-tuned 50mm drivers for exceptional audio clarity and detail.',
                        'Frequency Response: 15Hz - 25kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 98dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush, padded ear cushions and an adjustable headband for extended listening comfort.',
                        'Classic and elegant design with a durable metal frame.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Detachable 3.5mm audio cable with oxygen-free copper for pristine audio transmission.',
                        'Cable Length: 1.5 meters.',
                        'Gold-plated connectors for reliable connectivity.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation to block out ambient sounds for an immersive listening experience.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 180mm x 85mm (L x W x H)',
                'Weight: 280g (without cable)'
            ],
            packageContents: [
                'EchoSounds EchoBeats Plus headphones',
                'Detachable 3.5mm audio cable',
                '¼-inch audio adapter',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the richness of wired audio with the EchoSounds EchoBeats Plus headphones. Designed for audiophiles, these headphones deliver pristine sound and long-lasting comfort, making them your perfect choice for immersive music listening.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 4, 
        productName: 'VirtuAudio TempoTunes Ultra', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.3',
        productImageURL: 'https://tse1.mm.bing.net/th?id=OIP.ZAE4bglxrqt9mg8pUFP8cwHaF7&pid=Api&P=0&h=300.png',
        specifications: {
            overview: 'Presenting the VirtuAudio TempoTunes Ultra headphones, engineered to provide exceptional audio fidelity and durability for music enthusiasts and professionals alike.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'High-resolution 40mm drivers for accurate and immersive sound reproduction.',
                        'Frequency Response: 20Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 105dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Memory foam ear cushions and an adjustable headband for extended listening comfort.',
                        'Robust and sleek metal construction with a matte finish.'
                    ]
                },
                {
                    category: 'Detachable Cable',
                    details: [
                        'Detachable 2.5mm braided audio cable for versatile connectivity.',
                        'Cable Length: 1.8 meters.',
                        'Gold-plated connectors for superior signal quality.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an uninterrupted listening experience, ideal for studio use.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and transport.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio interfaces.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 200mm x 185mm x 80mm (L x W x H)',
                'Weight: 290g (without cable)'
            ],
            packageContents: [
                'VirtuAudio TempoTunes Ultra headphones',
                'Detachable 2.5mm audio cable',
                '¼-inch audio adapter',
                'Hardshell carrying case',
                'User manual'
            ],
            warranty: '3-year limited warranty covering manufacturing defects.',
            additionalInfo: 'The VirtuAudio TempoTunes Ultra headphones are the choice of professionals and music enthusiasts seeking precision and durability. Whether you are in the studio or on the go, these headphones deliver outstanding sound quality and reliability.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 5, 
        productName: 'NovaWave CelestialTunes Max', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.8',
        productImageURL: 'https://th.bing.com/th/id/R.774f187bc09f94520feddbf8b579e744?rik=8sxknwRm1QB71g&pid=ImgRaw&r=0.png',
        specifications: {
            overview: 'Introducing the NovaWave CelestialTunes Max headphones, designed for audiophiles and music enthusiasts who demand premium sound quality and timeless style.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Advanced 50mm neodymium drivers for rich, clear, and dynamic sound reproduction.',
                        'Frequency Response: 10Hz - 30kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 108dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an adjustable headband for long-lasting comfort during extended listening sessions.',
                        'Classic and elegant design with real wood accents.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Durable and tangle-free braided audio cable with a 3.5mm gold-plated connector for maximum audio quality.',
                        'Cable Length: 1.5 meters.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an immersive listening experience, ideal for enjoying music in noisy environments.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for convenient storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 195mm x 180mm x 85mm (L x W x H)',
                'Weight: 270g (without cable)'
            ],
            packageContents: [
                'NovaWave CelestialTunes Max headphones',
                'Braided 3.5mm audio cable',
                '¼-inch audio adapter',
                'Premium carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the purity of sound with the NovaWave CelestialTunes Max headphones. Crafted for discerning listeners, these headphones offer a blend of exquisite sound and sophisticated design, making them an ideal choice for audio enthusiasts.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 6, 
        productName: 'AuralFusion FusionSync Pro', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '3.7',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101920.png',
        specifications: 
            {
                overview: 'The AuralFusion FusionSync Pro headphones are high-quality, over-ear wired headphones designed to deliver exceptional audio clarity and comfort for an immersive listening experience.',
        keyFeatures: [
            {
                category: 'Sound Quality',
                details: [
                    '40mm dynamic drivers for crisp and balanced audio.',
                    'Frequency Response: 20Hz - 20kHz.',
                    'Impedance: 32 ohms.',
                    'Sensitivity: 105dB/mW.'
                ]
            },
            {
                category: 'Comfort and Design',
                details: [
                    'Soft, cushioned ear cups and an adjustable headband for extended comfort.',
                    'Durable construction with a sleek and timeless design.'
                ]
            },
            {
                category: 'Cable',
                details: [
                    'Detachable 3.5mm audio cable for versatile connectivity.',
                    'Cable Length: 1.2 meters.',
                    'Gold-plated connectors for reliable signal transmission.'
                ]
            },
            {
                category: 'Controls',
                details: [
                    'Inline remote and microphone for hands-free calls and music control (compatible with most smartphones).'
                ]
            },
            {
                category: 'Foldable Design',
                details: [
                    'Compact and foldable for easy storage and portability.'
                ]
            },
            {
                category: 'Compatibility',
                details: [
                    'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and laptops.'
                ]
            }
        ],
        dimensionsAndWeight: [
            'Headphones (unfolded): 180mm x 160mm x 75mm (L x W x H)',
            'Weight: 220g (without cable)'
        ],
        packageContents: [
            'AuralFusion FusionSync Pro headphones',
            'Detachable 3.5mm audio cable',
            'User manual'
        ],
        warranty: '1-year limited warranty covering manufacturing defects.',
        additionalInfo: 'The AuralFusion FusionSync Pro headphones provide an excellent audio experience with comfort and versatility. Whether you\'re at home, on the go, or in the office, these headphones are your perfect companion for high-quality sound and convenience.'
    },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 7, 
        productName: 'RhythmoSonic AudioGrove', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.1',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG7630.png',
        specifications: {
            overview: 'The RhythmoSonic AudioGrove headphones offer an outstanding wireless audio experience with advanced features for music lovers on the go.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        '50mm custom neodymium drivers for immersive and powerful sound.',
                        'Frequency Response: 10Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 110dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an ergonomic headband for all-day comfort.',
                        'Sleek and modern design with customizable LED lighting.'
                    ]
                },
                {
                    category: 'Wireless Connectivity',
                    details: [
                        'Bluetooth 5.0 for seamless wireless pairing with your devices.',
                        'Supports aptX HD for high-resolution audio streaming.'
                    ]
                },
                {
                    category: 'Battery Life',
                    details: [
                        'Up to 30 hours of playback time on a single charge.',
                        'Quick charge feature: 10 minutes of charging for 2 hours of playback.'
                    ]
                },
                {
                    category: 'Controls',
                    details: [
                        'Intuitive touch controls for playback, calls, and volume adjustments.',
                        'Built-in noise-canceling microphone for crystal-clear phone calls.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Collapsible design for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal compatibility with Bluetooth-enabled devices, including smartphones, tablets, and laptops.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 170mm x 80mm (L x W x H)',
                'Weight: 250g'
            ],
            packageContents: [
                'RhythmoSonic AudioGrove headphones',
                'USB-C charging cable',
                '3.5mm audio cable',
                'Carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience music like never before with the RhythmoSonic AudioGrove headphones. With premium sound quality, long-lasting battery life, and a comfortable design, these headphones are your ideal companion for music enjoyment.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 8, 
        productName: 'ZenHarmonix ZenSound X1', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.6',
        productImageURL: 'https://freepngimg.com/thumb/headphones/6-headphones-png-image.png',
        specifications: {
            overview: 'Introducing the ZenHarmonix ZenSound X1 headphones, a timeless choice for audiophiles seeking high-quality wired audio performance.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Precision-tuned 50mm drivers for exceptional audio clarity and detail.',
                        'Frequency Response: 15Hz - 25kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 98dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush, padded ear cushions and an adjustable headband for extended listening comfort.',
                        'Classic and elegant design with a durable metal frame.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Detachable 3.5mm audio cable with oxygen-free copper for pristine audio transmission.',
                        'Cable Length: 1.5 meters.',
                        'Gold-plated connectors for reliable connectivity.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation to block out ambient sounds for an immersive listening experience.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 180mm x 85mm (L x W x H)',
                'Weight: 280g (without cable)'
            ],
            packageContents: [
                'ZenHarmonix ZenSound X1 headphones',
                'Detachable 3.5mm audio cable',
                '¼-inch audio adapter',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the richness of wired audio with the ZenHarmonix ZenSound X1 headphones. Designed for audiophiles, these headphones deliver pristine sound and long-lasting comfort, making them your perfect choice for immersive music listening.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 9, productName: 'PulseFlow SonicAura Supreme', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.7',
        productImageURL: 'https://freepngimg.com/download/headphones/30039-3-headphones-transparent.png',
        specifications: {
            overview: 'Presenting the PulseFlow SonicAura Supreme headphones, engineered to provide exceptional audio fidelity and durability for music enthusiasts and professionals alike.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'High-resolution 40mm drivers for accurate and immersive sound reproduction.',
                        'Frequency Response: 20Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 105dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Memory foam ear cushions and an adjustable headband for extended listening comfort.',
                        'Robust and sleek metal construction with a matte finish.'
                    ]
                },
                {
                    category: 'Detachable Cable',
                    details: [
                        'Detachable 2.5mm braided audio cable for versatile connectivity.',
                        'Cable Length: 1.8 meters.',
                        'Gold-plated connectors for superior signal quality.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an uninterrupted listening experience, ideal for studio use.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and transport.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio interfaces.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 200mm x 185mm x 80mm (L x W x H)',
                'Weight: 290g (without cable)'
            ],
            packageContents: [
                'PulseFlow SonicAura Supreme headphones',
                'Detachable 2.5mm audio cable',
                '¼-inch audio adapter',
                'Hardshell carrying case',
                'User manual'
            ],
            warranty: '3-year limited warranty covering manufacturing defects.',
            additionalInfo: 'The PulseFlow SonicAura Supreme headphones are the choice of professionals and music enthusiasts seeking precision and durability. Whether you are in the studio or on the go, these headphones deliver outstanding sound quality and reliability.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 10, 
        productName: 'TempoTone HarmoniSync 500', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.0',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101924.png',
        specifications: {
            overview: 'Introducing the TempoTone HarmoniSync 500 headphones, designed for audiophiles and music enthusiasts who demand premium sound quality and timeless style.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Advanced 50mm neodymium drivers for rich, clear, and dynamic sound reproduction.',
                        'Frequency Response: 10Hz - 30kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 108dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an adjustable headband for long-lasting comfort during extended listening sessions.',
                        'Classic and elegant design with real wood accents.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Durable and tangle-free braided audio cable with a 3.5mm gold-plated connector for maximum audio quality.',
                        'Cable Length: 1.5 meters.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an immersive listening experience, ideal for enjoying music in noisy environments.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for convenient storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 195mm x 180mm x 85mm (L x W x H)',
                'Weight: 270g (without cable)'
            ],
            packageContents: [
                'TempoTone HarmoniSync 500 headphones',
                'Braided 3.5mm audio cable',
                '¼-inch audio adapter',
                'Premium carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the purity of sound with the TempoTone HarmoniSync 500 headphones. Crafted for discerning listeners, these headphones offer a blend of exquisite sound and sophisticated design, making them an ideal choice for audio enthusiasts.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 11, 
        productName: 'SoundSculptor PulseWave', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.3',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101981.png',
        specifications: 
            {
                overview: 'The SoundSculptor PulseWave headphones are high-quality, over-ear wired headphones designed to deliver exceptional audio clarity and comfort for an immersive listening experience.',
        keyFeatures: [
            {
                category: 'Sound Quality',
                details: [
                    '40mm dynamic drivers for crisp and balanced audio.',
                    'Frequency Response: 20Hz - 20kHz.',
                    'Impedance: 32 ohms.',
                    'Sensitivity: 105dB/mW.'
                ]
            },
            {
                category: 'Comfort and Design',
                details: [
                    'Soft, cushioned ear cups and an adjustable headband for extended comfort.',
                    'Durable construction with a sleek and timeless design.'
                ]
            },
            {
                category: 'Cable',
                details: [
                    'Detachable 3.5mm audio cable for versatile connectivity.',
                    'Cable Length: 1.2 meters.',
                    'Gold-plated connectors for reliable signal transmission.'
                ]
            },
            {
                category: 'Controls',
                details: [
                    'Inline remote and microphone for hands-free calls and music control (compatible with most smartphones).'
                ]
            },
            {
                category: 'Foldable Design',
                details: [
                    'Compact and foldable for easy storage and portability.'
                ]
            },
            {
                category: 'Compatibility',
                details: [
                    'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and laptops.'
                ]
            }
        ],
        dimensionsAndWeight: [
            'Headphones (unfolded): 180mm x 160mm x 75mm (L x W x H)',
            'Weight: 220g (without cable)'
        ],
        packageContents: [
            'SoundSculptor PulseWave headphones',
            'Detachable 3.5mm audio cable',
            'User manual'
        ],
        warranty: '1-year limited warranty covering manufacturing defects.',
        additionalInfo: 'The SoundSculptor PulseWave headphones provide an excellent audio experience with comfort and versatility. Whether you\'re at home, on the go, or in the office, these headphones are your perfect companion for high-quality sound and convenience.'
    },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 12, 
        productName: 'SonicCraft VirtuWave Prodigy', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.9',
        productImageURL: 'https://pngimg.com/uploads/headphones/headphones_PNG101950.png',
        specifications: {
            overview: 'The SonicCraft VirtuWave Prodigy headphones offer an outstanding wireless audio experience with advanced features for music lovers on the go.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        '50mm custom neodymium drivers for immersive and powerful sound.',
                        'Frequency Response: 10Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 110dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an ergonomic headband for all-day comfort.',
                        'Sleek and modern design with customizable LED lighting.'
                    ]
                },
                {
                    category: 'Wireless Connectivity',
                    details: [
                        'Bluetooth 5.0 for seamless wireless pairing with your devices.',
                        'Supports aptX HD for high-resolution audio streaming.'
                    ]
                },
                {
                    category: 'Battery Life',
                    details: [
                        'Up to 30 hours of playback time on a single charge.',
                        'Quick charge feature: 10 minutes of charging for 2 hours of playback.'
                    ]
                },
                {
                    category: 'Controls',
                    details: [
                        'Intuitive touch controls for playback, calls, and volume adjustments.',
                        'Built-in noise-canceling microphone for crystal-clear phone calls.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Collapsible design for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal compatibility with Bluetooth-enabled devices, including smartphones, tablets, and laptops.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 170mm x 80mm (L x W x H)',
                'Weight: 250g'
            ],
            packageContents: [
                'SonicCraft VirtuWave Prodigy headphones',
                'USB-C charging cable',
                '3.5mm audio cable',
                'Carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience music like never before with the SonicCraft VirtuWave Prodigy headphones. With premium sound quality, long-lasting battery life, and a comfortable design, these headphones are your ideal companion for music enjoyment.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]
    },
    { 
        id: 13,
        productName: 'CelestialSound EchoZenith Elite', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/R.cbef05c52debdf0ae480a14153b16024?rik=lWTJVcYVlRxHWA&riu=http%3a%2f%2fwww.officialpsds.com%2fimages%2fthumbs%2fDJ-HEADPHONES-psd23114.png&ehk=INV4o6V5asyye1On95AegTaICYllY%2bAAJp5JNkWXzJk%3d&risl=&pid=ImgRaw&r=0',
        specifications: {
            overview: 'Introducing the CelestialSound EchoZenith Elite headphones, a timeless choice for audiophiles seeking high-quality wired audio performance.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Precision-tuned 50mm drivers for exceptional audio clarity and detail.',
                        'Frequency Response: 15Hz - 25kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 98dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush, padded ear cushions and an adjustable headband for extended listening comfort.',
                        'Classic and elegant design with a durable metal frame.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Detachable 3.5mm audio cable with oxygen-free copper for pristine audio transmission.',
                        'Cable Length: 1.5 meters.',
                        'Gold-plated connectors for reliable connectivity.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation to block out ambient sounds for an immersive listening experience.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 190mm x 180mm x 85mm (L x W x H)',
                'Weight: 280g (without cable)'
            ],
            packageContents: [
                'CelestialSound EchoZenith Elite headphones',
                'Detachable 3.5mm audio cable',
                '¼-inch audio adapter',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the richness of wired audio with the CelestialSound EchoZenith Elite headphones. Designed for audiophiles, these headphones deliver pristine sound and long-lasting comfort, making them your perfect choice for immersive music listening.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ] },
    { 
        id: 14, 
        productName: 'PulseFusion NovaSync Harmony', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.5',
        productImageURL: 'https://th.bing.com/th/id/OIF.33ku0GdCDMbu1AiWUlrnNw?pid=ImgDet&rs=1.png',
        specifications: {
            overview: 'Presenting the PulseFusion NovaSync Harmony headphones, engineered to provide exceptional audio fidelity and durability for music enthusiasts and professionals alike.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'High-resolution 40mm drivers for accurate and immersive sound reproduction.',
                        'Frequency Response: 20Hz - 40kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 105dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Memory foam ear cushions and an adjustable headband for extended listening comfort.',
                        'Robust and sleek metal construction with a matte finish.'
                    ]
                },
                {
                    category: 'Detachable Cable',
                    details: [
                        'Detachable 2.5mm braided audio cable for versatile connectivity.',
                        'Cable Length: 1.8 meters.',
                        'Gold-plated connectors for superior signal quality.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an uninterrupted listening experience, ideal for studio use.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for easy storage and transport.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio interfaces.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 200mm x 185mm x 80mm (L x W x H)',
                'Weight: 290g (without cable)'
            ],
            packageContents: [
                'PulseFusion NovaSync Harmony headphones',
                'Detachable 2.5mm audio cable',
                '¼-inch audio adapter',
                'Hardshell carrying case',
                'User manual'
            ],
            warranty: '3-year limited warranty covering manufacturing defects.',
            additionalInfo: 'The PulseFusion NovaSync Harmony headphones are the choice of professionals and music enthusiasts seeking precision and durability. Whether you are in the studio or on the go, these headphones deliver outstanding sound quality and reliability.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ]},
    { 
        id: 15, 
        productName: 'AudioNova ZenSculptor Pro', 
        discountPercentage: '50%', 
        currentPrice: 700, 
        fullPrice: 1100, 
        rating: '4.7',
        productImageURL: 'https://th.bing.com/th/id/OIF.DT2uirIYcVMPeCxyjh5j6Q?pid=ImgDet&rs=1.png',
        specifications: {
            overview: 'Introducing the AudioNova ZenSculptor Pro headphones, designed for audiophiles and music enthusiasts who demand premium sound quality and timeless style.',
            keyFeatures: [
                {
                    category: 'Sound Quality',
                    details: [
                        'Advanced 50mm neodymium drivers for rich, clear, and dynamic sound reproduction.',
                        'Frequency Response: 10Hz - 30kHz.',
                        'Impedance: 32 ohms.',
                        'Sensitivity: 108dB/mW.'
                    ]
                },
                {
                    category: 'Comfort and Design',
                    details: [
                        'Plush memory foam ear cushions and an adjustable headband for long-lasting comfort during extended listening sessions.',
                        'Classic and elegant design with real wood accents.'
                    ]
                },
                {
                    category: 'Cable',
                    details: [
                        'Durable and tangle-free braided audio cable with a 3.5mm gold-plated connector for maximum audio quality.',
                        'Cable Length: 1.5 meters.'
                    ]
                },
                {
                    category: 'Noise Isolation',
                    details: [
                        'Passive noise isolation for an immersive listening experience, ideal for enjoying music in noisy environments.'
                    ]
                },
                {
                    category: 'Foldable Design',
                    details: [
                        'Foldable and compact for convenient storage and portability.'
                    ]
                },
                {
                    category: 'Compatibility',
                    details: [
                        'Universal 3.5mm audio jack for compatibility with a wide range of devices, including smartphones, tablets, and audio players.'
                    ]
                }
            ],
            dimensionsAndWeight: [
                'Headphones (unfolded): 195mm x 180mm x 85mm (L x W x H)',
                'Weight: 270g (without cable)'
            ],
            packageContents: [
                'AudioNova ZenSculptor Pro headphones',
                'Braided 3.5mm audio cable',
                '¼-inch audio adapter',
                'Premium carrying pouch',
                'User manual'
            ],
            warranty: '2-year limited warranty covering manufacturing defects.',
            additionalInfo: 'Experience the purity of sound with the AudioNova ZenSculptor Pro headphones. Crafted for discerning listeners, these headphones offer a blend of exquisite sound and sophisticated design, making them an ideal choice for audio enthusiasts.'
        },
        reviews: [
            {
                reviewText: 'The wired headphones I recently purchased left me thoroughly impressed. The sound quality is impeccable, delivering crisp highs and deep, punchy bass that elevates my music experience. The build quality feels durable with its robust cables and sturdy connectors. Comfort-wise, the cushioned ear cups provide extended listening comfort without causing fatigue. These headphones also excel in noise isolation, drowning out external distractions for immersive audio. The in-line remote and microphone are convenient for on-the-go control and hands-free calls. While wireless options are popular, these wired headphones prove that quality and reliability are still paramount, making them an excellent choice for audio enthusiasts.',
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/4.jpg',
                reviewerName: 'Jonny Smith',
                rating: 3.9
            },
            {
                reviewText: "I'm genuinely impressed by the wired headphones I recently got. Sound quality is impeccable—crisp highs, deep punchy bass. The build feels durable with robust cables and sturdy connectors. Comfort-wise, cushioned ear cups offer fatigue-free listening. They excel at noise isolation, immersing you in audio. The in-line remote and mic are convenient. In a world favoring wireless, these wired headphones prove quality and reliability still matter. Perfect for audio enthusiasts.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/3.jpg',
                reviewerName: 'Emily Johnson',
                rating: 4.7
            },
            {
                reviewText: "These wired headphones I recently snagged have left me thoroughly impressed. Sound quality? Impeccable! They deliver clear highs and robust bass that elevates my music. The build? Rock-solid! Sturdy cables and connectors promise durability. Comfort-wise, those cushioned ear cups keep fatigue at bay during extended listening sessions.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/2.jpg',
                reviewerName: 'David Rodriguez',
                rating: 4.9
            },
            {
                reviewText: "I recently got my hands on these wired headphones, and they've left quite an impression. The sound quality is truly impressive, offering clear highs and a deep, resonant bass that elevates every listening session. When it comes to build quality, these headphones are built like a tank, with durable cables and solid connectors that ensure longevity.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/women/1.jpg',
                reviewerName: 'Sophia Chen',
                rating: 4.5
            },
            {
                reviewText: "I recently upgraded to the noise-canceling headphones, and the difference is night and day. The ANC technology is incredibly effective, making my daily commute peaceful. The sound quality is top-notch, with rich bass and clear mids and highs. They're comfortable for long listening sessions, and the build quality feels premium. The battery life is impressive, lasting me through long flights. These headphones have truly enhanced my audio experience.",
                reviewerAvatarURL: 'https://randomuser.me/api/portraits/men/9.jpg',
                reviewerName: 'Michael Smith',
                rating: 4.8
            }
        ] }
  ];

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find(item => item.id === id);
  }

  // Implement other methods as required
}
