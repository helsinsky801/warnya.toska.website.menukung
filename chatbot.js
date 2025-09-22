// chatbot.js - Comprehensive Q&A Chatbot for Warnya Toska

document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const quickButtons = document.querySelectorAll('.quick-btn');

    // Knowledge base for Q&A
    const knowledgeBase = {
        // Menu related questions
        'menu': {
            keywords: ['menu', 'makanan', 'minuman', 'makan', 'minum', 'apa saja', 'pilihan'],
            responses: [
                'Menu Warnya Toska terdiri dari berbagai minuman dan makanan. Untuk minuman: ES YAKULT JELLY, ES KOPI SUSU ESPRESSO, ES CAPPUCINO, ES EXTRA JOSS, ES SYRUP ABC, KOPI SUSU PANAS, TEH PANAS, dll. Untuk makanan: MIE GORENG, NASI GORENG, TELUR CRISPY, SEBLAK, JAMUR CRISPY, KULIT AYAM CRISPY.',
                'Kami menyediakan berbagai menu mulai dari minuman dingin dan panas hingga makanan ringan. Silakan lihat halaman Menu untuk detail lengkapnya.'
            ]
        },
        'harga': {
            keywords: ['harga', 'berapa', 'mahal', 'murah', 'biaya', 'cost', 'price'],
            responses: [
                'Harga menu Warnya Toska sangat terjangkau, mulai dari Rp 5.000 untuk minuman dan Rp 10.000 untuk makanan. Kami berkomitmen memberikan kualitas terbaik dengan harga yang ramah di kantong.',
                'Menu kami dirancang dengan harga yang kompetitif. Minuman mulai dari Rp 5.000, makanan mulai dari Rp 10.000. Diskon tersedia untuk pembelian dalam jumlah besar.'
            ]
        },
        'favorit': {
            keywords: ['favorit', 'rekomendasi', 'terbaik', 'paling enak', 'suka'],
            responses: [
                'Menu favorit pelanggan kami adalah ES YAKULT JELLY dan MIE GORENG. Juga sangat direkomendasikan ES KOPI SUSU ESPRESSO dan NASI GORENG TELUR.',
                'Berdasarkan ulasan pelanggan, menu yang paling diminati adalah ES CAPPUCINO FULL UHT dan SEBLAK. Namun semua menu kami memiliki cita rasa yang khas!'
            ]
        },

        // Ordering related questions
        'pesan': {
            keywords: ['pesan', 'order', 'cara pesan', 'bagaimana pesan', 'proses'],
            responses: [
                'Untuk memesan, Anda bisa datang langsung ke warung atau pesan melalui WhatsApp di nomor 085752222285. Kami juga memiliki sistem pemesanan online di website ini.',
                'Cara pesan sangat mudah! Klik tombol "Pesan" pada menu yang diinginkan, atau hubungi kami langsung via WhatsApp untuk pemesanan cepat.'
            ]
        },
        'whatsapp': {
            keywords: ['whatsapp', 'wa', 'kontak', 'hubungi', 'telepon'],
            responses: [
                'Anda bisa menghubungi kami melalui WhatsApp di nomor 085752222285. Tim kami siap membantu Anda 24 jam untuk pemesanan dan informasi.',
                'Nomor WhatsApp resmi Warnya Toska: 085752222285. Kirim pesan dengan format: "Saya ingin pesan [nama menu] sebanyak [jumlah]"'
            ]
        },
        'antar': {
            keywords: ['antar', 'delivery', 'kirim', 'jemput', 'diantar'],
            responses: [
                'Ya, kami menyediakan layanan antar untuk area sekitar warung. Biaya antar tergantung jarak, mulai dari Rp 5.000. Hubungi kami untuk informasi lebih detail.',
                'Layanan delivery tersedia untuk radius 5km dari lokasi warung. Minimal order Rp 25.000 untuk mendapatkan free delivery.'
            ]
        },

        // Business hours and location
        'jam': {
            keywords: ['jam', 'buka', 'tutup', 'waktu', 'operasional', 'buka sampai'],
            responses: [
                'Warnya Toska buka setiap hari dari pukul 10:00 pagi sampai 22:00 malam. Kami tutup sementara untuk persiapan buka resmi.',
                'Jam operasional: Setiap hari 10:00 - 22:00 WIB. Saat ini warung sedang dalam tahap persiapan pembukaan resmi.'
            ]
        },
        'lokasi': {
            keywords: ['lokasi', 'alamat', 'dimana', 'tempat', 'address'],
            responses: [
                'Warnya Toska berlokasi di [Alamat akan diupdate saat warung resmi buka]. Kami berada di area strategis dan mudah dijangkau.',
                'Lokasi warung akan segera diumumkan. Saat ini kami sedang mempersiapkan pembukaan resmi. Follow akun sosial media kami untuk update terbaru!'
            ]
        },

        // About the business
        'tentang': {
            keywords: ['tentang', 'warnya toska', 'siapa', 'apa itu', 'profil'],
            responses: [
                'Warnya Toska adalah warung modern yang menyajikan berbagai minuman dan makanan dengan cita rasa khas. Kami berkomitmen memberikan pengalaman kuliner terbaik dengan harga terjangkau.',
                'Warnya Toska hadir untuk memberikan alternatif tempat nongkrong yang nyaman dengan menu-menu yang menggugah selera. Kami fokus pada kualitas dan kepuasan pelanggan.'
            ]
        },
        'diskon': {
            keywords: ['diskon', 'promo', 'potongan', 'hemat', 'murah'],
            responses: [
                'Saat ini kami sedang mempersiapkan berbagai promo menarik untuk pembukaan resmi. Follow akun Instagram @warnyatoska untuk update promo terbaru!',
                'Diskon spesial akan tersedia untuk pembelian pertama dan pembelian dalam jumlah besar. Tunggu pengumuman resmi pembukaan warung kami.'
            ]
        },

        // General questions
        'halo': {
            keywords: ['halo', 'hi', 'hai', 'hello', 'selamat'],
            responses: [
                'Halo! Selamat datang di Warnya Toska. Ada yang bisa saya bantu hari ini?',
                'Hai! Terima kasih telah mengunjungi website Warnya Toska. Apa yang ingin Anda ketahui?'
            ]
        },
        'terima kasih': {
            keywords: ['terima kasih', 'thanks', 'thank you', 'makasih'],
            responses: [
                'Sama-sama! Terima kasih telah menggunakan layanan chatbot Warnya Toska. Sampai jumpa!',
                'Senang bisa membantu Anda. Jangan ragu untuk bertanya lagi jika ada yang perlu diketahui.'
            ]
        },
        'cara buat dia balik lagi gimana wak': {
            keywords: ['buat dia kembali', 'cara agar dia balik lagi ke pada ku', 'aku ingin dia kembali', 'aku mau balikan lagi ama dia'],
            responses: [
                ,
                'butuhapok dah banyak ngelem anak biak tuk,, Sadar diri kontol aii bayah minta yang aneh aneh, golak kau ku tampar neh kimay.'
            ]
        },
        'aok aok': {
            keywords: ['aok am', 'dahlah', 'anjeng', 'kimay lah'],
            responses: [
                
                'nyam nanyo masok akal siket bangsat aii tampa ke palo neh .'
            ]
        },
        'sapai mulah': {
            keywords: ['sapai mulah website tuk', 'siapa yang membuat website ini', 'siapa yang membuat website ini', 'sepai mulah situs tuk'],
            responses: [
                'awen mulah ee!',
                'awen kita yang paling kereen nia lahh wak wak pakai nanya gik dehh.'
            ]
        },
        'ajakan sesat': {
            keywords: ['ngelem bom', 'naret bom', 'ada barang bagus nii', 'nak kau sabu lihin'],
            responses: [
                'nang maik ku budu budu tahapak aii luat umak ku neh!',
                'nang maik ku budu budu kamparadoh aii, kau ku tampa ke palo  nehh,, ku anak alim luat umak ku neh😊.'
            ]
        },
        

        // Default responses
        'default': {
            responses: [
                'Maaf, saya belum memahami pertanyaan Anda. Coba tanyakan tentang menu, harga, cara pesan, atau informasi lainnya tentang Warnya Toska.',
                'Saya masih belajar untuk menjawab lebih banyak pertanyaan. Silakan tanyakan tentang menu, pemesanan, atau informasi warung kami.',
                'Pertanyaan Anda sangat menarik! Untuk saat ini, saya bisa membantu dengan informasi tentang menu, harga, dan cara pemesanan. Ada yang spesifik yang ingin Anda ketahui?'
            ]
        }
    };

    // Function to find best matching response
    function findResponse(userMessage) {
        const message = userMessage.toLowerCase();

        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (key === 'default') continue;

            for (const keyword of data.keywords) {
                if (message.includes(keyword)) {
                    const responses = data.responses;
                    return responses[Math.floor(Math.random() * responses.length)];
                }
            }
        }

        // Return default response if no match found
        const defaultResponses = knowledgeBase.default.responses;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // Function to add message to chat
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const paragraph = document.createElement('p');
        paragraph.textContent = content;
        contentDiv.appendChild(paragraph);

        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, true);

        // Clear input
        chatInput.value = '';

        // Simulate typing delay
        setTimeout(() => {
            const response = findResponse(message);
            addMessage(response);
        }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
    }

    // Event listeners
    sendButton.addEventListener('click', () => {
        handleUserInput(chatInput.value);
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput(chatInput.value);
        }
    });

    // Quick button event listeners
    quickButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            handleUserInput(question);
        });
    });

    // Auto-scroll to bottom when new messages are added
    const observer = new MutationObserver(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    observer.observe(chatMessages, {
        childList: true,
        subtree: true
    });

    // Add welcome message with delay
    setTimeout(() => {
        addMessage('Halo! Saya adalah chatbot Warnya Toska. Apa yang bisa saya bantu hari ini?');
    }, 1000);

    // Add typing indicator (optional enhancement)
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        return typingDiv;
    }

    function hideTypingIndicator(indicator) {
        if (indicator && indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
    }

    // Enhanced handleUserInput with typing indicator
    function handleUserInputEnhanced(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, true);

        // Clear input
        chatInput.value = '';

        // Show typing indicator
        const typingIndicator = showTypingIndicator();

        // Simulate typing delay
        setTimeout(() => {
            hideTypingIndicator(typingIndicator);
            const response = findResponse(message);
            addMessage(response);
        }, 1000 + Math.random() * 2000); // Random delay between 1000-3000ms
    }

    // Replace the original handler
    sendButton.addEventListener('click', () => {
        handleUserInputEnhanced(chatInput.value);
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInputEnhanced(chatInput.value);
        }
    });

    quickButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.getAttribute('data-question');
            handleUserInputEnhanced(question);
        });
    });

    // Add CSS for typing indicator
    const style = document.createElement('style');
    style.textContent = `
        .typing-indicator .typing-dots {
            display: flex;
            gap: 4px;
            padding: 8px 0;
        }

        .typing-indicator .typing-dots span {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #000000ff;
            animation: typing 1.4s infinite;
        }

        .typing-indicator .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-indicator .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.4;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
