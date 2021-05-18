# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sealife=Category.create(name: "SeaWorld")
sealife.cards.build(
    name: "bream",
    url: "https://img.icons8.com/bubbles/2x/bream.png"
)
sealife.cards.build(
    name: "crab",
    url: "https://img.icons8.com/bubbles/2x/crab.png"
)
sealife.cards.build(
    name: "nautilus",
    url: "https://img.icons8.com/bubbles/2x/nautilus.png"
)
sealife.cards.build(
    name: "orca",
    url: "https://img.icons8.com/bubbles/2x/orca.png"
)
sealife.cards.build(
    name: "shark",
    url: "https://img.icons8.com/bubbles/2x/shark.png"
)
sealife.cards.build(
    name: "pike",
    url: "https://img.icons8.com/bubbles/2x/pike.png"
)

wildlife=Category.create(name: "Animals")
wildlife.cards.build(
    name: "bear",
    url: "https://img.icons8.com/bubbles/2x/bear.png"
)
wildlife.cards.build(
    name: "camel",
    url: "https://img.icons8.com/bubbles/2x/--camel.png"
)
wildlife.cards.build(
    name: "fox",
    url: "https://img.icons8.com/bubbles/2x/fox.png"
)
wildlife.cards.build(
    name: "panda",
    url: "https://img.icons8.com/bubbles/2x/kiss-panda.png"
)
wildlife.cards.build(
    name: "jaguar",
    url: "https://img.icons8.com/bubbles/2x/black-jaguar.png"
)
wildlife.cards.build(
    name: "snake",
    url: "https://img.icons8.com/bubbles/2x/rattlesnake.png"
)

flags=Category.create(name: "Flags")
flags.cards.build(
    name: "Usa",
    url: "https://img.icons8.com/doodle/2x/usa.png"
)
flags.cards.build(
    name: "China",
    url: "https://img.icons8.com/doodle/2x/china.png"
)
flags.cards.build(
    name: "France",
    url: "https://img.icons8.com/doodle/2x/france.png"
)
flags.cards.build(
    name: "Germany",
    url: "https://img.icons8.com/doodle/2x/germany.png"
)
flags.cards.build(
    name: "England",
    url: "https://img.icons8.com/doodle/2x/great-britain.png"
)
flags.cards.build(
    name: "India",
    url: "https://img.icons8.com/doodle/2x/india.png"
)

characters =Category.create(name: "Characters")
characters.cards.build(
    name: "super-mario",
    url: "https://img.icons8.com/bubbles/2x/super-mario.png"
)
characters.cards.build(
    name: "iron-man",
    url: "https://img.icons8.com/bubbles/2x/iron-man.png"
)
characters.cards.build(
    name: "scream",
    url: "https://img.icons8.com/bubbles/2x/scream.png"
)
characters.cards.build(
    name: "stormtrooper",
    url: "https://img.icons8.com/bubbles/2x/stormtrooper.png"
)
characters.cards.build(
    name: "homer-simpson",
    url: "https://img.icons8.com/bubbles/2x/homer-simpson.png"
)
characters.cards.build(
    name: "jake",
    url: "https://img.icons8.com/bubbles/2x/jake.png"
)

sealife.save
wildlife.save
flags.save
characters.save