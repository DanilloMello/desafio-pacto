export interface SignupForm {
    nome: string;
    email: string;
    senha: string;
    apresentacao?: string;
    habilidades?: string;
    mesesExperiencia?: number;
    userType: string;
}