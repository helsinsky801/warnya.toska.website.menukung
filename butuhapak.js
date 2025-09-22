// butuhapak.js - Popup untuk tampilan apa yang bisa ditanyakan di chatbot

document.addEventListener('DOMContentLoaded', function() {
    // Buat modal untuk informasi chatbot
    const modal = document.createElement('div');
    modal.id = 'chatbot-info-modal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content chatbot-info-modal-content';

    // Tombol close
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';

    // Heading
    const heading = document.createElement('h3');
    heading.textContent = 'Apa yang Bisa Anda Tanyakan?';

    // Info grid
    const infoGrid = document.createElement('div');
    infoGrid.className = 'info-grid';

    const infoItems = [
        {
            icon: '🍽️',
            title: 'Menu & Harga',
            desc: 'Tanyakan tentang menu minuman dan makanan, harga, serta rekomendasi menu favorit.'
        },
        {
            icon: '📱',
            title: 'Cara Pesan',
            desc: 'Informasi tentang cara memesan, layanan delivery, dan kontak WhatsApp.'
        },
        {
            icon: '🏪',
            title: 'Informasi Warung',
            desc: 'Jam buka, lokasi, tentang Warnya Toska, dan promo/diskon.'
        },
        {
            icon: '💬',
            title: 'Pertanyaan Umum',
            desc: 'Pertanyaan seputar layanan, kualitas, dan informasi lainnya.'
        }
    ];

    infoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';

        const itemTitle = document.createElement('h4');
        itemTitle.innerHTML = `${item.icon} ${item.title}`;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.desc;

        infoItem.appendChild(itemTitle);
        infoItem.appendChild(itemDesc);
        infoGrid.appendChild(infoItem);
    });

    // Quick examples
    const quickExamples = document.createElement('div');
    quickExamples.className = 'quick-examples';

    const examplesHeading = document.createElement('h4');
    examplesHeading.textContent = 'Contoh Pertanyaan:';

    const examplesList = document.createElement('ul');
    const examples = [
        '"Apa menu favorit di Warnya Toska?"',
        '"Berapa harga ES YAKULT JELLY?"',
        '"Bagaimana cara memesan?"',
        '"Jam buka warung sampai kapan?"'
    ];

    examples.forEach(example => {
        const li = document.createElement('li');
        li.textContent = example;
        examplesList.appendChild(li);
    });

    quickExamples.appendChild(examplesHeading);
    quickExamples.appendChild(examplesList);

    // Append semua elemen
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(heading);
    modalContent.appendChild(infoGrid);
    modalContent.appendChild(quickExamples);
    modal.appendChild(modalContent);

    // Append modal ke body
    document.body.appendChild(modal);

    // Event listener untuk close
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fungsi untuk membuka modal
    window.openChatbotInfoModal = function() {
        modal.style.display = 'block';
    };

    // Event listener untuk tombol buka modal
    const openBtn = document.getElementById('open-chatbot-info');
    if (openBtn) {
        openBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    // Tambahkan CSS untuk modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }

        .modal-content {
            background-color: #fff;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 90%;
            max-width: 600px;
            border-radius: 8px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .chatbot-info-modal-content {
            text-align: left;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 15px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(0,0,0,0.1);
            transition: background-color 0.3s;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            background: rgba(0,0,0,0.2);
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .info-item {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #00CED1;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .info-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .info-item h4 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 1.1rem;
        }

        .info-item p {
            margin: 0;
            color: #666;
            font-size: 14px;
            line-height: 1.4;
        }

        .quick-examples {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }

        .quick-examples h4 {
            margin: 0 0 10px 0;
            color: #333;
            font-size: 1.1rem;
        }

        .quick-examples ul {
            list-style-type: none;
            padding: 0;
        }

        .quick-examples li {
            background: #e8f4f8;
            margin: 5px 0;
            padding: 8px 12px;
            border-radius: 4px;
            font-style: italic;
            color: #555;
            font-size: 0.9rem;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
            .modal-content {
                width: 95%;
                max-width: none;
                margin: 2% auto;
                padding: 15px;
                border-radius: 12px;
                max-height: 90vh;
            }

            .close {
                font-size: 24px;
                width: 25px;
                height: 25px;
                top: 8px;
                right: 10px;
            }

            .info-grid {
                grid-template-columns: 1fr;
                gap: 15px;
                margin: 15px 0;
            }

            .info-item {
                padding: 12px;
            }

            .info-item h4 {
                font-size: 1rem;
                margin-bottom: 8px;
            }

            .info-item p {
                font-size: 13px;
            }

            .quick-examples {
                margin-top: 15px;
                padding-top: 15px;
            }

            .quick-examples h4 {
                font-size: 1rem;
                margin-bottom: 8px;
            }

            .quick-examples li {
                padding: 6px 10px;
                font-size: 0.85rem;
                margin: 4px 0;
            }
        }

        @media (max-width: 480px) {
            .modal-content {
                width: 98%;
                margin: 1% auto;
                padding: 10px;
                border-radius: 8px;
            }

            .close {
                font-size: 20px;
                width: 22px;
                height: 22px;
                top: 5px;
                right: 8px;
            }

            .info-item {
                padding: 10px;
            }

            .info-item h4 {
                font-size: 0.95rem;
                margin-bottom: 6px;
            }

            .info-item p {
                font-size: 12px;
            }

            .quick-examples h4 {
                font-size: 0.95rem;
            }

            .quick-examples li {
                padding: 5px 8px;
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(style);
});
