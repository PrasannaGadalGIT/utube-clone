// Create a script to send seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film and animation",
    "How-to and style",
    "Music",
    "News and letter",
    "People and blogs",
    "Pets and Animals",
    "Science and technology",
    "Sports",
    "Travel and events"
];

async function main () {
    console.log("Seeding cattregories...");

    try{
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name}`
        }));

        await db.insert(categories).values(values);

        console.log("Categories seeded sucessfully");
    }catch(error){
        console.error("Error seeding cartegories: ", error)
        process.exit(1);
    }
}

main();