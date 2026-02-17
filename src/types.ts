export interface Prize {
    tier: string;
    title: string;
    amount: string;
    perks: string[];
    icon: string;
    color: string;
}

export interface TeamMember {
    name: string;
    role: string;
    subRole: string;
    image: string;
}

export interface Rule {
    id: string;
    title: string;
    content: string;
}
