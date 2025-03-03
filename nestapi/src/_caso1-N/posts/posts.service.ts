import { NotFoundException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

export class PostsService {
  constructor(
  @InjectRepository(Post,'base2')
  private postsRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<Post> {
  const post = this.postsRepository.create({ ...createPostDto, user: { id: createPostDto.autorId }, });
  return this.postsRepository.save(post);
  }
  async findAll(): Promise<Post[]> { return this.postsRepository.find({ relations: ['user'] }); }
  async findOne(id: number): Promise<Post> {
  const post = await this.postsRepository.findOne({ where: { id }, relations: ['user'] });
  if (!post) { throw new NotFoundException(`Post with ID "${id}" not found`); }
  return post;
  }
  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
  const post = await this.findOne(id);
  this.postsRepository.merge(post, updatePostDto);
  return this.postsRepository.save(post);
  }
  async remove(id: number): Promise<void> {
  const post = await this.findOne(id);
  await this.postsRepository.remove(post);
  }
  async findByUser(userId: number): Promise<Post[]> {
  return this.postsRepository.find({ where: { user: { id: userId } }, relations: ['user'], });
  }
 }