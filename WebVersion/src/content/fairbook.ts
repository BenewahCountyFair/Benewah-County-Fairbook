import fairbookSource from './fairbook-source.md?raw'

export type Lot = { name: string; premium?: string }
export type FairClass = { name: string; lots: Lot[] }
export type Department = { slug: string; name: string; icon: string; source: string; summary: string; rules: string[]; classes: FairClass[] }

export const edition = { year: 2026, status: 'confirmed' as 'unconfirmed' | 'confirmed', announcement: 'August 10–16, 2026 · Check-ins August 10–12 · Fair events August 13–15.', mission: 'The Benewah County Fair Board plans, coordinates, and produces an annual fair with youth and adult exhibits, 4-H and Junior Show & Sale competition, livestock, agricultural and educational displays, entertainment, and food concessions for area residents and visitors.', source: 'Benewah County Fairbook, 2026 edition' }

export const fairBoard = { members: ['Kenny Moore — Chairman', 'Celia Sibert — Vice Chair', 'Nancy Malensky', 'Heath Moore', 'Robin Applewhite'], secretaryTreasurer: 'Jodi Dundas', groundsMaintenance: ['Jamie Nitcy', 'Craig Law', 'Donna Janssen'], commissioners: ['Phil Lampert', 'Bob Short', 'Mark Reynolds'], juniorShowAndSale: ['Nancy Malensky — Chairman', 'Kenny Moore — Vice Chairman', 'Jackie McGregor — Secretary', 'Kami Law — Treasurer'] }

export const fairMission = { title: 'Showing Our Best', text: 'An educational display of skills, providing a setting for new and recommended methods, materials, varieties, and high-quality livestock. Entries are evaluated by people trained in their methods, skills, and species. Premiums help defray the expense of exhibiting and strengthen the spirit of competition so the best produce, animals, and materials are shown. Community spirit and county pride grow through this constructive project, created by the people of Benewah County through local organizations, community leaders, 4-H clubs, businesses, the Fair Board, Junior Show & Sale Committee, and Junior Rodeo Committee.' }

export const eventFlyers = [{ title: 'Kiwanis Breakfast for Dinner', detail: 'Friday, August 14 · 4:00–7:00 p.m. · Benewah County Fairgrounds · Ages 50+', image: 'Kiwanis Flyer.png' }]

const officialSectionStart: Record<string, string> = {
  antlers: '# Antlers', art: '# **Antiques & Collectibles**', baking: '# Baking', canning: '# Canning', 'field-crops': '# Field Crops and Seeds', flowers: '# Flowers and Horticulture', 'fruits-vegetables': '# Fruits and Vegetables', 'hobbies-crafts': '# Hobbies and Crafts', 'home-products': '# Home Products', livestock: '# Livestock', photography: '# Photography', sewing: '# Sewing', youth: '# Youth',
}

export const officialDepartmentContent = (slug: string) => {
  const start = fairbookSource.indexOf(officialSectionStart[slug] ?? '')
  if (start < 0) return ''
  const next = fairbookSource.indexOf('\n# ', start + 1)
  return fairbookSource.slice(start, next < 0 ? undefined : next).trim()
}

export const schedule = [
  ['Monday, August 10, 2026', '9:00 a.m.–6:00 p.m.', 'Fairgrounds', 'Exhibits', 'Booth set-up'],
  ['Monday, August 10, 2026', '4:00–7:00 p.m.', 'Fairgrounds', '4-H', '4-H indoor project interviews'],
  ['Tuesday, August 11, 2026', '10:00 a.m.–7:00 p.m.', 'Fairgrounds', 'Exhibits', 'Open Class indoor exhibit check-in'],
  ['Tuesday, August 11, 2026', '4:00–7:00 p.m.', 'Fairgrounds', '4-H', '4-H indoor project interviews'],
  ['Wednesday, August 12, 2026', 'All day', 'Fair buildings', 'Exhibits', 'Fair buildings closed for judging'],
  ['Wednesday, August 12, 2026', '7:00 a.m.–12:00 p.m.', 'Fairgrounds', 'Livestock', 'Livestock exhibit check-in'],
  ['Wednesday, August 12, 2026', '4:00–7:00 p.m.', 'Fairgrounds', 'Livestock', 'Livestock exhibit check-in'],
  ['Thursday, August 13, 2026', '8:00–8:30 a.m.', 'Livestock area', 'Livestock', 'Junior Show participants meet with judge'],
  ['Thursday, August 13, 2026', '8:30–10:00 a.m.', 'Livestock area', 'Livestock', 'Beef quality'],
  ['Thursday, August 13, 2026', '10:00 a.m.–12:00 p.m.', 'Livestock area', 'Livestock', 'Swine fitting & showing'],
  ['Thursday, August 13, 2026', '1:00–3:30 p.m.', 'Livestock area', 'Livestock', 'Poultry & rabbit fitting & showing'],
  ['Thursday, August 13, 2026', '3:30–4:45 p.m.', 'Livestock area', 'Livestock', 'Market lamb quality'],
  ['Thursday, August 13, 2026', '4:45–5:45 p.m.', 'Livestock area', 'Livestock', 'Market goat quality'],
  ['Thursday, August 13, 2026', '5:45–6:30 p.m.', 'Livestock area', 'Livestock', 'Horse showmanship finals'],
  ['Thursday, August 13, 2026', '6:30–7:00 p.m.', 'Livestock area', 'Livestock', 'PeeWee swine show (ages 5–8; pre-register by noon)'],
  ['Friday, August 14, 2026', '8:00–9:30 a.m.', 'Livestock area', 'Livestock', 'Beef fitting & showing'],
  ['Friday, August 14, 2026', '9:30–11:30 a.m.', 'Livestock area', 'Livestock', 'Swine quality'],
  ['Friday, August 14, 2026', '12:00–12:45 p.m.', 'Livestock area', 'Livestock', 'Sheep fitting & showing'],
  ['Friday, August 14, 2026', '12:45–1:30 p.m.', 'Livestock area', 'Livestock', 'Goat fitting & showing; dairy goat quality'],
  ['Friday, August 14, 2026', '1:30–3:00 p.m.', 'Livestock area', 'Livestock', 'Livestock judging contest'],
  ['Friday, August 14, 2026', '4:00 p.m.', 'Fairgrounds', 'Awards', 'ADG, All Around & Showmanship Buckle awards'],
  ['Friday, August 14, 2026', '4:00–7:00 p.m.', 'Fairgrounds', 'Events', 'Kiwanis Breakfast for Dinner'],
  ['Friday, August 14, 2026', '4:30–6:30 p.m.', 'Fairgrounds', 'Livestock', 'Round Robin'],
  ['Friday, August 14, 2026', 'Evening', 'Big Screen', 'Events', 'Movie night'],
  ['Friday, August 14, 2026', 'Afternoon', 'Fairgrounds lawn', 'Events', 'Vendors on the lawn'],
  ['Saturday, August 15, 2026', '7:00–9:00 a.m.', 'Fairgrounds', 'Events', 'Buyers’ Appreciation Breakfast'],
  ['Saturday, August 15, 2026', '8:00–9:30 a.m.', 'Fairgrounds', 'Events', 'Dessert contest entries'],
  ['Saturday, August 15, 2026', '9:00 a.m.', 'Fairgrounds', 'Livestock', 'Livestock auction'],
  ['Saturday, August 15, 2026', '12:00 p.m.', 'Fairgrounds', 'Events', 'Dessert auction (immediately after livestock auction)'],
  ['Saturday, August 15, 2026', '3:00 p.m.', 'Fairgrounds', 'Events', 'Cow Patty Bingo'],
  ['Saturday, August 15, 2026', '4:00 p.m.', 'Fairgrounds', '4-H', '4-H horse exhibition'],
  ['Saturday, August 15, 2026', '7:30–10:00 p.m.', 'Fairgrounds', 'Youth', 'Youth Barn Dance'],
  ['Saturday, August 15, 2026', 'All day', 'Fairgrounds lawn', 'Events', 'Vendors on the lawn'],
  ['Sunday, August 16, 2026', '9:00 a.m.', 'Fairgrounds', 'Exhibits', 'Check-out of all exhibits'],
].map(([date, time, location, category, title]) => ({ date, time, location, category, title, visible: true }))

export const generalRules = [
  'The Fair Board will take reasonable precautions to preserve exhibits, but is not responsible for loss, damage, or injury to property or persons on the grounds.',
  'All exhibits are under the direction of the Fair Board and the division superintendent while on exhibition. The Board may censor controversial or objectionable exhibits or materials.',
  'All exhibits remain on display until 9:00 a.m. Sunday, August 16, 2026, and must be checked out by noon. Early removal forfeits award money.',
  'Community-display entries cannot also be entered in competition in another class; they are judged as part of the community exhibit.',
  'Community organizations are responsible for entering, arranging, and removing their displays on time. Booth construction may be done Sunday, August 9 or Monday, August 10, and must be complete by 6:00 p.m. Monday.',
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
  { slug: 'art', name: 'Art & Antiques', icon: '🎨', source: 'Fairbook_Art.idml / Art.pdf', summary: 'Original artwork, drawing, painting, mixed media, digital art, antiques, and collectibles.', rules: ['All exhibits must have a method of hanging.', 'All drawings must be mounted on heavy paper.'], classes: [
    { name: 'Oil Painting', lots: ['Landscapes/Seascapes','Portraits/Flowers','Animals','Buildings','Abstract','Other Subject'].map(name => ({name})) },
    { name: 'Water Color', lots: ['Landscapes/Seascapes','Portraits/Flowers','Animals','Buildings','Abstract','Other Subject'].map(name => ({name})) },
    { name: 'Acrylic', lots: ['Landscapes/Seascapes','Portraits/Flowers','Animals','Buildings','Abstract','Other Subject'].map(name => ({name})) },
    { name: 'Mixed Media / Other Art', lots: ['Original (amateur)','Copy (amateur)','Original (professional)','Copy (professional)'].map(name => ({name})) },
    { name: 'Drawing', lots: ['Pencil','Colored Pencil','Pen','Colored Pen','Crayon','Chalks','Charcoal','Marker','Other'].map(name => ({name})) },
    { name: 'Digital Art', lots: ['Original','Refurbished'].map(name => ({name})) },
    { name: 'Antiques & Collectibles', lots: ['Antiques','Modern Collectibles'].map(name => ({name})) },
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
  { slug: 'sewing', name: 'Sewing', icon: '🧵', source: 'Fairbook_Sewing.idml / Sewing.pdf', summary: 'Garments, quilts, accessories, and sewn household items.', rules: ['Garments should be clean, pressed, and ready to hang or display.'], classes: [{name:'Garments',lots:['Child Garment','Adult Garment','Outerwear','Accessory'].map(name=>({name}))},{name:'Household Sewing',lots:['Quilt','Pillow','Table Linen','Other'].map(name=>({name}))}] },
  { slug: 'youth', name: 'Youth Exhibits', icon: '🌟', source: 'Fairbook_Youth.idml / Youth.pdf', summary: 'Youth projects and age-appropriate creative exhibits.', rules: ['Youth exhibitors should enter age-appropriate work under the current youth department directions.'], classes: [{name:'Youth Projects',lots:['Art','Craft','Baking','Garden','Photography'].map(name=>({name}))}] },
  { slug: 'antlers', name: 'Antlers', icon: '🦌', source: 'Notion / Fairbook_Antlers.idml / Antlers.pdf', summary: 'Naturally shed antlers from moose, elk, whitetail deer, and mule deer.', rules: ['Check in Tuesday, August 11, 2026, 10:00 a.m.–7:00 p.m.', 'All entries must be naturally shed antlers with clean, natural bases; saw marks or man-made alterations disqualify an entry.', 'One entry per category is permitted. Antlers may be re-entered annually and are displayed for the duration of the fair.', 'Entries use Boone and Crockett scoring; the most unique antlers receive the Judges’ Choice Award.'], classes: [{name:'Whitetail Deer',lots:['Single Typical','Matched Typical','Single Non-Typical','Matched Non-Typical'].map(name=>({name}))},{name:'Mule Deer',lots:['Single Typical','Matched Typical','Single Non-Typical','Matched Non-Typical'].map(name=>({name}))},{name:'American Elk',lots:['Single Typical','Matched Typical','Single Non-Typical','Matched Non-Typical'].map(name=>({name}))},{name:'Idaho Moose',lots:['Single','Matched'].map(name=>({name}))},{name:'Most Unique Horn',lots:[{name:'Any species — Judges’ Choice Award'}]}] },
]

export const downloads = [{name:'Complete Fairbook', file:'Fairbook.pdf'}, ...departments.map(d => ({name:d.name, file: d.source.split('/ ').at(-1)!}))]
