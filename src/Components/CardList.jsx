import Card from "./Card";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const data = [
  {
    name: "Pride and Prejudice",
    description:
      "This timeless classic explores themes of love, class, and societal expectations in 19th-century England. It's a beautifully written novel with memorable characters.!",
    characters: [
      "Elizabeth Bennet",
      "Mr. Darcy (Fitzwilliam Darcy)",
      "Jane Bennet",
    ],
    image: img1,
  },
  {
    name: "1984",
    description:
      "Set in a totalitarian society, this novel is a thought-provoking exploration of surveillance, control, and the consequences of oppressive government.",
    characters: ["Winston Smith", "Julia", "Big Brother"],
    image: img2,
  },
  {
    name: "The Name of the Wind",
    description:
      "This is a beautifully written fantasy novel that follows the life of Kvothe, a legendary figure with a mysterious past. The prose and world-building are exceptional.",
    characters: ["Kvothe", "Bast", "Denna"],
    image: img3,
  },
  {
    name: "All the Light We Cannot See",
    description:
      "Set during World War II, this Pulitzer Prize-winning novel follows the lives of a blind French girl and a German boy whose paths eventually cross. It beautifully explores themes of love, loss, and the power of human connection amidst the backdrop of a war-torn world.",
    characters: ["Marie-Laure LeBlanc", "Werner Pfennig", "Etienne LeBlanc"],
    image: img4,
  },
];

const CardList = () => {
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          name={card.name}
          description={card.description}
          characters={card.characters}
          image={card.image}
        />
      ))}
      {/* <Card
        name="Pride and Prejudice"
        description="This timeless classic explores themes of love, class, and societal expectations in 19th-century England. It's a beautifully written novel with memorable characters.!"
        characters={[
          "Elizabeth Bennet",
          "Mr. Darcy (Fitzwilliam Darcy)",
          "Jane Bennet",
        ]}
        image={img1}
      />
      <Card
        name="1984"
        description=" Set in a totalitarian society, this novel is a thought-provoking exploration of surveillance, control, and the consequences of oppressive government."
        characters={["Winston Smith", "Julia", "Big Brother"]}
        image={img2}
      />
      <Card
        name="The Name of the Wind"
        description="This is a beautifully written fantasy novel that follows the life of Kvothe, a legendary figure with a mysterious past. The prose and world-building are exceptional."
        characters={["Kvothe", "Bast", "Denna"]}
        image={img3}
      />
      <Card
        name="All the Light We Cannot See"
        description="Set during World War II, this Pulitzer Prize-winning novel follows the lives of a blind French girl and a German boy whose paths eventually cross. It beautifully explores themes of love, loss, and the power of human connection amidst the backdrop of a war-torn world."
        characters={[
          "Marie-Laure LeBlanc",
          "Werner Pfennig",
          "Etienne LeBlanc",
        ]}
        image={img4}
      /> */}
    </div>
  );
};

export default CardList;
