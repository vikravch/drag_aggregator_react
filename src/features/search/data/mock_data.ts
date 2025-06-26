import type {Drag} from "../domain/Drag.ts";

export const mockDragSearchResult: Array<Drag> = [
    { id: "1", dragName: "Pain Reliever", price: 12.99, count: 30, storeId: "storeA", description: "Effective relief for headaches and muscle pain." },
    { id: "2", dragName: "Cough Syrup", price: 8.49, count: 20, storeId: "storeB", description: "Soothes dry and productive coughs." },
    { id: "3", dragName: "Allergy Tablets", price: 15.25, count: 50, storeId: "storeA", description: "Relieves symptoms of seasonal allergies." },
    { id: "4", dragName: "Vitamin C", price: 10.00, count: 100, storeId: "storeC", description: "Supports immune system and antioxidant protection." },
    { id: "5", dragName: "Sleep Aid", price: 18.75, count: 40, storeId: "storeD", description: "Promotes restful and uninterrupted sleep." },
    { id: "6", dragName: "Antibiotic Cream", price: 7.30, count: 10, storeId: "storeB", description: "Prevents infection in minor cuts and burns." },
    { id: "7", dragName: "Eye Drops", price: 5.99, count: 25, storeId: "storeC", description: "Relieves dryness and irritation in the eyes." },
    { id: "8", dragName: "Nasal Spray", price: 11.49, count: 15, storeId: "storeD", description: "Clears nasal congestion quickly and effectively." },
    { id: "9", dragName: "Antacid", price: 6.75, count: 60, storeId: "storeA", description: "Neutralizes stomach acid and relieves heartburn." },
    { id: "10", dragName: "Multivitamin", price: 13.40, count: 90, storeId: "storeB", description: "Daily essential vitamins and minerals in one tablet." },
];

export const mockDragSearchWithFilterResult: Array<Drag> = [
    { id: "11", dragName: "Iron Supplement", price: 14.99, count: 45, storeId: "storeE", description: "Boosts iron levels and supports red blood cell production." },
    { id: "12", dragName: "Anti-Inflammatory Gel", price: 9.50, count: 20, storeId: "storeF", description: "Reduces inflammation and soothes joint pain." },
    { id: "13", dragName: "Cold & Flu Capsules", price: 13.20, count: 35, storeId: "storeG", description: "Relieves multiple cold and flu symptoms." },
    { id: "14", dragName: "Probiotic", price: 17.85, count: 60, storeId: "storeH", description: "Supports digestive health and immune function." },
    { id: "15", dragName: "Motion Sickness Patch", price: 7.99, count: 10, storeId: "storeE", description: "Prevents nausea and dizziness during travel." },
    { id: "16", dragName: "Laxative Tablets", price: 6.40, count: 25, storeId: "storeF", description: "Provides gentle relief from occasional constipation." },
    { id: "17", dragName: "Antiseptic Spray", price: 8.75, count: 15, storeId: "storeG", description: "Kills bacteria and disinfects wounds effectively." },
    { id: "18", dragName: "Heartburn Relief", price: 12.10, count: 30, storeId: "storeH", description: "Quick relief from acid reflux and indigestion." },
    { id: "19", dragName: "Children's Fever Syrup", price: 10.95, count: 50, storeId: "storeE", description: "Reduces fever and relieves pain in children." },
    { id: "20", dragName: "Omega-3 Capsules", price: 16.60, count: 100, storeId: "storeF", description: "Supports heart, brain, and joint health." },
];
