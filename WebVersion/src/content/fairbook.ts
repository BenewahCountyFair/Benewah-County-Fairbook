import fairbookSource from './fairbook-source.md?raw'

export type Lot = { name: string; premium?: string }
export type FairClass = { name: string; lots: Lot[]; sections?: string[] }
export type Department = { slug: string; name: string; icon: string; source: string; summary: string; rules: string[]; classes: FairClass[] }

export const edition = { year: 2026, status: 'confirmed' as 'unconfirmed' | 'confirmed', announcement: 'Booth setup August 17 · Open Class check-in August 18 · Indoor judging & Junior Show check-in August 19 · Fair events August 20–22.', mission: 'The Benewah County Fair Board plans, coordinates, and produces an annual fair with youth and adult exhibits, 4-H and Junior Show & Sale competition, livestock, agricultural and educational displays, entertainment, and food concessions for area residents and visitors.', source: 'Benewah County Fairbook, 2026 edition' }

export const fairBoard = { members: ['Kenny Moore — Chairman', 'Celia Sibert — Vice Chair', 'Nancy Malensky', 'Heath Moore', 'Robin Applewhite'], secretaryTreasurer: 'Jodi Dundas', groundsMaintenance: ['Jamie Nitcy', 'Craig Law', 'Donna Janssen'], commissioners: ['Phil Lampert', 'Bob Short', 'Mark Reynolds'], juniorShowAndSale: ['Nancy Malensky — Chairman', 'Kenny Moore — Vice Chairman', 'Jackie McGregor — Secretary', 'Kami Law — Treasurer'] }

export const fairMission = { title: 'Showing Our Best', text: 'An educational display of skills, providing a setting for new and recommended methods, materials, varieties, and high-quality livestock. Entries are evaluated by people trained in their methods, skills, and species. Premiums help defray the expense of exhibiting and strengthen the spirit of competition so the best produce, animals, and materials are shown. Community spirit and county pride grow through this constructive project, created by the people of Benewah County through local organizations, community leaders, 4-H clubs, businesses, the Fair Board, Junior Show & Sale Committee, and Junior Rodeo Committee.' }

export const eventFlyers = [{ title: 'Kiwanis Breakfast for Dinner', detail: 'Friday, August 21 · 4:00–7:00 p.m. · Benewah County Fairgrounds · Ages 50+', image: 'Kiwanis Flyer.png' }]

const officialSectionStart: Record<string, string> = {
  antlers: '# Antlers & Wildlife', art: '# **Antiques & Collectibles**', baking: '# Baking', canning: '# Canning', 'field-crops': '# Field Crops and Seeds', flowers: '# Flowers and Horticulture', 'fruits-vegetables': '# Fruits and Vegetables', 'hobbies-crafts': '# Hobbies and Crafts', 'home-products': '# Home Products', livestock: '# Livestock', photography: '# Photography', sewing: '# Sewing', youth: '# Youth',
}

export const officialDepartmentContent = (slug: string) => {
  const start = fairbookSource.indexOf(officialSectionStart[slug] ?? '')
  if (start < 0) return ''
  const next = fairbookSource.indexOf(slug === 'art' ? '\n# Baking' : '\n# ', start + 1)
  return fairbookSource.slice(start, next < 0 ? undefined : next).trim()
}

export const schedule = [
  ['Monday, August 17, 2026', '9:00 a.m.–6:00 p.m.', '', 'Exhibits', 'Booth set-up'],
  ['Monday, August 17, 2026', '4:00–7:00 p.m.', '', '4-H', '4-H indoor project interviews'],
  ['Monday, August 17, 2026', '6:00 p.m.', '', '4-H', '4-H dog show'],
  ['Tuesday, August 18, 2026', '8:00 a.m.', '', '4-H', '4-H horse show'],
  ['Tuesday, August 18, 2026', '10:00 a.m.–7:00 p.m.', '', 'Exhibits', 'Open Class indoor exhibit check-in'],
  ['Tuesday, August 18, 2026', '4:00–7:00 p.m.', '', '4-H', '4-H indoor project interviews'],
  ['Wednesday, August 19, 2026', '7:00 a.m.–12:00 p.m.', '', 'Livestock', 'Livestock exhibit check-in'],
  ['Wednesday, August 19, 2026', '12:00–4:00 p.m.', '', 'Livestock', 'Poultry & rabbit fitting & showing quality judging'],
  ['Wednesday, August 19, 2026', '12:00–7:30 p.m.', 'Walker Kitchen', '4-H', '4-H livestock assessment'],
  ['Wednesday, August 19, 2026', '4:00–7:00 p.m.', '', 'Livestock', 'Livestock exhibit check-in'],
  ['Wednesday, August 19, 2026', 'All day', '', 'Exhibits', 'Fair buildings closed for judging'],
  ['Thursday, August 20, 2026', '8:00–8:30 a.m.', '', 'Livestock', 'All Junior Show participants meet with judge'],
  ['Thursday, August 20, 2026', '8:30–10:00 a.m.', '', 'Livestock', 'Beef quality'],
  ['Thursday, August 20, 2026', '10:00 a.m.–12:00 p.m.', '', 'Livestock', 'Swine fitting & showing'],
  ['Thursday, August 20, 2026', '12:00 p.m.', '', 'Events', 'Break'],
  ['Thursday, August 20, 2026', '1:00–2:30 p.m.', '', 'Livestock', 'Market lamb quality'],
  ['Thursday, August 20, 2026', '2:30–3:30 p.m.', '', 'Livestock', 'Market goat quality'],
  ['Thursday, August 20, 2026', '3:30–4:00 p.m.', '', 'Livestock', 'Dairy goat / pet quality'],
  ['Thursday, August 20, 2026', '4:15–5:00 p.m.', '', 'Livestock', 'Horse showmanship finals'],
  ['Thursday, August 20, 2026', '5:30–7:00 p.m.', '', 'Livestock', 'Livestock judging contest'],
  ['Friday, August 21, 2026', '8:00–9:30 a.m.', '', 'Livestock', 'Beef fitting & showing'],
  ['Friday, August 21, 2026', '9:30–11:30 a.m.', '', 'Livestock', 'Swine quality'],
  ['Friday, August 21, 2026', '11:30 a.m.–12:30 p.m.', '', 'Events', 'Break'],
  ['Friday, August 21, 2026', '12:30–1:15 p.m.', '', 'Livestock', 'Sheep fitting & showing'],
  ['Friday, August 21, 2026', 'Afternoon', '', 'Events', 'Vendors on the lawn'],
  ['Friday, August 21, 2026', '1:15–2:15 p.m.', '', 'Livestock', 'Goat fitting & showing'],
  ['Friday, August 21, 2026', '2:30–3:00 p.m.', '', 'Livestock', 'PeeWee swine show (ages 5–8; pre-register with the barn superintendent before noon)'],
  ['Friday, August 21, 2026', '4:00 p.m.', '', 'Awards', 'ADG, All Around & Showmanship Buckle awards'],
  ['Friday, August 21, 2026', '4:00–7:00 p.m.', '', 'Events', 'Kiwanis Breakfast for Dinner'],
  ['Friday, August 21, 2026', '4:30–6:30 p.m.', '', 'Livestock', 'Round Robin'],
  ['Saturday, August 22, 2026', '7:00–9:00 a.m.', '', 'Events', 'Buyers’ Appreciation Breakfast'],
  ['Saturday, August 22, 2026', 'All day', '', 'Events', 'Vendors on the lawn'],
  ['Saturday, August 22, 2026', '8:00–9:30 a.m.', '', 'Events', 'Dessert contest entries'],
  ['Saturday, August 22, 2026', '9:00 a.m.', '', 'Livestock', 'Livestock auction'],
  ['Saturday, August 22, 2026', '12:00 p.m.', '', 'Events', 'Dessert auction (immediately following livestock auction)'],
  ['Saturday, August 22, 2026', '1:00 p.m.', '', 'Events', 'Turkey Bingo'],
  ['Saturday, August 22, 2026', '2:00 p.m.', '', 'Events', 'Archery contest'],
  ['Saturday, August 22, 2026', '5:00 p.m.', '', 'Events', 'Junior Show & Sale BBQ and potluck (bring a side dish) and bingo'],
  ['Sunday, August 23, 2026', '9:00 a.m.', '', 'Exhibits', 'Check-out of all exhibits'],
].map(([date, time, location, category, title]) => ({ date, time, location, category, title, visible: true }))

export const generalRules = [
  'The Fair Board will take reasonable precautions to preserve exhibits, but is not responsible for loss, damage, or injury to property or persons on the grounds.',
  'All exhibits are under the direction of the Fair Board and the division superintendent while on exhibition. The Board may censor controversial or objectionable exhibits or materials.',
  'All exhibits remain on display until 9:00 a.m. Sunday, August 23, 2026, and must be checked out by noon. Early removal forfeits award money.',
  'Community-display entries cannot also be entered in competition in another class; they are judged as part of the community exhibit.',
  'Community organizations are responsible for entering, arranging, and removing their displays on time. Booth construction may be done Monday, August 17, and must be complete by 6:00 p.m.',
  'All exhibits must bear the provided entry tags.',
  'Open Class Adult exhibits use the American method of judging; Open Class Youth exhibits use the Danish method and receive a ribbon. Youth exhibitors may submit one entry per category.',
  'Enter exhibits in the proper class. New classes require Fair Board approval, and judges determine whether an entry meets the qualifications.',
  'Premiums are paid to bona fide residents or taxpayers of Benewah County and portions of Kootenai and Shoshone Counties.',
  'Unless otherwise stated, entries are not limited per class, but an exhibitor may receive no more than two awards in one class and may not enter duplicate items.',
  'Disrespect toward a judge or award, or a violation of fair rules, may result in forfeiture of premiums. Judges’ decisions are final.',
  'Judging protests must be written, state the cause of complaint, include the required $25 deposit, and be submitted to the Building Superintendent within six hours after the cause of protest.',
  'Premiums may be requested at the fair office after the fair. Bring a self-addressed stamped envelope if you would like a check mailed to you.'
]

export const displays = [
  { title: 'Community educational booth displays', text: 'Build an exhibit that tells a useful story for the community. Judging considers educational value, effectiveness, appearance, originality, and theme.' },
  { title: 'Educational booths', text: 'Non-competitive educational displays receive ribbon awards. Examples include youth organizations, wildlife, soil conservation, forest service, and weed control.' },
  { title: 'Commercial booths', text: 'Commercial booths receive ribbon awards only. Exhibitors should provide their own table and setup supplies; ladders and other shared equipment may be limited.' },
]

export const departments: Department[] = [
  { slug: 'antlers', name: 'Antlers & Wildlife', icon: '🦌', source: 'Notion / Fairbook_Antlers.idml / Antlers.pdf', summary: 'Naturally shed antlers, skulls, pelts, game birds, and other wildlife exhibits.', rules: ['Check in Tuesday, August 18, 2026, 10:00 a.m.–7:00 p.m.', 'Antler entries must be naturally shed with clean, natural bases; saw marks or man-made alterations disqualify an entry.', 'One entry per category is permitted. Antlers may be re-entered annually and are displayed for the duration of the fair.', 'Antler entries use Boone and Crockett scoring; ribbons go to the highest-scoring shed in each category.'], classes: [
    {"name": "Whitetail Deer", "lots": [{"name": "Single Typical"}, {"name": "Matched Typical"}, {"name": "Single Non-Typical"}, {"name": "Matched Non-Typical"}]},
    {"name": "Mule Deer", "lots": [{"name": "Single Typical"}, {"name": "Matched Typical"}, {"name": "Single Non-Typical"}, {"name": "Matched Non-Typical"}]},
    {"name": "American Elk", "lots": [{"name": "Single Typical"}, {"name": "Matched Typical"}, {"name": "Single Non-Typical"}, {"name": "Matched Non-Typical"}]},
    {"name": "Idaho Moose", "lots": [{"name": "Single"}, {"name": "Matched"}]},
    {"name": "Most Unique Horn", "lots": []},
    {"name": "Skulls", "lots": []},
    {"name": "Pelts", "lots": []},
    {"name": "Game Bird", "lots": []},
    {"name": "Other", "lots": []},
  ] },
 { slug: 'art', name: 'Art & Antiques', icon: '🎨', source: 'Fairbook_Art.idml / Art.pdf', summary: 'Original artwork, drawing, painting, mixed media, digital art, collages, spray paint, antiques, and collectibles.', rules: ['All exhibits must have a method of hanging.', 'All drawings must be mounted on heavy paper.'], classes: [
    {"name": "Antiques", "lots": [{"name": "Refurbished"}, {"name": "Original"}]},
    {"name": "Modern Collectibles", "lots": [{"name": "Refurbished"}, {"name": "Original"}]},
    {"name": "Oil Painting", "lots": [{"name": "Original (amateur)"}, {"name": "Copy (amateur)"}, {"name": "Original (professional)"}, {"name": "Copy (professional)"}]},
    {"name": "Water Color", "lots": [{"name": "Landscapes/Seascapes"}, {"name": "Portraits/Flowers"}, {"name": "Animals"}, {"name": "Buildings"}, {"name": "Abstract"}, {"name": "Other Subject"}]},
    {"name": "Acrylic", "lots": [{"name": "Landscapes/Seascapes"}, {"name": "Portraits/Flowers"}, {"name": "Animals"}, {"name": "Buildings"}, {"name": "Abstract"}, {"name": "Other Subject"}]},
    {"name": "Mixed Media/Other", "lots": [{"name": "Landscapes/Seascapes"}, {"name": "Portraits/Flowers"}, {"name": "Animals"}, {"name": "Buildings"}, {"name": "Abstract"}, {"name": "Other Subject"}]},
    {"name": "Drawing", "lots": [{"name": "Pencil"}, {"name": "Colored Pencil"}, {"name": "Pen"}, {"name": "Colored Pen"}, {"name": "Crayon"}, {"name": "Chalks"}, {"name": "Charcoal"}, {"name": "Marker"}, {"name": "Other"}]},
    {"name": "Digital Art", "lots": []},
    {"name": "Collages", "lots": []},
    {"name": "Spray Paint", "lots": []},
  ] },
  { slug: 'baking', name: 'Baking', icon: '🥖', source: 'Fairbook_Baking.idml / Baking.pdf', summary: 'Breads, cakes, cookies, pies, and other home-baked entries.', rules: ['Use clean, food-safe containers and provide the quantity requested in the printable guide.'], classes: [{name:'Breads',lots:['Yeast Bread','Quick Bread','Rolls'].map(name=>({name}))},{name:'Cakes & Cookies',lots:['Cake','Bar Cookies','Drop Cookies','Decorated Cookies'].map(name=>({name}))},{name:'Pies',lots:['Fruit Pie','Cream Pie','Other Pie'].map(name=>({name}))}] },
  { slug: 'canning', name: 'Canning & Preserving', icon: '🫙', source: 'Fairbook_Canning.idml / Canning.pdf', summary: 'Safely preserved fruits, vegetables, jams, jellies, and pickled products.', rules: ['Use current safe canning practices. Entries with unsafe seals, jars, or processing may be rejected.'], classes: [{name:'Fruit',lots:['Applesauce','Peaches','Other Fruit'].map(name=>({name}))},{name:'Vegetables',lots:['Beans','Corn','Tomatoes','Other Vegetable'].map(name=>({name}))},{name:'Jams & Jellies',lots:['Jam','Jelly','Preserves','Pickles'].map(name=>({name}))}] },
  { slug: 'field-crops', name: 'Field Crops', icon: '🌾', source: 'Fairbook_Field_Crops.idml / Field_Crops.pdf', summary: 'Grains, hay, seed crops, and farm-grown field products.', rules: ['Present clean, well-labeled samples in the quantity specified by the department guide.'], classes: [{name:'Grain & Seed',lots:['Wheat','Barley','Oats','Other Grain'].map(name=>({name}))},{name:'Hay & Forage',lots:['Alfalfa','Grass Hay','Mixed Hay'].map(name=>({name}))}] },
  { slug: 'flowers', name: 'Flowers', icon: '🌻', source: 'Fairbook_Flowers.idml / Flowers.pdf', summary: 'Cut flowers, arrangements, houseplants, and garden displays.', rules: ['Containers must be stable and entries should be fresh and properly conditioned.'], classes: [{name:'Cut Flowers',lots:['Annuals','Perennials','Roses','Dahlias','Sunflowers'].map(name=>({name}))},{name:'Arrangements',lots:['Fresh Arrangement','Dried Arrangement','Miniature Arrangement'].map(name=>({name}))},{name:'Houseplants',lots:['Foliage Plant','Flowering Plant','Cactus/Succulent'].map(name=>({name}))}] },
  { slug: 'fruits-vegetables', name: 'Fruits & Vegetables', icon: '🍅', source: 'Fairbook_Fruits_and_Vegetables.idml / Fruits_and_Vegetables.pdf', summary: 'Garden-grown fruits, vegetables, herbs, and market displays.', rules: ['Enter clean, mature produce without damage; follow listed quantities in the printable guide.'], classes: [{name:'Vegetables',lots:['Beans','Carrots','Corn','Cucumbers','Onions','Potatoes','Tomatoes'].map(name=>({name}))},{name:'Fruit & Herbs',lots:['Apples','Berries','Herbs','Other Fruit'].map(name=>({name}))}] },
  { slug: 'hobbies-crafts', name: 'Hobbies & Crafts', icon: '✂️', source: 'Fairbook_Hobbies_and _Crafts.idml / Hobbies_and _Crafts.pdf', summary: 'Handmade crafts, collections, models, and creative hobbies.', rules: ['Entries must be clean, secure, and safe for public display.'], classes: [{name:'Crafts',lots:['Woodworking','Jewelry','Paper Craft','Ceramics','Other Craft'].map(name=>({name}))},{name:'Collections & Models',lots:['Collection','Model','Diorama'].map(name=>({name}))}] },
  { slug: 'home-products', name: 'Home Products', icon: '🧶', source: 'Fairbook_Home_Products.idml / Home_Products.pdf', summary: 'Textiles, home-made products, and useful handmade goods.', rules: ['Entries must be complete, clean, and ready for display.'], classes: [{name:'Textiles',lots:['Quilt','Afghan','Rug','Other Textile'].map(name=>({name}))},{name:'Home Goods',lots:['Soap','Candles','Other Home Product'].map(name=>({name}))}] },
  { slug: 'livestock', name: 'Livestock', icon: '🐄', source: 'Fairbook_Livestock.idml / Livestock.pdf', summary: 'Cattle, sheep, goats, swine, poultry, and related livestock exhibits.', rules: ['Animal health, ownership, arrival, and safety rules apply. Consult the printable livestock guide before planning an entry.'], classes: [{name:'Large Livestock',lots:['Beef Cattle','Dairy Cattle','Horses'].map(name=>({name}))},{name:'Small Livestock',lots:['Sheep','Goats','Swine','Poultry','Rabbits'].map(name=>({name}))}] },
  { slug: 'photography', name: 'Photography', icon: '📷', source: 'Fairbook_Photography.idml / Photography.pdf', summary: 'Printed photographs that capture people, places, animals, nature, and fair life.', rules: ['Photographs must be securely mounted as directed in the department guide.'], classes: [{name:'Photography',lots:['People','Animals','Scenic','Nature','Architecture','Digital Enhancement'].map(name=>({name}))}] },
  { slug: 'sewing', name: 'Sewing', icon: '🧵', source: 'Fairbook_Sewing.idml / Sewing.pdf', summary: 'Garments, quilts, knitting, crochet, stuffed animals, accessories, and sewn household items.', rules: ['Garments should be clean, pressed, and ready to hang or display.'], classes: [
    {"name": "Sewing for Adults", "lots": [{"name": "Apron"}, {"name": "Bag"}, {"name": "Blouse"}, {"name": "Coat"}, {"name": "Costume"}, {"name": "Decorated purchased garment (needlework)"}, {"name": "Dress, formal"}, {"name": "Dress, simple"}, {"name": "Dress, other"}, {"name": "Hat"}, {"name": "Jacket"}, {"name": "Jeans/Pants/Slacks"}, {"name": "Jumper"}, {"name": "Nightgown/Pajamas"}, {"name": "Quilted Garment"}, {"name": "Robe"}, {"name": "Garment, decorated made by exhibitor (needlework"}, {"name": "Shirt"}, {"name": "Shorts/Pajama Bottoms"}, {"name": "Skirt, other than wool"}, {"name": "Skirt, wool"}, {"name": "Sports garment"}, {"name": "Suit"}, {"name": "Sweatshirt"}, {"name": "Sweat Pants"}, {"name": "Two-Piece Outfit"}, {"name": "Vest or Bolero"}, {"name": "Wedding Dress"}, {"name": "Winter sport garment"}, {"name": "Other than listed"}]},
    {"name": "Sewing for Babies & Children", "lots": [{"name": "Bib"}, {"name": "Blanket, tied"}, {"name": "Blanket, embroidered"}, {"name": "Coat or jacket"}, {"name": "Costume"}, {"name": "Decorated purchased garment, needlework"}, {"name": "Dress"}, {"name": "Hat or cap"}, {"name": "Layette of two or more pieces"}, {"name": "Nightgown"}, {"name": "Outfit three or more pieces"}, {"name": "Pajamas"}, {"name": "Pants (long or short)"}, {"name": "Play suit"}, {"name": "Robe"}, {"name": "Rompers/creepers/ jumpers"}, {"name": "Shirt/Blouse"}, {"name": "Skirt"}, {"name": "Smocked garment"}, {"name": "Snow suit"}, {"name": "Sweatshirt"}, {"name": "Two-piece outfit"}, {"name": "Vest"}, {"name": "Other than listed"}]},
    {"name": "TOYS & DOLL CLOTHES", "lots": [{"name": "Doll clothes,five article w/ or w/o doll"}, {"name": "Dressed purchased animal, needlework"}, {"name": "Animal, dressed and sewn by exhibitor"}, {"name": "Stuffed doll, over 12\""}, {"name": "Stuffed doll, under 12\""}, {"name": "Stuffed animal, over 12\""}, {"name": "Stuffed animal, under 12\""}, {"name": "Christmas doll"}, {"name": "Soft sculpture doll"}, {"name": "Doll quilt"}, {"name": "Animals/Dolls (pair of)"}, {"name": "Article of clothing"}, {"name": "Outfit for doll"}, {"name": "Other, specify article"}]},
    {"name": "Quilts", "sections": ["Hand Quilted", "Machine Quilted", "Tied", "Paper Pieced"], "lots": [{"name": "Baby"}, {"name": "Lap"}, {"name": "Wall Hanging - small"}, {"name": "Wall Hangings - large"}, {"name": "Bed Size"}, {"name": "Group"}, {"name": "Table Runner"}, {"name": "Tree Skirts"}, {"name": "Other"}]},
    {"name": "Rugs", "lots": [{"name": "Crocheted"}, {"name": "Latch Hook"}, {"name": "Hooked"}, {"name": "Original Design"}, {"name": "Other than listed"}]},
    {"name": "Wall Art", "lots": [{"name": "Needlepoint"}, {"name": "Cross Stitch"}, {"name": "Pieced"}, {"name": "Embroidered"}, {"name": "Other than listed"}]},
    {"name": "Household Item", "lots": [{"name": "Book cover, or book mark"}, {"name": "Centerpiece"}, {"name": "Covered coat hanger"}, {"name": "Dishcloth"}, {"name": "Doily"}, {"name": "Dresser scarf (not painted)"}, {"name": "Embroidered article (finished)"}, {"name": "Embroidered pillow case (1)"}, {"name": "Embroidered pillow cases (2)"}, {"name": "Fabric book"}, {"name": "Hot dish mats (set of 3)"}, {"name": "Magnets (3)"}, {"name": "Miscellaneous needlepoint"}, {"name": "Napkins (4)"}, {"name": "Picture frame"}, {"name": "Pillow case (1)"}, {"name": "Pillow cases (2)"}, {"name": "Pin Cushion"}, {"name": "Places mats (4)"}, {"name": "Pot holders, sewn (2)"}, {"name": "Tablecloth"}, {"name": "Table runner"}, {"name": "Tote bag"}, {"name": "Towel, decorated"}, {"name": "Towels (3)"}, {"name": "Village (3 or more)"}, {"name": "Other"}]},
    {"name": "Holiday Decorations", "lots": [{"name": "Animal or Doll"}, {"name": "Card with stitchery"}, {"name": "Centerpiece"}, {"name": "Santa"}, {"name": "Soft Sculpture"}, {"name": "Stocking"}, {"name": "Tree Ornaments (3)"}, {"name": "Tree skirt"}, {"name": "Village, 3 of more"}, {"name": "Wall hanging, ready to hang"}, {"name": "Wreath"}, {"name": "Other"}]},
    {"name": "Pillows", "lots": [{"name": "Embroidery"}, {"name": "Cross Stitch"}, {"name": "Patch Work"}, {"name": "Crochet"}, {"name": "Hand Knit"}, {"name": "Appliquéd"}, {"name": "Fabric Stamping"}, {"name": "Americana"}]},
    {"name": "Hand Knitting", "lots": [{"name": "Afghan"}, {"name": "Baby Afghan"}, {"name": "Infant Set"}, {"name": "Mittens, Gloves or Hats"}, {"name": "Slippers"}, {"name": "Socks"}, {"name": "Stuffed Animals & Characters"}, {"name": "Sweaters"}, {"name": "Shawl"}, {"name": "Vest"}, {"name": "Other"}]},
    {"name": "Hand Knitting with hand-spun yarn", "lots": [{"name": "Afghan"}, {"name": "Baby Afghan"}, {"name": "Infant Set"}, {"name": "Mittens, Gloves or Hats"}, {"name": "Slippers"}, {"name": "Socks"}, {"name": "Stuffed Animals & Characters"}, {"name": "Sweaters"}, {"name": "Shawl"}, {"name": "Vest"}, {"name": "Other"}]},
    {"name": "Machine Knitting", "lots": [{"name": "Afghan"}, {"name": "Baby Afghan"}, {"name": "Infant Set"}, {"name": "Mittens, Gloves or Hats"}, {"name": "Slippers"}, {"name": "Socks"}, {"name": "Stuffed Animals & Characters"}, {"name": "Sweaters"}, {"name": "Shawl"}, {"name": "Vest"}, {"name": "Other"}]},
    {"name": "Crochet", "lots": [{"name": "Afghan"}, {"name": "Baby Afghan"}, {"name": "Infant Set"}, {"name": "Mittens, Gloves or Hats"}, {"name": "Slippers"}, {"name": "Socks"}, {"name": "Stuffed Animals & Characters"}, {"name": "Sweaters"}, {"name": "Shawl"}, {"name": "Vest"}, {"name": "Other"}]},
    {"name": "Loom Weaving", "lots": []},
    {"name": "Wool", "lots": [{"name": "Fine Wool"}, {"name": "Long Wool"}, {"name": "Medium Wool"}, {"name": "Colored Wool"}]},
    {"name": "Hand Spun Yarns", "lots": [{"name": "Wool"}, {"name": "Mohair"}, {"name": "Llama"}, {"name": "Cotton"}, {"name": "Angora"}, {"name": "Silk"}, {"name": "Other Fibers"}]},
    {"name": "Plastic Canvas", "lots": [{"name": "Doll Furniture"}, {"name": "Bathroom Novelties"}, {"name": "Kitchen Novelties"}, {"name": "Decorations"}]},
    {"name": "Dolls", "lots": [{"name": "Porcelain Soft Body"}, {"name": "Porcelain All"}, {"name": "Purchased Body Dressed Doll"}, {"name": "All Soft Doll"}, {"name": "Doll Clothing"}, {"name": "Animals"}]},
  ] },
  { slug: 'youth', name: 'Youth Exhibits', icon: '🌟', source: 'Fairbook_Youth.idml / Youth.pdf', summary: 'Youth projects and age-appropriate creative exhibits.', rules: ['Youth exhibitors should enter age-appropriate work under the current youth department directions.'], classes: [{name:'Youth Projects',lots:['Art','Craft','Baking','Garden','Photography'].map(name=>({name}))}] },
]

export const downloads = [
  {name:'2026 Fair Schedule', file:'2026-Benewah-County-Fair-Schedule.pdf'},
  {name:'Complete Fairbook', file:'Complete_Fairbook.pdf'},
  ...departments.map(d => ({name:d.name, file: d.source.split('/ ').at(-1)!})),
]
