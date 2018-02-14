def caesar_brute_force(message):
    SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123467890 !?.'
    for key in range(len(SYMBOLS)):
        translated = ''
        for symbol in message:
            if symbol in SYMBOLS:
                symbol_index = SYMBOLS.find(symbol)
                translated_index = symbol_index - key

                if translated_index < 0:
                    translated_index += len(SYMBOLS)

                translated += SYMBOLS[translated_index]

            else:
                translated += symbol
        print('Key #%s: %s' % (key, translated))

caesar_brute_force('quFIP?eGSeECNNS')
# caesar_brute_force('Zfbi,!tif!xpvme!qspcbcmz!fbu!nfA')