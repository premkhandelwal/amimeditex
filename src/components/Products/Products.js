import React from 'react';
import './Products.css';
import centrimide from "../../assets/images/cetrimide.png";
import cotton from "../../assets/images/cotton.png";
import elasticPlaster from "../../assets/images/elasticPlaster.png";
import feracrylum from "../../assets/images/feracrylum.png";
import rolled from "../../assets/images/rolled.png";
import sterile from "../../assets/images/sterile.png";
import washproof from "../../assets/images/washproof.png";
import pouch from "../../assets/images/pouch.png";

const products = [
    {
        id: 1,
        name: "Cotton Crepe Bandage",
        image: cotton,
        quality: [
            "Fast Edge – specially woven. Hence no threads coming out, open threads will touch the wound and may get septic.",
            "More Elasticity",
        ],
        application: [
            "General surgical, orthopedic and sports injuries.",
            "Extremely convenient as a pressure dressing and for skin grafts.",
            "Can be used for sprains, strains, aches, dislocations, painful joints, ulcers, varicose veins, cramps, skin grafting, post-operative conditions & injuries to tendons and muscles.",
            "Very useful as a light compression bandage for muscular support.",
        ],
    },
    {
        id: 2,
        name: "Rolled Bandage",
        image: rolled,
        quality: [
            "Bleaching – with hydrogen peroxide",
            "Refer by F.D.I Standards",
            "Bleaching with tinopol is not allowed by F.D.I",
        ],
        application: [
            "Dressing to wound",
        ],
    },
    {
        id: 3,
        name: "Sterile Gauze Swab",
        image: sterile,
        quality: [
            "Higher Mesh – Better Absorbency",
            "Bleaching - As above",
        ],
        application: [
            "To apply medicine",
            "To clean wounds",
        ],
    },
    {
        id: 4,
        name: "Elastic Plaster (Elastic Adhesive Bandage)",
        image: elasticPlaster,
        quality: [
            "Natural rubber adhesive",
            "Better adhesion",
            "Suitable for humans",
            "More viscosity",
        ],
        application: [
            "General surgical, orthopedic, and sports injuries",
            "Extremely convenient when used as a pressure dressing",
            "Can be used for dislocations, ulcers, varicose veins, skin grafting",
            "Post-operative conditions and injuries to tendons and muscles",
            "Very useful as a light compression bandage for muscular support",
        ],
    },
    {
        id: 5,
        name: "Centrimide Cream",
        image: centrimide,
        quality: [
            "Developed and Manufactured by our own formula",
            "Better recovery",
        ],
        application: [
            "To prevent septic",
        ],
    },
    {
        id: 6,
        name: "Washproof Bandaid",
        image: washproof,
        quality: [
            "Our own Product",
            "Manufactured under our own specially developed SPM250 Dressing per minute",
        ],
        application: [
            "Medicated dressing for small injuries",
        ],
    },
    {
        id: 7,
        name: "Feracrylum Gel 1% w/w",
        image: feracrylum,
        quality: [
            "Composition:\nFeracrylum ........... 1% w/w\nWater miscible base ... Q.S.",
            "Special precautions:\nNot to be applied over eyes. Keep away from reach of children.",
            "Clean the affected area with water & apply a thin film of Sepgard Gel & covered with a sterile bandage",
            "Used for wounds caused by injury, such as cuts and abrasions",
            "Used for dressing of wounds after surgery",
        ],
        application: [
            "Used for wounds caused by injury, such as cuts and abrasions & also used for dressing of wounds after surgery.",
        ],
    },
    {
        id: 8,
        name: "Pouch",
        image: pouch,
        quality:[],
        application: []
    }
    // Add more products as needed
];

function Products() {
    return (
        <div className="our-clients">
            <h1>We provide First Aid Kit contents as per CMVR recommendations</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <div className="product-details">
                           {product.quality.length !== 0?  <div div className="product-quality">
                                <strong>Quality:</strong>
                                <ul>
                                    {product.quality.map((quality, index) => (
                                        <li key={index}>{quality}</li>
                                    ))}
                                </ul>
                            </div> : <div/> }
                            {product.application.length !== 0?<div className="product-application">
                                <strong>Application:</strong>
                                <ul>
                                    {product.application.map((application, index) => (
                                        <li key={index}>{application}</li>
                                    ))}
                                </ul>
                            </div>: <div/>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
