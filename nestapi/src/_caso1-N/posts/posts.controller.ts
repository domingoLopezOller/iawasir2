import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('posts')
export class PostsController {
 constructor(private readonly postService: PostsService) {}
 @Post()
 create(@Body() createPostDto: CreatePostDto) {
 return this.postService.create(createPostDto);
 }
 @Get()
 findAll() { return this.postService.findAll(); }
 @Get(':id')
 findOne(@Param('id') id: number) { return this.postService.findOne(id); }
 @Put(':id')
 update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
 return this.postService.update(id, updatePostDto);
 }
 @Delete(':id')
 remove(@Param('id') id: number) {
 return this.postService.remove(id);
 }
 @Get('user/:userId')
 findByUser(@Param('userId') userId: number) {
 return this.postService.findByUser(userId);
 }
}
