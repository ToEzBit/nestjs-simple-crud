import { Controller, Get } from '@nestjs/common';

@Controller('bookmark')
export class BookmarkController {
  @Get()
  getBookMarks() {}

  getBookMarkById() {}

  editBookMarkById() {}

  deleteBooknarkById() {}
}
