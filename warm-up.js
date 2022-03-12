const catalog = {
    item1: {
        name: "sneakers",
        price: 99.99,
        availableSizes: [5,6,7,8,9,10,11,12,13]
    },
    item2: {
        name: "tshirt",
        sizesByPrice: {
            sm: 10.99,
            med: 11.99,
            lg: 12.99,
        },
    },
    item3: {
        name: "gloves",
        style: {
            motorcycle: {
                sizes: ["sm", "md", "lg"],
            },
            wool: {
                sizes: ["xs", "sm", "md", "lg", "xl"]
            },
            satin: {
                sizes: ["xs", "sm", "md", "lg"]
            }
        }
    },
};

// How do I referance item1 available sizes size 12?

console.log(catalog.item1.availableSizes[7])

// How would I print 11.99?

console.log(catalog.item2.sizesByPrice.med)

// How would I print size xl under wool gloves?
console.log(catalog.item3.style.wool.sizes[-1])
console.log(catalog.item3.style.wool.sizes[4])

