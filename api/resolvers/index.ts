import ArtistsResolver from './artists';
import DiscosResolver from './discos';
import UsersResolver from './users';
import { NonEmptyArray } from 'type-graphql'

export const resolvers = <NonEmptyArray<string>>[
	<unknown>UsersResolver,
	<unknown>ArtistsResolver,
	<unknown>DiscosResolver,
]

export default resolvers