export type Activities = {
    id: number
    title: string
    description: string
    image: string
    category: string
    descriptionFull: string
}

const activitiesArray: Activities[] = [
    {
        id: 1,
        title: 'The Surrey Hills: Peaslake',
        description:
            'The Surrey Hills area has become a sort of accidental mecca for mountain biking in the south.',

        image: '/images/SurreyHills.png',
        category: 'Mountain Biking',
        descriptionFull:
            'People flock here at the weekends, meaning the car parks and trails can be very busy. And for good reason - dozens of hand-shaped sections of singletrack dart through the pretty forest, with soft, loamy dirt and short uphills making this one of the most fun days out on a bike near London. For those looking for a real test, the Northern Monkey line can`t be missed With so many riders frequenting the trails near Peaslake, this has become a real - if unofficial - hub for mountain biking.',
    },
    {
        id: 2,
        title: 'Woburn Trails',
        description:
            'Woburn is a legendary riding spot that has welcomed all levels and disciplines of riders for decades.',

        image: '/images/WoburnTrails.png',
        category: 'Mountain Biking',
        descriptionFull:
            'Its sandy soil makes it a perfect all-weather riding spot and its modest slopes mean it is a great place to go for a singletrack blast on its network of trails. The most notable feature is the jump area: Matt Jones is regularly seen on the massive central rhythm sections, but there are also jumps, drops and hucks of all sizes scattered around. Woburn is maintained by volunteers (there are regular dig days – get yourself signed up) and a day pass or annual membership is required to ride.',
    },
    {
        id: 3,
        title: 'Courchevel 1850, France',
        description:
            'Courchevel 1850 is both the highest in elevation and in prices in the Three Valleys (Les Trois Vallées of Courchevel, Meribel and Les Menuires), which now includes a fourth valley in France – Maurienne.',

        image: '/images/Courchevel.png',
        category: 'Snow Sports',
        descriptionFull:
            'There’s plenty of entertainment off-piste. Hot and happening apres-ski spots include Le Tremplin or Kudeta. Or dance till the wee hours in Les Caves or La Grange.',
    },
    {
        id: 4,
        title: 'Beaver Creek, United States',
        description:
            'Beaver Creek loves kiddies. For seven weeks over the winter season, the resort organizes special family activities with complimentary offers for kids.',

        image: '/images/BeaverCreek.png',
        category: 'Snow Sports',
        descriptionFull:
            ' Outside of those weeks, kids will still have a blast with complimentary apres-ski chocolate chip cookies at 3 p.m., and every week there’s storytelling on the hill and an in-village street fair with music, magic and more.',
    },
    {
        id: 5,
        title: 'Bundoran, Ireland',
        description:
            'Surprised to see Ireland on our list of epic surf spots in the world? Don’t be. With waves that can reach 50 feet and average around the 10-foot range, Bundoran is one of the best surf spots in Europe.',

        image: '/images/Bundoran.png',
        category: 'Surfing',
        descriptionFull:
            'Sure, the wild Atlantic swells are a bit colder than you might like, but wear a wetsuit and have a great time. You can warm up later, with an evening in a cozy Irish pub. For novices, there are four surfing schools in Bundoran where you can get beginning and intermediate instruction. But the pros love the rolling waves and flat rocky reefs here too. Bundoran has hosted the European Surfing Championships three times.',
    },
    {
        id: 6,
        title: 'Teahupoo, Tahiti',
        description:
            'If you’re looking for an epic surfing experience, then look no further than Teahupoo. As one of the best surf destinations around the world, it is known for its huge waves that can reach up to 30 feet.',

        image: '/images/Teahupoo.png',
        category: 'Surfing',
        descriptionFull:
            'The takeoff is especially challenging, as the wave often breaks in a very shallow area. Teahupoo is located on the south coast of Tahiti and can only be reached by boat. There are a few resorts located in the area, but for the most part, it is undeveloped.',
    },
    {
        id: 7,
        title: 'Barcelona',
        description:
            'Barcelona started to become more known in the skate world in the late 1990s when Transworld was putting out videos featuring some really amazing spots.',

        image: '/images/Barcelona.png',
        category: 'Skateboarding',
        descriptionFull:
            ' One of the most iconic is MACBA, or the Barcelona Museum of Contemporary Art. With some of the coolest street spots you’ll find, Barcelona is a must-visit on any skater’s list.',
    },
    {
        id: 8,
        title: 'Berlin',
        description:
            'Berlin is a city that’s known for its alternative culture, and skateboarding is no exception.',

        image: '/images/Berlin.png',
        category: 'Skateboarding',
        descriptionFull:
            'One of the most famous skate spots in Berlin is the Mellow Park, a massive concrete playground that’s been the site of countless competitions and events over the years. But the city is also home to several smaller, more intimate parks, like the Gleisdreieck skatepark. One of the biggest skate festivals in Berlin is the annual Berlin Open, which takes place every summer and features some of the top riders from around the world.',
    },
    {
        id: 9,
        title: 'San Diego, California, USA',
        description:
            'Mild year-round temperatures, a large number of water sports that you can perform like snorkeling or scuba diving, and the historic architecture of the Old Town — there are multiple things one can like about San Diego. ',

        image: '/images/SanDiego.png',
        category: 'Jet Skiing',
        descriptionFull:
            'Furthermore, there are many boat tours and other eco-tour adventures that you can use. When Miami seems to be too obvious of an option for a holiday trip, visit the city of San Diego!',
    },
    {
        id: 10,
        title: 'Montargil',
        description:
            'Many countries in Southern Europe can boast fantastic weather for jet-skiing.Nonetheless, only Portugal, a country located in southwestern Europe, seems to be so rich in recreational activities. ',

        image: '/images/Montargil.png',
        category: 'Jet Skiing',
        descriptionFull:
            'For example, the Montargil dam is an amazing place for all water sports enthusiasts. Not only do you get the beautiful sights, but more importantly, you gain many options of how you can spend your time. You can rent kayaks, jet-skis (if you do not want to bring your own), or bodyboards at the dam. Additionally, clubs and pubs can serve as a great way to spend evenings. Make sure to explore Montargil while it remains unspoiled!',
    },
    {
        id: 11,
        title: 'Helmcken Falls, British Columbia, Canada',
        description:
            'Ok, so this gigantic waterfall is not your typical ice climbing destination, but we just had to include it because it`s the most radical place to practice the sport and is home to the hardest ice climb on the planet. ',
        image: '/images/HelmckenFalls.png',
        category: 'Ice Climbing',
        descriptionFull:
            'Canadian Will Gadd and England`s Tim Emmett picked off the first climb back in 2010 and since then more than 10 different climbs have been done, two right to the top, including the ultimate ascent known as Wolverine.',
    },
    {
        id: 12,
        title: 'Sandstone Ice Park, Minnesota, USA',
        description:
            'This man-made ice park has `farme` ice on the side of a giant canyon wall to provide frozen routes all winter. ',
        image: '/images/SandstoneIcePark.png',
        category: 'Ice Climbing',
        descriptionFull:
            'It even has lights to let you climb at the night and there`s a big festival held there every year. The low-angle, big-featured area known as Land of the Lorax is ideal for newcomers, while The Stage Wall, the highest wall in park, has more than 20m of challenging vertical ice.',
    },
]

export const getActivityObject = (array: Activities[]) =>
    array.reduce(
        (object, activity) => ({
            ...object,
            [activity.id]: activity,
        }),
        {}
    )

export default activitiesArray
