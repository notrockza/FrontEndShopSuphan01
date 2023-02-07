export interface Product {
    id: number;
    name: string;
    image: string;
    stock: number;
    price: string;
    category: CategoryName;
    communitygroup: CommunityGroupName;
    levelrarity: LevelRarityName;
    detail?: string;
}

export interface CategoryName {
    id: number;
    name: string;
  
}

export interface CommunityGroupName {
    id: number;
    communityhroupName: string;
    district: string;
    subdistrict: string;
}

export interface LevelRarityName{
    id: number;
    levelrarityName: string;
    date: Date;

}