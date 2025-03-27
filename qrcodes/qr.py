import qrcode

# Lista de todas as salas
salas = ["IA-2.02", "LAB-3.05", "BLOC-A-101", "LAB-5.12"]

# URL base do seu site
url_base = "http://192.168.3.1:8000/?sala="

# Gera um QR Code para cada sala
for sala in salas:
    link = url_base + sala
    img = qrcode.make(link)
    img.save(f"qrcodes/sala_{sala}.png")  # Salva na pasta 'qrcodes'