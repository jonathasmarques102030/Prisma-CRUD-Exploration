import { v4 as uuidv4 } from 'uuid';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// CRUD - CREATE
async function createPessoa(){ 
    const pessoa = await prisma.pessoa.create({
        data: {
            email: 'jonathas.souza3@gmail.com',
            name: 'Jonathas',
            token: uuidv4()
        }
    })
    console.log(pessoa)
}

createPessoa()

// CRUD - READ
async function getPessoa(){
    const pessoa = await prisma.pessoa.findUnique({
        where: {
            id: 2
        }
    })
    console.log(pessoa)
}

getPessoa()

// CRUD - UPDATE
async function updatePessoa(){ 
    const pessoa = await prisma.pessoa.update({
        where: {
            id: 2
        },
        data: {
            name: 'Souza'
        }

    })
}

updatePessoa()

// CRUD - DELETE
async function deletePessoa(){
    const pessoa = await prisma.pessoa.delete({
        where: { id: 3 }
    })
}

deletePessoa()