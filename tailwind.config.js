tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                        plum: {
                            950: '#16112B',
                            900: '#1F183D',
                            800: '#2B2252',
                            700: '#3B2F6E',
                        },
                        lavender: {
                            400: '#9B87F5',
                            500: '#7C5DFA',
                            600: '#6544E8',
                        },
                        skybrand: {
                            400: '#38BDF8',
                            500: '#0EA5E9',
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-14px)' },
                        }
                    }
                }
            }
        }
