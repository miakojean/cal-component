// validation.ts

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export interface Step1Data {
    nom: string;
    prenom: string;
    username: string;
}

export interface Step2Data {
    email: string;
    telephone: string;
    dateNaissance: string;
}

export interface Step3Data {
    motDePasse: string;
    confirmationMotDePasse: string;
}

export type StepData = Step1Data | Step2Data | Step3Data;

export const validateStep = (stepNumber: number, data: StepData, selectedRole: string = ''): ValidationResult => {
    let errors: string[] = [];
    
    switch(stepNumber) {
        case 1:
            errors = validateStep1(data as Step1Data);
            break;
        case 2:
            errors = validateStep2(data as Step2Data);
            break;
        case 3:
            errors = validateStep3(data as Step3Data, selectedRole);
            break;
        default:
            errors = ['Étape non valide'];
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

const validateStep1 = (data: Step1Data): string[] => {
    const errors: string[] = [];
    
    if (!data.nom || data.nom.trim() === '') {
        errors.push('Le nom de famille est requis');
    }
    
    if (!data.prenom || data.prenom.trim() === '') {
        errors.push('Le prénom est requis');
    }
    
    if (!data.username || data.username.trim() === '') {
        errors.push('Le nom d\'utilisateur est requis');
    }
    
    return errors;
};

const validateStep2 = (data: Step2Data): string[] => {
    const errors: string[] = [];
    
    if (!data.email || data.email.trim() === '') {
        errors.push('L\'email est requis');
    } else if (!isValidEmail(data.email)) {
        errors.push('Veuillez entrer un email valide');
    }
    
    if (!data.telephone || data.telephone.trim() === '') {
        errors.push('Le numéro de téléphone est requis');
    } else if (!isValidPhone(data.telephone)) {
        errors.push('Veuillez entrer un numéro de téléphone valide');
    }
    
    if (!data.dateNaissance || data.dateNaissance.trim() === '') {
        errors.push('La date de naissance est requise');
    }
    
    return errors;
};

const validateStep3 = (data: Step3Data, selectedRole: string): string[] => {
    const errors: string[] = [];
    
    if (!data.motDePasse || data.motDePasse.trim() === '') {
        errors.push('Le mot de passe est requis');
    } else if (data.motDePasse.length < 6) {
        errors.push('Le mot de passe doit contenir au moins 6 caractères');
    }
    
    if (!data.confirmationMotDePasse || data.confirmationMotDePasse.trim() === '') {
        errors.push('La confirmation du mot de passe est requise');
    }
    
    if (data.motDePasse !== data.confirmationMotDePasse) {
        errors.push('Les mots de passe ne correspondent pas');
    }
    
    if (!selectedRole) {
        errors.push('Veuillez sélectionner un rôle');
    }
    
    return errors;
};

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const passwordMatching = (password: string, confirmation: string): boolean => {
    return password === confirmation;
};