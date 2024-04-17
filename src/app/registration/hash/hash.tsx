import bcrypt from "bcrypt"

async function hashPassword(password: string) {
    const saltRounds = 10; // Anzahl der Salt-Runden (macht den Hash sicherer)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export default hashPassword;
