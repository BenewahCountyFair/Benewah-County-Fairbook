from pathlib import Path
from math import cos, pi, sin

from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

OUT = Path("output/pdf/2026-Benewah-County-Fair-Schedule-Print.pdf")
ART = Path("assets/fair-schedule-clipart.png")
QR = Path("assets/fairbook-qr.png")
ONLINE_FAIRBOOK_URL = "https://benewahcountyfair.github.io/Benewah-County-Fairbook/"
W, H = letter

pdfmetrics.registerFont(TTFont("Rockwell", "/System/Library/Fonts/Supplemental/Rockwell.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("Rockwell-Bold", "/System/Library/Fonts/Supplemental/Rockwell.ttc", subfontIndex=1))

SCHEDULE = {
    "Monday|August 17": [
        ("9 a.m.-6 p.m.", "Booth set-up"),
        ("4-7 p.m.", "4-H indoor project interviews"),
        ("6 p.m.", "4-H dog show"),
    ],
    "Tuesday|August 18": [
        ("8 a.m.", "4-H horse show"),
        ("10 a.m.-7 p.m.", "Open Class indoor exhibit check-in"),
        ("4-7 p.m.", "4-H indoor project interviews"),
    ],
    "Wednesday|August 19": [
        ("7 a.m.-noon", "Livestock exhibit check-in"),
        ("Noon-4 p.m.", "Poultry & rabbit fitting & showing quality judging"),
        ("Noon-7:30 p.m.", "4-H livestock assessment|Walker Kitchen"),
        ("4-7 p.m.", "Livestock exhibit check-in"),
        ("NOTICE", "All fair buildings closed for judging"),
    ],
    "Thursday|August 20": [
        ("8-8:30 a.m.", "All Junior Show participants meet with judge"),
        ("8:30-10 a.m.", "Beef quality"),
        ("10 a.m.-noon", "Swine fitting & showing"),
        ("Noon", "Break"),
        ("1-2:30 p.m.", "Market lamb quality"),
        ("2:30-3:30 p.m.", "Market goat quality"),
        ("3:30-4 p.m.", "Dairy goat / pet quality"),
        ("4:15-5 p.m.", "Horse showmanship finals"),
        ("5:30-7 p.m.", "Livestock judging contest"),
    ],
    "Friday|August 21": [
        ("8-9:30 a.m.", "Beef fitting & showing"),
        ("9:30-11:30 a.m.", "Swine quality"),
        ("11:30 a.m.-12:30 p.m.", "Break"),
        ("12:30-1:15 p.m.", "Sheep fitting & showing"),
        ("Afternoon", "Vendors on the lawn"),
        ("1:15-2:15 p.m.", "Goat fitting & showing"),
        ("2:30-3 p.m.", "PeeWee swine show|Ages 5-8; pre-register with the barn superintendent before noon."),
        ("4 p.m.", "ADG, All Around & Showmanship Buckle awards"),
        ("4-7 p.m.", "Kiwanis Breakfast for Dinner"),
        ("4:30-6:30 p.m.", "Round Robin"),
    ],
    "Saturday|August 22": [
        ("7-9 a.m.", "Buyers' Appreciation Breakfast"),
        ("All day", "Vendors on the lawn"),
        ("8-9:30 a.m.", "Dessert contest entries"),
        ("9 a.m.", "Livestock auction"),
        ("Noon", "Dessert auction|Immediately following livestock auction."),
        ("1 p.m.", "Turkey Bingo"),
        ("2 p.m.", "Archery contest"),
        ("5 p.m.", "Junior Show & Sale BBQ and potluck|Bring a side dish; bingo follows."),
    ],
    "Sunday|August 23": [("9 a.m.", "Check-out of all exhibits")],
}


def wrap(text, font, size, width):
    words, lines, current = text.split(), [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if current and pdfmetrics.stringWidth(candidate, font, size) > width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def rosette(c, cx, cy, r=6):
    c.saveState()
    c.setLineWidth(.75)
    points = []
    for i in range(24):
        radius = r if i % 2 == 0 else r * .72
        angle = -pi / 2 + i * pi / 12
        points.append((cx + cos(angle) * radius, cy + sin(angle) * radius))
    p = c.beginPath()
    p.moveTo(*points[0])
    for point in points[1:]:
        p.lineTo(*point)
    p.close()
    c.drawPath(p, fill=0, stroke=1)
    c.circle(cx, cy, r * .43, fill=0, stroke=1)
    c.restoreState()


def page_border(c):
    c.setLineWidth(1.25)
    c.roundRect(24, 24, W - 48, H - 48, 8, fill=0, stroke=1)
    c.setLineWidth(.35)
    c.roundRect(28, 28, W - 56, H - 56, 6, fill=0, stroke=1)


def header(c):
    c.setFont("Times-Bold", 25)
    c.drawString(42, 747, "2026 BENEWAH")
    c.drawString(42, 719, "COUNTY FAIR")
    c.setFont("Rockwell-Bold", 12)
    c.drawString(43, 699, "OFFICIAL FAIR WEEK SCHEDULE")
    c.setFont("Rockwell", 10)
    c.drawString(43, 683, "AUGUST 17-23")

    if ART.exists():
        image = ImageReader(str(ART))
        c.drawImage(image, 343, 682, width=223, height=74.3, mask="auto", preserveAspectRatio=True, anchor="c")

    c.setLineWidth(1.6)
    c.line(40, 672, 572, 672)
    c.setLineWidth(.45)
    c.line(40, 668, 572, 668)


def online_fairbook_link(c):
    if not QR.exists():
        return

    qr_x, qr_y, qr_size = 48, 49, 94
    c.setFillColorRGB(1, 1, 1)
    c.rect(qr_x - 3, qr_y - 3, qr_size + 6, qr_size + 6, fill=1, stroke=0)
    c.drawImage(
        ImageReader(str(QR)),
        qr_x,
        qr_y,
        width=qr_size,
        height=qr_size,
        mask="auto",
        preserveAspectRatio=True,
        anchor="c",
    )

    label_x = 151
    c.setFillColorRGB(0, 0, 0)
    c.setFont("Rockwell-Bold", 8.5)
    c.drawString(label_x, 105, "SCAN FOR THE")
    c.drawString(label_x, 93.5, "ONLINE FAIR BOOK")
    c.setFont("Helvetica", 5.8)
    c.drawString(label_x, 80, "benewahcountyfair.github.io")

    c.linkURL(
        ONLINE_FAIRBOOK_URL,
        (qr_x, qr_y, qr_x + qr_size, qr_y + qr_size),
        relative=0,
        thickness=0,
    )
    c.linkURL(
        ONLINE_FAIRBOOK_URL,
        (label_x, 76, 278, 113),
        relative=0,
        thickness=0,
    )


def day_heading(c, x, y, width, key):
    weekday, date = key.split("|")
    rosette(c, x + 6, y - 7, 6)
    c.setFont("Rockwell-Bold", 12.2)
    c.drawString(x + 17, y - 11, weekday.upper())
    c.setFont("Rockwell", 9)
    c.drawRightString(x + width, y - 10.5, date.upper())
    c.setLineWidth(.8)
    c.line(x, y - 17, x + width, y - 17)
    return y - 22


def event_row(c, x, y, width, time, content):
    if time == "NOTICE":
        lines = wrap(content.upper(), "Rockwell-Bold", 8.7, width - 16)
        height = 9 + len(lines) * 10.2
        c.setFillGray(.91)
        c.roundRect(x, y - height, width, height, 3, fill=1, stroke=1)
        c.setFillGray(0)
        c.setFont("Rockwell-Bold", 8.7)
        for i, line in enumerate(lines):
            c.drawString(x + 8, y - 11 - i * 10.2, line)
        return y - height - 4

    main, note = (content.split("|", 1) + [None])[:2] if "|" in content else (content, None)
    time_w = 88
    body_w = width - time_w - 7
    body_lines = wrap(main, "Rockwell", 9.2, body_w)
    note_lines = wrap(note, "Helvetica-Oblique", 7.8, body_w) if note else []
    time_lines = wrap(time, "Helvetica-Bold", 8.35, time_w - 5)
    line_h = 10.4
    height = max(17.5, 6 + max(len(time_lines), len(body_lines) + len(note_lines)) * line_h)

    c.setFont("Helvetica-Bold", 8.35)
    for i, line in enumerate(time_lines):
        c.drawString(x + 2, y - 9.5 - i * 9.4, line)

    tx, ty = x + time_w, y - 10
    c.setFont("Rockwell", 9.2)
    for line in body_lines:
        c.drawString(tx, ty, line)
        ty -= line_h
    if note_lines:
        c.setFont("Helvetica-Oblique", 7.8)
        for line in note_lines:
            c.drawString(tx, ty + .5, line)
            ty -= 9.1

    c.setDash(1.1, 2.1)
    c.setLineWidth(.28)
    c.line(x, y - height, x + width, y - height)
    c.setDash()
    return y - height


def draw_column(c, x, top, width, keys):
    y = top
    for key in keys:
        y = day_heading(c, x, y, width, key)
        for time, content in SCHEDULE[key]:
            y = event_row(c, x, y, width, time, content)
        y -= 8
    return y


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=letter, pageCompression=1)
    c.setTitle("2026 Benewah County Fair Schedule")
    page_border(c)
    header(c)

    left, right, col_w, top = 42, 317, 253, 655
    c.setLineWidth(.45)
    c.line(306, 650, 306, 48)
    rosette(c, 306, 659, 4.5)
    rosette(c, 306, 41, 4.5)

    draw_column(c, left, top, col_w, [
        "Monday|August 17", "Tuesday|August 18", "Wednesday|August 19", "Thursday|August 20"
    ])
    draw_column(c, right, top, col_w, [
        "Friday|August 21", "Saturday|August 22", "Sunday|August 23"
    ])

    online_fairbook_link(c)

    c.setFont("Helvetica-Oblique", 7)
    c.drawCentredString(W / 2, 34, "Times and activities are subject to change. Please check with the appropriate superintendent for details.")
    c.save()


if __name__ == "__main__":
    main()
