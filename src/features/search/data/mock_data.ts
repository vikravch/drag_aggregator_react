import type {Drag} from "../domain/Drag.ts";

export const mockDragSearchResult: Array<Drag> = [
    { id: "1", dragName: "Pain Reliever", price: 12.99, count: 30, storeId: "storeA" },
    { id: "2", dragName: "Cough Syrup", price: 8.49, count: 20, storeId: "storeB" },
    { id: "3", dragName: "Allergy Tablets", price: 15.25, count: 50, storeId: "storeA" },
    { id: "4", dragName: "Vitamin C", price: 10.00, count: 100, storeId: "storeC" },
    { id: "5", dragName: "Sleep Aid", price: 18.75, count: 40, storeId: "storeD" },
    { id: "6", dragName: "Antibiotic Cream", price: 7.30, count: 10, storeId: "storeB" },
    { id: "7", dragName: "Eye Drops", price: 5.99, count: 25, storeId: "storeC" },
    { id: "8", dragName: "Nasal Spray", price: 11.49, count: 15, storeId: "storeD" },
    { id: "9", dragName: "Antacid", price: 6.75, count: 60, storeId: "storeA" },
    { id: "10", dragName: "Multivitamin", price: 13.40, count: 90, storeId: "storeB" },
];

export const mockDragSearchWithFilterResult: Array<Drag> = [
    { id: "11", dragName: "Iron Supplement", price: 14.99, count: 45, storeId: "storeE" },
    { id: "12", dragName: "Anti-Inflammatory Gel", price: 9.50, count: 20, storeId: "storeF" },
    { id: "13", dragName: "Cold & Flu Capsules", price: 13.20, count: 35, storeId: "storeG" },
    { id: "14", dragName: "Probiotic", price: 17.85, count: 60, storeId: "storeH" },
    { id: "15", dragName: "Motion Sickness Patch", price: 7.99, count: 10, storeId: "storeE" },
    { id: "16", dragName: "Laxative Tablets", price: 6.40, count: 25, storeId: "storeF" },
    { id: "17", dragName: "Antiseptic Spray", price: 8.75, count: 15, storeId: "storeG" },
    { id: "18", dragName: "Heartburn Relief", price: 12.10, count: 30, storeId: "storeH" },
    { id: "19", dragName: "Children's Fever Syrup", price: 10.95, count: 50, storeId: "storeE" },
    { id: "20", dragName: "Omega-3 Capsules", price: 16.60, count: 100, storeId: "storeF" },
];
