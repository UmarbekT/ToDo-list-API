import { Injectable } from '@nestjs/common';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';

@Injectable()
export class GraphqlService {
  create(createGraphqlInput: CreateGraphqlInput) {
    return 'This action adds a new graphql';
  }

  findAll() {
    return `This action returns all graphql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphql`;
  }

  update(id: number, updateGraphqlInput: UpdateGraphqlInput) {
    return `This action updates a #${id} graphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphql`;
  }
  removeAll() {
    return `This action removes all graphql`;
  }
  removeGraphqlById(id: number) {
    return `This action removes a #${id} graphql`;
  }
  removeGraphqlByName(name: string) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndId(name: string, id: number) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDate(name: string, id: number, date: string) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTime(
    name: string,
    id: number,
    date: string,
    time: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDate(
    name: string,
    id: number,
    date: string,
    time: string,
    date2: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTime(
    name: string,
    id: number,
    date: string,
    time: string,
    date2: string,
    time2: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDate(
    name: string,
    id: number,
    date: string,
    time: string,
    date2: string,
    time2: string,
    date3: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDateAndTime(
    name: string,
    id: number,
    date: string,
    time: string,
    date2: string,
    time2: string,
    date3: string,
    time3: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDateAndTimeAndDate(
    name: string,
    id: number,
    date: string,
    time: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDateAndTimeAndDateAndTime(
    name: string,
    id: number,
    date: string,
    time: string,
  ) {
    return `This action removes a #${name} graphql`;
  }
}
