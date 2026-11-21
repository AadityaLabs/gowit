tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: {
                            950: '#090D16',
                            900: '#0F1623',
                            800: '#162033',
                            700: '#1F2D47',
                        },
                        cream: {
                            50: '#FAF8F3',
                            100: '#F4F1EA',
                            200: '#E8E2D5',
                            300: '#D6CEBE',
                        },
                        lime: {
                            accent: '#D2F27C',
                            hover: '#C3E862',
                            soft: 'rgba(210, 242, 124, 0.15)',
                        }
                    },
                    fontFamily: {
                        serif: ['"Playfair Display"', 'Georgia', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                    },
                    boxShadow: {
                        'soft': '0 20px 40px -15px rgba(9, 13, 22, 0.08)',
                        'glow': '0 0 30px rgba(210, 242, 124, 0.25)',
                        'glass': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
                    }
                }
            }
        }
