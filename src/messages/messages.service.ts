import { MessagesRepository } from "./messages.repository";

export class MessagesService {

    messagesRepo : MessagesRepository

    constructor() {
        this.messagesRepo = new MessagesRepository()
    }

    async findOne(id: string) {
        return await this.messagesRepo.findOne(id)
    }

    async findAll() {
        return await this.messagesRepo.findAll()
    }

    async create(content: string) {
        return await this.messagesRepo.create(content)
    }

}