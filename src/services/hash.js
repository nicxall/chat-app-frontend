import bcrypt from 'bcryptjs';

export const Hashpassword = async (password) => {
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound)
    return hash_password
}