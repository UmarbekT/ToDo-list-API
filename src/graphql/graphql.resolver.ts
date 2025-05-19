import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';
import { Graphql } from './entities/graphql.entity';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';

@Resolver(() => Graphql)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}
  @Mutation(() => Graphql)
  createGraphql(
    @Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput,
  ) {
    return this.graphqlService.create(createGraphqlInput);
  }
  @Query(() => [Graphql], { name: 'graphqls' })
  findAll() {
    return this.graphqlService.findAll();
  }
  @Query(() => Graphql, { name: 'graphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.findOne(id);
  }
  @Mutation(() => Graphql)
  updateGraphql(
    @Args('updateGraphqlInput') updateGraphqlInput: UpdateGraphqlInput,
  ) {
    return this.graphqlService.update(
      updateGraphqlInput.id,
      updateGraphqlInput,
    );
  }
  @Mutation(() => Graphql)
  removeGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.remove(id);
  }
  @Mutation(() => Graphql)
  removeAllGraphql() {
    return this.graphqlService.removeAll();
  }
  @Mutation(() => Graphql)
  removeGraphqlById(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.removeGraphqlById(id);
  }
  @Mutation(() => Graphql)
  removeGraphqlByName(@Args('name', { type: () => String }) name: string) {
    return this.graphqlService.removeGraphqlByName(name);
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndId(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.graphqlService.removeGraphqlByNameAndId(name, id);
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDate(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDate(name, id, date);
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDateAndTime(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
    @Args('time', { type: () => String }) time: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDateAndTime(
      name,
      id,
      date,
      time,
    );
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDateAndTimeAndDate(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
    @Args('time', { type: () => String }) time: string,
    @Args('date2', { type: () => String }) date2: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDateAndTimeAndDate(
      name,
      id,
      date,
      time,
      date2,
    );
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTime(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
    @Args('time', { type: () => String }) time: string,
    @Args('date2', { type: () => String }) date2: string,
    @Args('time2', { type: () => String }) time2: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTime(
      name,
      id,
      date,
      time,
      date2,
      time2,
    );
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDate(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
    @Args('time', { type: () => String }) time: string,
    @Args('date2', { type: () => String }) date2: string,
    @Args('time2', { type: () => String }) time2: string,
    @Args('date3', { type: () => String }) date3: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDate(
      name,
      id,
      date,
      time,
      date2,
      time2,
      date3,
    );
  }
  @Mutation(() => Graphql)
  removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDateAndTime(
    @Args('name', { type: () => String }) name: string,
    @Args('id', { type: () => Int }) id: number,
    @Args('date', { type: () => String }) date: string,
    @Args('time', { type: () => String }) time: string,
    @Args('date2', { type: () => String }) date2: string,
    @Args('time2', { type: () => String }) time2: string,
    @Args('date3', { type: () => String }) date3: string,
    @Args('time3', { type: () => String }) time3: string,
  ) {
    return this.graphqlService.removeGraphqlByNameAndIdAndDateAndTimeAndDateAndTimeAndDateAndTime(
      name,
      id,
      date,
      time,
      date2,
      time2,
      date3,
      time3,
    );
  }
}
