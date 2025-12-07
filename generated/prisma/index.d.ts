
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Guilds
 * 
 */
export type Guilds = $Result.DefaultSelection<Prisma.$GuildsPayload>
/**
 * Model GuildLog
 * 
 */
export type GuildLog = $Result.DefaultSelection<Prisma.$GuildLogPayload>
/**
 * Model GuildSettings
 * 
 */
export type GuildSettings = $Result.DefaultSelection<Prisma.$GuildSettingsPayload>
/**
 * Model GuildUser
 * 
 */
export type GuildUser = $Result.DefaultSelection<Prisma.$GuildUserPayload>
/**
 * Model GuildMessage
 * 
 */
export type GuildMessage = $Result.DefaultSelection<Prisma.$GuildMessagePayload>
/**
 * Model DiscordUser
 * 
 */
export type DiscordUser = $Result.DefaultSelection<Prisma.$DiscordUserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model DiscordUniversity
 * 
 */
export type DiscordUniversity = $Result.DefaultSelection<Prisma.$DiscordUniversityPayload>
/**
 * Model AuthorityHit
 * 
 */
export type AuthorityHit = $Result.DefaultSelection<Prisma.$AuthorityHitPayload>
/**
 * Model EmailVerification
 * 
 */
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>
/**
 * Model BiometricEntry
 * 
 */
export type BiometricEntry = $Result.DefaultSelection<Prisma.$BiometricEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Federated: {
  NOT_FEDERATED: 'NOT_FEDERATED',
  SUBMITTED: 'SUBMITTED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type Federated = (typeof Federated)[keyof typeof Federated]


export const HitType: {
  STRIKE: 'STRIKE',
  PARDON: 'PARDON'
};

export type HitType = (typeof HitType)[keyof typeof HitType]

}

export type Federated = $Enums.Federated

export const Federated: typeof $Enums.Federated

export type HitType = $Enums.HitType

export const HitType: typeof $Enums.HitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Guilds
 * const guilds = await prisma.guilds.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Guilds
   * const guilds = await prisma.guilds.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.guilds`: Exposes CRUD operations for the **Guilds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guilds
    * const guilds = await prisma.guilds.findMany()
    * ```
    */
  get guilds(): Prisma.GuildsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildLog`: Exposes CRUD operations for the **GuildLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildLogs
    * const guildLogs = await prisma.guildLog.findMany()
    * ```
    */
  get guildLog(): Prisma.GuildLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildSettings`: Exposes CRUD operations for the **GuildSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildSettings
    * const guildSettings = await prisma.guildSettings.findMany()
    * ```
    */
  get guildSettings(): Prisma.GuildSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildUser`: Exposes CRUD operations for the **GuildUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildUsers
    * const guildUsers = await prisma.guildUser.findMany()
    * ```
    */
  get guildUser(): Prisma.GuildUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildMessage`: Exposes CRUD operations for the **GuildMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildMessages
    * const guildMessages = await prisma.guildMessage.findMany()
    * ```
    */
  get guildMessage(): Prisma.GuildMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordUser`: Exposes CRUD operations for the **DiscordUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordUsers
    * const discordUsers = await prisma.discordUser.findMany()
    * ```
    */
  get discordUser(): Prisma.DiscordUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordUniversity`: Exposes CRUD operations for the **DiscordUniversity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordUniversities
    * const discordUniversities = await prisma.discordUniversity.findMany()
    * ```
    */
  get discordUniversity(): Prisma.DiscordUniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorityHit`: Exposes CRUD operations for the **AuthorityHit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorityHits
    * const authorityHits = await prisma.authorityHit.findMany()
    * ```
    */
  get authorityHit(): Prisma.AuthorityHitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerification`: Exposes CRUD operations for the **EmailVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerifications
    * const emailVerifications = await prisma.emailVerification.findMany()
    * ```
    */
  get emailVerification(): Prisma.EmailVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biometricEntry`: Exposes CRUD operations for the **BiometricEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiometricEntries
    * const biometricEntries = await prisma.biometricEntry.findMany()
    * ```
    */
  get biometricEntry(): Prisma.BiometricEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Guilds: 'Guilds',
    GuildLog: 'GuildLog',
    GuildSettings: 'GuildSettings',
    GuildUser: 'GuildUser',
    GuildMessage: 'GuildMessage',
    DiscordUser: 'DiscordUser',
    Token: 'Token',
    DiscordUniversity: 'DiscordUniversity',
    AuthorityHit: 'AuthorityHit',
    EmailVerification: 'EmailVerification',
    BiometricEntry: 'BiometricEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "guilds" | "guildLog" | "guildSettings" | "guildUser" | "guildMessage" | "discordUser" | "token" | "discordUniversity" | "authorityHit" | "emailVerification" | "biometricEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Guilds: {
        payload: Prisma.$GuildsPayload<ExtArgs>
        fields: Prisma.GuildsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          findFirst: {
            args: Prisma.GuildsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          findMany: {
            args: Prisma.GuildsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>[]
          }
          create: {
            args: Prisma.GuildsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          createMany: {
            args: Prisma.GuildsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>[]
          }
          delete: {
            args: Prisma.GuildsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          update: {
            args: Prisma.GuildsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          deleteMany: {
            args: Prisma.GuildsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>[]
          }
          upsert: {
            args: Prisma.GuildsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildsPayload>
          }
          aggregate: {
            args: Prisma.GuildsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuilds>
          }
          groupBy: {
            args: Prisma.GuildsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildsCountArgs<ExtArgs>
            result: $Utils.Optional<GuildsCountAggregateOutputType> | number
          }
        }
      }
      GuildLog: {
        payload: Prisma.$GuildLogPayload<ExtArgs>
        fields: Prisma.GuildLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          findFirst: {
            args: Prisma.GuildLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          findMany: {
            args: Prisma.GuildLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>[]
          }
          create: {
            args: Prisma.GuildLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          createMany: {
            args: Prisma.GuildLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>[]
          }
          delete: {
            args: Prisma.GuildLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          update: {
            args: Prisma.GuildLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          deleteMany: {
            args: Prisma.GuildLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>[]
          }
          upsert: {
            args: Prisma.GuildLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildLogPayload>
          }
          aggregate: {
            args: Prisma.GuildLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildLog>
          }
          groupBy: {
            args: Prisma.GuildLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildLogCountArgs<ExtArgs>
            result: $Utils.Optional<GuildLogCountAggregateOutputType> | number
          }
        }
      }
      GuildSettings: {
        payload: Prisma.$GuildSettingsPayload<ExtArgs>
        fields: Prisma.GuildSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          findFirst: {
            args: Prisma.GuildSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          findMany: {
            args: Prisma.GuildSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>[]
          }
          create: {
            args: Prisma.GuildSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          createMany: {
            args: Prisma.GuildSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>[]
          }
          delete: {
            args: Prisma.GuildSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          update: {
            args: Prisma.GuildSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          deleteMany: {
            args: Prisma.GuildSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>[]
          }
          upsert: {
            args: Prisma.GuildSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingsPayload>
          }
          aggregate: {
            args: Prisma.GuildSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildSettings>
          }
          groupBy: {
            args: Prisma.GuildSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingsCountAggregateOutputType> | number
          }
        }
      }
      GuildUser: {
        payload: Prisma.$GuildUserPayload<ExtArgs>
        fields: Prisma.GuildUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          findFirst: {
            args: Prisma.GuildUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          findMany: {
            args: Prisma.GuildUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>[]
          }
          create: {
            args: Prisma.GuildUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          createMany: {
            args: Prisma.GuildUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>[]
          }
          delete: {
            args: Prisma.GuildUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          update: {
            args: Prisma.GuildUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          deleteMany: {
            args: Prisma.GuildUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>[]
          }
          upsert: {
            args: Prisma.GuildUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildUserPayload>
          }
          aggregate: {
            args: Prisma.GuildUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildUser>
          }
          groupBy: {
            args: Prisma.GuildUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildUserCountArgs<ExtArgs>
            result: $Utils.Optional<GuildUserCountAggregateOutputType> | number
          }
        }
      }
      GuildMessage: {
        payload: Prisma.$GuildMessagePayload<ExtArgs>
        fields: Prisma.GuildMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          findFirst: {
            args: Prisma.GuildMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          findMany: {
            args: Prisma.GuildMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>[]
          }
          create: {
            args: Prisma.GuildMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          createMany: {
            args: Prisma.GuildMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>[]
          }
          delete: {
            args: Prisma.GuildMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          update: {
            args: Prisma.GuildMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          deleteMany: {
            args: Prisma.GuildMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>[]
          }
          upsert: {
            args: Prisma.GuildMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildMessagePayload>
          }
          aggregate: {
            args: Prisma.GuildMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildMessage>
          }
          groupBy: {
            args: Prisma.GuildMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildMessageCountArgs<ExtArgs>
            result: $Utils.Optional<GuildMessageCountAggregateOutputType> | number
          }
        }
      }
      DiscordUser: {
        payload: Prisma.$DiscordUserPayload<ExtArgs>
        fields: Prisma.DiscordUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          findFirst: {
            args: Prisma.DiscordUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          findMany: {
            args: Prisma.DiscordUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>[]
          }
          create: {
            args: Prisma.DiscordUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          createMany: {
            args: Prisma.DiscordUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>[]
          }
          delete: {
            args: Prisma.DiscordUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          update: {
            args: Prisma.DiscordUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          deleteMany: {
            args: Prisma.DiscordUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>[]
          }
          upsert: {
            args: Prisma.DiscordUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUserPayload>
          }
          aggregate: {
            args: Prisma.DiscordUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordUser>
          }
          groupBy: {
            args: Prisma.DiscordUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordUserCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordUserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      DiscordUniversity: {
        payload: Prisma.$DiscordUniversityPayload<ExtArgs>
        fields: Prisma.DiscordUniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordUniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordUniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          findFirst: {
            args: Prisma.DiscordUniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordUniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          findMany: {
            args: Prisma.DiscordUniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>[]
          }
          create: {
            args: Prisma.DiscordUniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          createMany: {
            args: Prisma.DiscordUniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordUniversityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>[]
          }
          delete: {
            args: Prisma.DiscordUniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          update: {
            args: Prisma.DiscordUniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          deleteMany: {
            args: Prisma.DiscordUniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordUniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordUniversityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>[]
          }
          upsert: {
            args: Prisma.DiscordUniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordUniversityPayload>
          }
          aggregate: {
            args: Prisma.DiscordUniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordUniversity>
          }
          groupBy: {
            args: Prisma.DiscordUniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordUniversityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordUniversityCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordUniversityCountAggregateOutputType> | number
          }
        }
      }
      AuthorityHit: {
        payload: Prisma.$AuthorityHitPayload<ExtArgs>
        fields: Prisma.AuthorityHitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorityHitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorityHitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          findFirst: {
            args: Prisma.AuthorityHitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorityHitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          findMany: {
            args: Prisma.AuthorityHitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>[]
          }
          create: {
            args: Prisma.AuthorityHitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          createMany: {
            args: Prisma.AuthorityHitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorityHitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>[]
          }
          delete: {
            args: Prisma.AuthorityHitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          update: {
            args: Prisma.AuthorityHitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          deleteMany: {
            args: Prisma.AuthorityHitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorityHitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorityHitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>[]
          }
          upsert: {
            args: Prisma.AuthorityHitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorityHitPayload>
          }
          aggregate: {
            args: Prisma.AuthorityHitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorityHit>
          }
          groupBy: {
            args: Prisma.AuthorityHitGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorityHitGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorityHitCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorityHitCountAggregateOutputType> | number
          }
        }
      }
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>
        fields: Prisma.EmailVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerification>
          }
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCountAggregateOutputType> | number
          }
        }
      }
      BiometricEntry: {
        payload: Prisma.$BiometricEntryPayload<ExtArgs>
        fields: Prisma.BiometricEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiometricEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiometricEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          findFirst: {
            args: Prisma.BiometricEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiometricEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          findMany: {
            args: Prisma.BiometricEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>[]
          }
          create: {
            args: Prisma.BiometricEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          createMany: {
            args: Prisma.BiometricEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiometricEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>[]
          }
          delete: {
            args: Prisma.BiometricEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          update: {
            args: Prisma.BiometricEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          deleteMany: {
            args: Prisma.BiometricEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiometricEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiometricEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>[]
          }
          upsert: {
            args: Prisma.BiometricEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricEntryPayload>
          }
          aggregate: {
            args: Prisma.BiometricEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiometricEntry>
          }
          groupBy: {
            args: Prisma.BiometricEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiometricEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiometricEntryCountArgs<ExtArgs>
            result: $Utils.Optional<BiometricEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    guilds?: GuildsOmit
    guildLog?: GuildLogOmit
    guildSettings?: GuildSettingsOmit
    guildUser?: GuildUserOmit
    guildMessage?: GuildMessageOmit
    discordUser?: DiscordUserOmit
    token?: TokenOmit
    discordUniversity?: DiscordUniversityOmit
    authorityHit?: AuthorityHitOmit
    emailVerification?: EmailVerificationOmit
    biometricEntry?: BiometricEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GuildsCountOutputType
   */

  export type GuildsCountOutputType = {
    members: number
    settings: number
    authorityHits: number
    GuildLog: number
  }

  export type GuildsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GuildsCountOutputTypeCountMembersArgs
    settings?: boolean | GuildsCountOutputTypeCountSettingsArgs
    authorityHits?: boolean | GuildsCountOutputTypeCountAuthorityHitsArgs
    GuildLog?: boolean | GuildsCountOutputTypeCountGuildLogArgs
  }

  // Custom InputTypes
  /**
   * GuildsCountOutputType without action
   */
  export type GuildsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildsCountOutputType
     */
    select?: GuildsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildsCountOutputType without action
   */
  export type GuildsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildUserWhereInput
  }

  /**
   * GuildsCountOutputType without action
   */
  export type GuildsCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildSettingsWhereInput
  }

  /**
   * GuildsCountOutputType without action
   */
  export type GuildsCountOutputTypeCountAuthorityHitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorityHitWhereInput
  }

  /**
   * GuildsCountOutputType without action
   */
  export type GuildsCountOutputTypeCountGuildLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildLogWhereInput
  }


  /**
   * Count Type GuildUserCountOutputType
   */

  export type GuildUserCountOutputType = {
    messages: number
  }

  export type GuildUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | GuildUserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GuildUserCountOutputType without action
   */
  export type GuildUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUserCountOutputType
     */
    select?: GuildUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildUserCountOutputType without action
   */
  export type GuildUserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMessageWhereInput
  }


  /**
   * Count Type GuildMessageCountOutputType
   */

  export type GuildMessageCountOutputType = {
    mentions: number
  }

  export type GuildMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentions?: boolean | GuildMessageCountOutputTypeCountMentionsArgs
  }

  // Custom InputTypes
  /**
   * GuildMessageCountOutputType without action
   */
  export type GuildMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessageCountOutputType
     */
    select?: GuildMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildMessageCountOutputType without action
   */
  export type GuildMessageCountOutputTypeCountMentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMessageWhereInput
  }


  /**
   * Count Type DiscordUserCountOutputType
   */

  export type DiscordUserCountOutputType = {
    tokens: number
    guilds: number
    link: number
  }

  export type DiscordUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | DiscordUserCountOutputTypeCountTokensArgs
    guilds?: boolean | DiscordUserCountOutputTypeCountGuildsArgs
    link?: boolean | DiscordUserCountOutputTypeCountLinkArgs
  }

  // Custom InputTypes
  /**
   * DiscordUserCountOutputType without action
   */
  export type DiscordUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUserCountOutputType
     */
    select?: DiscordUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordUserCountOutputType without action
   */
  export type DiscordUserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * DiscordUserCountOutputType without action
   */
  export type DiscordUserCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildUserWhereInput
  }

  /**
   * DiscordUserCountOutputType without action
   */
  export type DiscordUserCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUniversityWhereInput
  }


  /**
   * Count Type DiscordUniversityCountOutputType
   */

  export type DiscordUniversityCountOutputType = {
    externalsHelped: number
    authorityHits: number
    Guilds: number
  }

  export type DiscordUniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    externalsHelped?: boolean | DiscordUniversityCountOutputTypeCountExternalsHelpedArgs
    authorityHits?: boolean | DiscordUniversityCountOutputTypeCountAuthorityHitsArgs
    Guilds?: boolean | DiscordUniversityCountOutputTypeCountGuildsArgs
  }

  // Custom InputTypes
  /**
   * DiscordUniversityCountOutputType without action
   */
  export type DiscordUniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversityCountOutputType
     */
    select?: DiscordUniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordUniversityCountOutputType without action
   */
  export type DiscordUniversityCountOutputTypeCountExternalsHelpedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUniversityWhereInput
  }

  /**
   * DiscordUniversityCountOutputType without action
   */
  export type DiscordUniversityCountOutputTypeCountAuthorityHitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorityHitWhereInput
  }

  /**
   * DiscordUniversityCountOutputType without action
   */
  export type DiscordUniversityCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildsWhereInput
  }


  /**
   * Count Type EmailVerificationCountOutputType
   */

  export type EmailVerificationCountOutputType = {
    link: number
  }

  export type EmailVerificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | EmailVerificationCountOutputTypeCountLinkArgs
  }

  // Custom InputTypes
  /**
   * EmailVerificationCountOutputType without action
   */
  export type EmailVerificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCountOutputType
     */
    select?: EmailVerificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailVerificationCountOutputType without action
   */
  export type EmailVerificationCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUniversityWhereInput
  }


  /**
   * Count Type BiometricEntryCountOutputType
   */

  export type BiometricEntryCountOutputType = {
    link: number
  }

  export type BiometricEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | BiometricEntryCountOutputTypeCountLinkArgs
  }

  // Custom InputTypes
  /**
   * BiometricEntryCountOutputType without action
   */
  export type BiometricEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntryCountOutputType
     */
    select?: BiometricEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BiometricEntryCountOutputType without action
   */
  export type BiometricEntryCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUniversityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Guilds
   */

  export type AggregateGuilds = {
    _count: GuildsCountAggregateOutputType | null
    _min: GuildsMinAggregateOutputType | null
    _max: GuildsMaxAggregateOutputType | null
  }

  export type GuildsMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    guildName: string | null
    guildIcon: string | null
    backgroundImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discordUniversityId: string | null
  }

  export type GuildsMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    guildName: string | null
    guildIcon: string | null
    backgroundImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discordUniversityId: string | null
  }

  export type GuildsCountAggregateOutputType = {
    id: number
    guildId: number
    guildName: number
    guildIcon: number
    backgroundImage: number
    createdAt: number
    updatedAt: number
    discordUniversityId: number
    _all: number
  }


  export type GuildsMinAggregateInputType = {
    id?: true
    guildId?: true
    guildName?: true
    guildIcon?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    discordUniversityId?: true
  }

  export type GuildsMaxAggregateInputType = {
    id?: true
    guildId?: true
    guildName?: true
    guildIcon?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    discordUniversityId?: true
  }

  export type GuildsCountAggregateInputType = {
    id?: true
    guildId?: true
    guildName?: true
    guildIcon?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    discordUniversityId?: true
    _all?: true
  }

  export type GuildsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to aggregate.
     */
    where?: GuildsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildsOrderByWithRelationInput | GuildsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guilds
    **/
    _count?: true | GuildsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildsMaxAggregateInputType
  }

  export type GetGuildsAggregateType<T extends GuildsAggregateArgs> = {
        [P in keyof T & keyof AggregateGuilds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuilds[P]>
      : GetScalarType<T[P], AggregateGuilds[P]>
  }




  export type GuildsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildsWhereInput
    orderBy?: GuildsOrderByWithAggregationInput | GuildsOrderByWithAggregationInput[]
    by: GuildsScalarFieldEnum[] | GuildsScalarFieldEnum
    having?: GuildsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildsCountAggregateInputType | true
    _min?: GuildsMinAggregateInputType
    _max?: GuildsMaxAggregateInputType
  }

  export type GuildsGroupByOutputType = {
    id: string
    guildId: string
    guildName: string
    guildIcon: string | null
    backgroundImage: string | null
    createdAt: Date
    updatedAt: Date
    discordUniversityId: string | null
    _count: GuildsCountAggregateOutputType | null
    _min: GuildsMinAggregateOutputType | null
    _max: GuildsMaxAggregateOutputType | null
  }

  type GetGuildsGroupByPayload<T extends GuildsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildsGroupByOutputType[P]>
            : GetScalarType<T[P], GuildsGroupByOutputType[P]>
        }
      >
    >


  export type GuildsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    guildName?: boolean
    guildIcon?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discordUniversityId?: boolean
    members?: boolean | Guilds$membersArgs<ExtArgs>
    settings?: boolean | Guilds$settingsArgs<ExtArgs>
    authorityHits?: boolean | Guilds$authorityHitsArgs<ExtArgs>
    GuildLog?: boolean | Guilds$GuildLogArgs<ExtArgs>
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
    _count?: boolean | GuildsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guilds"]>

  export type GuildsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    guildName?: boolean
    guildIcon?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discordUniversityId?: boolean
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
  }, ExtArgs["result"]["guilds"]>

  export type GuildsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    guildName?: boolean
    guildIcon?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discordUniversityId?: boolean
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
  }, ExtArgs["result"]["guilds"]>

  export type GuildsSelectScalar = {
    id?: boolean
    guildId?: boolean
    guildName?: boolean
    guildIcon?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discordUniversityId?: boolean
  }

  export type GuildsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "guildName" | "guildIcon" | "backgroundImage" | "createdAt" | "updatedAt" | "discordUniversityId", ExtArgs["result"]["guilds"]>
  export type GuildsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Guilds$membersArgs<ExtArgs>
    settings?: boolean | Guilds$settingsArgs<ExtArgs>
    authorityHits?: boolean | Guilds$authorityHitsArgs<ExtArgs>
    GuildLog?: boolean | Guilds$GuildLogArgs<ExtArgs>
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
    _count?: boolean | GuildsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
  }
  export type GuildsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUniversity?: boolean | Guilds$DiscordUniversityArgs<ExtArgs>
  }

  export type $GuildsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guilds"
    objects: {
      members: Prisma.$GuildUserPayload<ExtArgs>[]
      settings: Prisma.$GuildSettingsPayload<ExtArgs>[]
      authorityHits: Prisma.$AuthorityHitPayload<ExtArgs>[]
      GuildLog: Prisma.$GuildLogPayload<ExtArgs>[]
      DiscordUniversity: Prisma.$DiscordUniversityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      guildName: string
      guildIcon: string | null
      backgroundImage: string | null
      createdAt: Date
      updatedAt: Date
      discordUniversityId: string | null
    }, ExtArgs["result"]["guilds"]>
    composites: {}
  }

  type GuildsGetPayload<S extends boolean | null | undefined | GuildsDefaultArgs> = $Result.GetResult<Prisma.$GuildsPayload, S>

  type GuildsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildsCountAggregateInputType | true
    }

  export interface GuildsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guilds'], meta: { name: 'Guilds' } }
    /**
     * Find zero or one Guilds that matches the filter.
     * @param {GuildsFindUniqueArgs} args - Arguments to find a Guilds
     * @example
     * // Get one Guilds
     * const guilds = await prisma.guilds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildsFindUniqueArgs>(args: SelectSubset<T, GuildsFindUniqueArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guilds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildsFindUniqueOrThrowArgs} args - Arguments to find a Guilds
     * @example
     * // Get one Guilds
     * const guilds = await prisma.guilds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildsFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsFindFirstArgs} args - Arguments to find a Guilds
     * @example
     * // Get one Guilds
     * const guilds = await prisma.guilds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildsFindFirstArgs>(args?: SelectSubset<T, GuildsFindFirstArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guilds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsFindFirstOrThrowArgs} args - Arguments to find a Guilds
     * @example
     * // Get one Guilds
     * const guilds = await prisma.guilds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildsFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guilds
     * const guilds = await prisma.guilds.findMany()
     * 
     * // Get first 10 Guilds
     * const guilds = await prisma.guilds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildsWithIdOnly = await prisma.guilds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildsFindManyArgs>(args?: SelectSubset<T, GuildsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guilds.
     * @param {GuildsCreateArgs} args - Arguments to create a Guilds.
     * @example
     * // Create one Guilds
     * const Guilds = await prisma.guilds.create({
     *   data: {
     *     // ... data to create a Guilds
     *   }
     * })
     * 
     */
    create<T extends GuildsCreateArgs>(args: SelectSubset<T, GuildsCreateArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guilds.
     * @param {GuildsCreateManyArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guilds = await prisma.guilds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildsCreateManyArgs>(args?: SelectSubset<T, GuildsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guilds and returns the data saved in the database.
     * @param {GuildsCreateManyAndReturnArgs} args - Arguments to create many Guilds.
     * @example
     * // Create many Guilds
     * const guilds = await prisma.guilds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guilds and only return the `id`
     * const guildsWithIdOnly = await prisma.guilds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildsCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guilds.
     * @param {GuildsDeleteArgs} args - Arguments to delete one Guilds.
     * @example
     * // Delete one Guilds
     * const Guilds = await prisma.guilds.delete({
     *   where: {
     *     // ... filter to delete one Guilds
     *   }
     * })
     * 
     */
    delete<T extends GuildsDeleteArgs>(args: SelectSubset<T, GuildsDeleteArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guilds.
     * @param {GuildsUpdateArgs} args - Arguments to update one Guilds.
     * @example
     * // Update one Guilds
     * const guilds = await prisma.guilds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildsUpdateArgs>(args: SelectSubset<T, GuildsUpdateArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guilds.
     * @param {GuildsDeleteManyArgs} args - Arguments to filter Guilds to delete.
     * @example
     * // Delete a few Guilds
     * const { count } = await prisma.guilds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildsDeleteManyArgs>(args?: SelectSubset<T, GuildsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guilds
     * const guilds = await prisma.guilds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildsUpdateManyArgs>(args: SelectSubset<T, GuildsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guilds and returns the data updated in the database.
     * @param {GuildsUpdateManyAndReturnArgs} args - Arguments to update many Guilds.
     * @example
     * // Update many Guilds
     * const guilds = await prisma.guilds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guilds and only return the `id`
     * const guildsWithIdOnly = await prisma.guilds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildsUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guilds.
     * @param {GuildsUpsertArgs} args - Arguments to update or create a Guilds.
     * @example
     * // Update or create a Guilds
     * const guilds = await prisma.guilds.upsert({
     *   create: {
     *     // ... data to create a Guilds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guilds we want to update
     *   }
     * })
     */
    upsert<T extends GuildsUpsertArgs>(args: SelectSubset<T, GuildsUpsertArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsCountArgs} args - Arguments to filter Guilds to count.
     * @example
     * // Count the number of Guilds
     * const count = await prisma.guilds.count({
     *   where: {
     *     // ... the filter for the Guilds we want to count
     *   }
     * })
    **/
    count<T extends GuildsCountArgs>(
      args?: Subset<T, GuildsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildsAggregateArgs>(args: Subset<T, GuildsAggregateArgs>): Prisma.PrismaPromise<GetGuildsAggregateType<T>>

    /**
     * Group by Guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildsGroupByArgs['orderBy'] }
        : { orderBy?: GuildsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guilds model
   */
  readonly fields: GuildsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guilds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Guilds$membersArgs<ExtArgs> = {}>(args?: Subset<T, Guilds$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends Guilds$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Guilds$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authorityHits<T extends Guilds$authorityHitsArgs<ExtArgs> = {}>(args?: Subset<T, Guilds$authorityHitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GuildLog<T extends Guilds$GuildLogArgs<ExtArgs> = {}>(args?: Subset<T, Guilds$GuildLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DiscordUniversity<T extends Guilds$DiscordUniversityArgs<ExtArgs> = {}>(args?: Subset<T, Guilds$DiscordUniversityArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guilds model
   */
  interface GuildsFieldRefs {
    readonly id: FieldRef<"Guilds", 'String'>
    readonly guildId: FieldRef<"Guilds", 'String'>
    readonly guildName: FieldRef<"Guilds", 'String'>
    readonly guildIcon: FieldRef<"Guilds", 'String'>
    readonly backgroundImage: FieldRef<"Guilds", 'String'>
    readonly createdAt: FieldRef<"Guilds", 'DateTime'>
    readonly updatedAt: FieldRef<"Guilds", 'DateTime'>
    readonly discordUniversityId: FieldRef<"Guilds", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guilds findUnique
   */
  export type GuildsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where: GuildsWhereUniqueInput
  }

  /**
   * Guilds findUniqueOrThrow
   */
  export type GuildsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where: GuildsWhereUniqueInput
  }

  /**
   * Guilds findFirst
   */
  export type GuildsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildsOrderByWithRelationInput | GuildsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildsScalarFieldEnum | GuildsScalarFieldEnum[]
  }

  /**
   * Guilds findFirstOrThrow
   */
  export type GuildsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildsOrderByWithRelationInput | GuildsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guilds.
     */
    cursor?: GuildsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guilds.
     */
    distinct?: GuildsScalarFieldEnum | GuildsScalarFieldEnum[]
  }

  /**
   * Guilds findMany
   */
  export type GuildsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter, which Guilds to fetch.
     */
    where?: GuildsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guilds to fetch.
     */
    orderBy?: GuildsOrderByWithRelationInput | GuildsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guilds.
     */
    cursor?: GuildsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guilds.
     */
    skip?: number
    distinct?: GuildsScalarFieldEnum | GuildsScalarFieldEnum[]
  }

  /**
   * Guilds create
   */
  export type GuildsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * The data needed to create a Guilds.
     */
    data: XOR<GuildsCreateInput, GuildsUncheckedCreateInput>
  }

  /**
   * Guilds createMany
   */
  export type GuildsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guilds.
     */
    data: GuildsCreateManyInput | GuildsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guilds createManyAndReturn
   */
  export type GuildsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * The data used to create many Guilds.
     */
    data: GuildsCreateManyInput | GuildsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guilds update
   */
  export type GuildsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * The data needed to update a Guilds.
     */
    data: XOR<GuildsUpdateInput, GuildsUncheckedUpdateInput>
    /**
     * Choose, which Guilds to update.
     */
    where: GuildsWhereUniqueInput
  }

  /**
   * Guilds updateMany
   */
  export type GuildsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildsUpdateManyMutationInput, GuildsUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildsWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
  }

  /**
   * Guilds updateManyAndReturn
   */
  export type GuildsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * The data used to update Guilds.
     */
    data: XOR<GuildsUpdateManyMutationInput, GuildsUncheckedUpdateManyInput>
    /**
     * Filter which Guilds to update
     */
    where?: GuildsWhereInput
    /**
     * Limit how many Guilds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guilds upsert
   */
  export type GuildsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * The filter to search for the Guilds to update in case it exists.
     */
    where: GuildsWhereUniqueInput
    /**
     * In case the Guilds found by the `where` argument doesn't exist, create a new Guilds with this data.
     */
    create: XOR<GuildsCreateInput, GuildsUncheckedCreateInput>
    /**
     * In case the Guilds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildsUpdateInput, GuildsUncheckedUpdateInput>
  }

  /**
   * Guilds delete
   */
  export type GuildsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    /**
     * Filter which Guilds to delete.
     */
    where: GuildsWhereUniqueInput
  }

  /**
   * Guilds deleteMany
   */
  export type GuildsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guilds to delete
     */
    where?: GuildsWhereInput
    /**
     * Limit how many Guilds to delete.
     */
    limit?: number
  }

  /**
   * Guilds.members
   */
  export type Guilds$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    where?: GuildUserWhereInput
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    cursor?: GuildUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildUserScalarFieldEnum | GuildUserScalarFieldEnum[]
  }

  /**
   * Guilds.settings
   */
  export type Guilds$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    where?: GuildSettingsWhereInput
    orderBy?: GuildSettingsOrderByWithRelationInput | GuildSettingsOrderByWithRelationInput[]
    cursor?: GuildSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildSettingsScalarFieldEnum | GuildSettingsScalarFieldEnum[]
  }

  /**
   * Guilds.authorityHits
   */
  export type Guilds$authorityHitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    where?: AuthorityHitWhereInput
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    cursor?: AuthorityHitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorityHitScalarFieldEnum | AuthorityHitScalarFieldEnum[]
  }

  /**
   * Guilds.GuildLog
   */
  export type Guilds$GuildLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    where?: GuildLogWhereInput
    orderBy?: GuildLogOrderByWithRelationInput | GuildLogOrderByWithRelationInput[]
    cursor?: GuildLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildLogScalarFieldEnum | GuildLogScalarFieldEnum[]
  }

  /**
   * Guilds.DiscordUniversity
   */
  export type Guilds$DiscordUniversityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
  }

  /**
   * Guilds without action
   */
  export type GuildsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
  }


  /**
   * Model GuildLog
   */

  export type AggregateGuildLog = {
    _count: GuildLogCountAggregateOutputType | null
    _min: GuildLogMinAggregateOutputType | null
    _max: GuildLogMaxAggregateOutputType | null
  }

  export type GuildLogMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    guildsId: string | null
  }

  export type GuildLogMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
    guildsId: string | null
  }

  export type GuildLogCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    guildsId: number
    _all: number
  }


  export type GuildLogMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    guildsId?: true
  }

  export type GuildLogMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    guildsId?: true
  }

  export type GuildLogCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    guildsId?: true
    _all?: true
  }

  export type GuildLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildLog to aggregate.
     */
    where?: GuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildLogs to fetch.
     */
    orderBy?: GuildLogOrderByWithRelationInput | GuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildLogs
    **/
    _count?: true | GuildLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildLogMaxAggregateInputType
  }

  export type GetGuildLogAggregateType<T extends GuildLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildLog[P]>
      : GetScalarType<T[P], AggregateGuildLog[P]>
  }




  export type GuildLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildLogWhereInput
    orderBy?: GuildLogOrderByWithAggregationInput | GuildLogOrderByWithAggregationInput[]
    by: GuildLogScalarFieldEnum[] | GuildLogScalarFieldEnum
    having?: GuildLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildLogCountAggregateInputType | true
    _min?: GuildLogMinAggregateInputType
    _max?: GuildLogMaxAggregateInputType
  }

  export type GuildLogGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    guildsId: string | null
    _count: GuildLogCountAggregateOutputType | null
    _min: GuildLogMinAggregateOutputType | null
    _max: GuildLogMaxAggregateOutputType | null
  }

  type GetGuildLogGroupByPayload<T extends GuildLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildLogGroupByOutputType[P]>
            : GetScalarType<T[P], GuildLogGroupByOutputType[P]>
        }
      >
    >


  export type GuildLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["guildLog"]>

  export type GuildLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["guildLog"]>

  export type GuildLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["guildLog"]>

  export type GuildLogSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
    guildsId?: boolean
  }

  export type GuildLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt" | "guildsId", ExtArgs["result"]["guildLog"]>
  export type GuildLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }
  export type GuildLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }
  export type GuildLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildLog$GuildsArgs<ExtArgs>
  }

  export type $GuildLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildLog"
    objects: {
      Guilds: Prisma.$GuildsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
      guildsId: string | null
    }, ExtArgs["result"]["guildLog"]>
    composites: {}
  }

  type GuildLogGetPayload<S extends boolean | null | undefined | GuildLogDefaultArgs> = $Result.GetResult<Prisma.$GuildLogPayload, S>

  type GuildLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildLogCountAggregateInputType | true
    }

  export interface GuildLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildLog'], meta: { name: 'GuildLog' } }
    /**
     * Find zero or one GuildLog that matches the filter.
     * @param {GuildLogFindUniqueArgs} args - Arguments to find a GuildLog
     * @example
     * // Get one GuildLog
     * const guildLog = await prisma.guildLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildLogFindUniqueArgs>(args: SelectSubset<T, GuildLogFindUniqueArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildLogFindUniqueOrThrowArgs} args - Arguments to find a GuildLog
     * @example
     * // Get one GuildLog
     * const guildLog = await prisma.guildLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogFindFirstArgs} args - Arguments to find a GuildLog
     * @example
     * // Get one GuildLog
     * const guildLog = await prisma.guildLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildLogFindFirstArgs>(args?: SelectSubset<T, GuildLogFindFirstArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogFindFirstOrThrowArgs} args - Arguments to find a GuildLog
     * @example
     * // Get one GuildLog
     * const guildLog = await prisma.guildLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildLogs
     * const guildLogs = await prisma.guildLog.findMany()
     * 
     * // Get first 10 GuildLogs
     * const guildLogs = await prisma.guildLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildLogWithIdOnly = await prisma.guildLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildLogFindManyArgs>(args?: SelectSubset<T, GuildLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildLog.
     * @param {GuildLogCreateArgs} args - Arguments to create a GuildLog.
     * @example
     * // Create one GuildLog
     * const GuildLog = await prisma.guildLog.create({
     *   data: {
     *     // ... data to create a GuildLog
     *   }
     * })
     * 
     */
    create<T extends GuildLogCreateArgs>(args: SelectSubset<T, GuildLogCreateArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildLogs.
     * @param {GuildLogCreateManyArgs} args - Arguments to create many GuildLogs.
     * @example
     * // Create many GuildLogs
     * const guildLog = await prisma.guildLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildLogCreateManyArgs>(args?: SelectSubset<T, GuildLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildLogs and returns the data saved in the database.
     * @param {GuildLogCreateManyAndReturnArgs} args - Arguments to create many GuildLogs.
     * @example
     * // Create many GuildLogs
     * const guildLog = await prisma.guildLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildLogs and only return the `id`
     * const guildLogWithIdOnly = await prisma.guildLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildLogCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildLog.
     * @param {GuildLogDeleteArgs} args - Arguments to delete one GuildLog.
     * @example
     * // Delete one GuildLog
     * const GuildLog = await prisma.guildLog.delete({
     *   where: {
     *     // ... filter to delete one GuildLog
     *   }
     * })
     * 
     */
    delete<T extends GuildLogDeleteArgs>(args: SelectSubset<T, GuildLogDeleteArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildLog.
     * @param {GuildLogUpdateArgs} args - Arguments to update one GuildLog.
     * @example
     * // Update one GuildLog
     * const guildLog = await prisma.guildLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildLogUpdateArgs>(args: SelectSubset<T, GuildLogUpdateArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildLogs.
     * @param {GuildLogDeleteManyArgs} args - Arguments to filter GuildLogs to delete.
     * @example
     * // Delete a few GuildLogs
     * const { count } = await prisma.guildLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildLogDeleteManyArgs>(args?: SelectSubset<T, GuildLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildLogs
     * const guildLog = await prisma.guildLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildLogUpdateManyArgs>(args: SelectSubset<T, GuildLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildLogs and returns the data updated in the database.
     * @param {GuildLogUpdateManyAndReturnArgs} args - Arguments to update many GuildLogs.
     * @example
     * // Update many GuildLogs
     * const guildLog = await prisma.guildLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildLogs and only return the `id`
     * const guildLogWithIdOnly = await prisma.guildLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildLogUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildLog.
     * @param {GuildLogUpsertArgs} args - Arguments to update or create a GuildLog.
     * @example
     * // Update or create a GuildLog
     * const guildLog = await prisma.guildLog.upsert({
     *   create: {
     *     // ... data to create a GuildLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildLog we want to update
     *   }
     * })
     */
    upsert<T extends GuildLogUpsertArgs>(args: SelectSubset<T, GuildLogUpsertArgs<ExtArgs>>): Prisma__GuildLogClient<$Result.GetResult<Prisma.$GuildLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogCountArgs} args - Arguments to filter GuildLogs to count.
     * @example
     * // Count the number of GuildLogs
     * const count = await prisma.guildLog.count({
     *   where: {
     *     // ... the filter for the GuildLogs we want to count
     *   }
     * })
    **/
    count<T extends GuildLogCountArgs>(
      args?: Subset<T, GuildLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildLogAggregateArgs>(args: Subset<T, GuildLogAggregateArgs>): Prisma.PrismaPromise<GetGuildLogAggregateType<T>>

    /**
     * Group by GuildLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildLogGroupByArgs['orderBy'] }
        : { orderBy?: GuildLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildLog model
   */
  readonly fields: GuildLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Guilds<T extends GuildLog$GuildsArgs<ExtArgs> = {}>(args?: Subset<T, GuildLog$GuildsArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildLog model
   */
  interface GuildLogFieldRefs {
    readonly id: FieldRef<"GuildLog", 'String'>
    readonly message: FieldRef<"GuildLog", 'String'>
    readonly createdAt: FieldRef<"GuildLog", 'DateTime'>
    readonly guildsId: FieldRef<"GuildLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuildLog findUnique
   */
  export type GuildLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter, which GuildLog to fetch.
     */
    where: GuildLogWhereUniqueInput
  }

  /**
   * GuildLog findUniqueOrThrow
   */
  export type GuildLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter, which GuildLog to fetch.
     */
    where: GuildLogWhereUniqueInput
  }

  /**
   * GuildLog findFirst
   */
  export type GuildLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter, which GuildLog to fetch.
     */
    where?: GuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildLogs to fetch.
     */
    orderBy?: GuildLogOrderByWithRelationInput | GuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildLogs.
     */
    cursor?: GuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildLogs.
     */
    distinct?: GuildLogScalarFieldEnum | GuildLogScalarFieldEnum[]
  }

  /**
   * GuildLog findFirstOrThrow
   */
  export type GuildLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter, which GuildLog to fetch.
     */
    where?: GuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildLogs to fetch.
     */
    orderBy?: GuildLogOrderByWithRelationInput | GuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildLogs.
     */
    cursor?: GuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildLogs.
     */
    distinct?: GuildLogScalarFieldEnum | GuildLogScalarFieldEnum[]
  }

  /**
   * GuildLog findMany
   */
  export type GuildLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter, which GuildLogs to fetch.
     */
    where?: GuildLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildLogs to fetch.
     */
    orderBy?: GuildLogOrderByWithRelationInput | GuildLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildLogs.
     */
    cursor?: GuildLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildLogs.
     */
    skip?: number
    distinct?: GuildLogScalarFieldEnum | GuildLogScalarFieldEnum[]
  }

  /**
   * GuildLog create
   */
  export type GuildLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildLog.
     */
    data: XOR<GuildLogCreateInput, GuildLogUncheckedCreateInput>
  }

  /**
   * GuildLog createMany
   */
  export type GuildLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildLogs.
     */
    data: GuildLogCreateManyInput | GuildLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildLog createManyAndReturn
   */
  export type GuildLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * The data used to create many GuildLogs.
     */
    data: GuildLogCreateManyInput | GuildLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildLog update
   */
  export type GuildLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildLog.
     */
    data: XOR<GuildLogUpdateInput, GuildLogUncheckedUpdateInput>
    /**
     * Choose, which GuildLog to update.
     */
    where: GuildLogWhereUniqueInput
  }

  /**
   * GuildLog updateMany
   */
  export type GuildLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildLogs.
     */
    data: XOR<GuildLogUpdateManyMutationInput, GuildLogUncheckedUpdateManyInput>
    /**
     * Filter which GuildLogs to update
     */
    where?: GuildLogWhereInput
    /**
     * Limit how many GuildLogs to update.
     */
    limit?: number
  }

  /**
   * GuildLog updateManyAndReturn
   */
  export type GuildLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * The data used to update GuildLogs.
     */
    data: XOR<GuildLogUpdateManyMutationInput, GuildLogUncheckedUpdateManyInput>
    /**
     * Filter which GuildLogs to update
     */
    where?: GuildLogWhereInput
    /**
     * Limit how many GuildLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildLog upsert
   */
  export type GuildLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildLog to update in case it exists.
     */
    where: GuildLogWhereUniqueInput
    /**
     * In case the GuildLog found by the `where` argument doesn't exist, create a new GuildLog with this data.
     */
    create: XOR<GuildLogCreateInput, GuildLogUncheckedCreateInput>
    /**
     * In case the GuildLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildLogUpdateInput, GuildLogUncheckedUpdateInput>
  }

  /**
   * GuildLog delete
   */
  export type GuildLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
    /**
     * Filter which GuildLog to delete.
     */
    where: GuildLogWhereUniqueInput
  }

  /**
   * GuildLog deleteMany
   */
  export type GuildLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildLogs to delete
     */
    where?: GuildLogWhereInput
    /**
     * Limit how many GuildLogs to delete.
     */
    limit?: number
  }

  /**
   * GuildLog.Guilds
   */
  export type GuildLog$GuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    where?: GuildsWhereInput
  }

  /**
   * GuildLog without action
   */
  export type GuildLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildLog
     */
    select?: GuildLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildLog
     */
    omit?: GuildLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildLogInclude<ExtArgs> | null
  }


  /**
   * Model GuildSettings
   */

  export type AggregateGuildSettings = {
    _count: GuildSettingsCountAggregateOutputType | null
    _min: GuildSettingsMinAggregateOutputType | null
    _max: GuildSettingsMaxAggregateOutputType | null
  }

  export type GuildSettingsMinAggregateOutputType = {
    id: string | null
    allowsEmailEntry: boolean | null
    allowsBiometricEntry: boolean | null
    allowsExternalEntry: boolean | null
    verifiedRoleId: string | null
    moderatorRoleId: string | null
    usesUowboNet: boolean | null
    guildsId: string | null
  }

  export type GuildSettingsMaxAggregateOutputType = {
    id: string | null
    allowsEmailEntry: boolean | null
    allowsBiometricEntry: boolean | null
    allowsExternalEntry: boolean | null
    verifiedRoleId: string | null
    moderatorRoleId: string | null
    usesUowboNet: boolean | null
    guildsId: string | null
  }

  export type GuildSettingsCountAggregateOutputType = {
    id: number
    allowsEmailEntry: number
    allowsBiometricEntry: number
    allowsExternalEntry: number
    verifiedRoleId: number
    moderatorRoleId: number
    usesUowboNet: number
    guildsId: number
    _all: number
  }


  export type GuildSettingsMinAggregateInputType = {
    id?: true
    allowsEmailEntry?: true
    allowsBiometricEntry?: true
    allowsExternalEntry?: true
    verifiedRoleId?: true
    moderatorRoleId?: true
    usesUowboNet?: true
    guildsId?: true
  }

  export type GuildSettingsMaxAggregateInputType = {
    id?: true
    allowsEmailEntry?: true
    allowsBiometricEntry?: true
    allowsExternalEntry?: true
    verifiedRoleId?: true
    moderatorRoleId?: true
    usesUowboNet?: true
    guildsId?: true
  }

  export type GuildSettingsCountAggregateInputType = {
    id?: true
    allowsEmailEntry?: true
    allowsBiometricEntry?: true
    allowsExternalEntry?: true
    verifiedRoleId?: true
    moderatorRoleId?: true
    usesUowboNet?: true
    guildsId?: true
    _all?: true
  }

  export type GuildSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSettings to aggregate.
     */
    where?: GuildSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingsOrderByWithRelationInput | GuildSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildSettings
    **/
    _count?: true | GuildSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildSettingsMaxAggregateInputType
  }

  export type GetGuildSettingsAggregateType<T extends GuildSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildSettings[P]>
      : GetScalarType<T[P], AggregateGuildSettings[P]>
  }




  export type GuildSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildSettingsWhereInput
    orderBy?: GuildSettingsOrderByWithAggregationInput | GuildSettingsOrderByWithAggregationInput[]
    by: GuildSettingsScalarFieldEnum[] | GuildSettingsScalarFieldEnum
    having?: GuildSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildSettingsCountAggregateInputType | true
    _min?: GuildSettingsMinAggregateInputType
    _max?: GuildSettingsMaxAggregateInputType
  }

  export type GuildSettingsGroupByOutputType = {
    id: string
    allowsEmailEntry: boolean
    allowsBiometricEntry: boolean
    allowsExternalEntry: boolean
    verifiedRoleId: string | null
    moderatorRoleId: string | null
    usesUowboNet: boolean
    guildsId: string
    _count: GuildSettingsCountAggregateOutputType | null
    _min: GuildSettingsMinAggregateOutputType | null
    _max: GuildSettingsMaxAggregateOutputType | null
  }

  type GetGuildSettingsGroupByPayload<T extends GuildSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], GuildSettingsGroupByOutputType[P]>
        }
      >
    >


  export type GuildSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: boolean
    moderatorRoleId?: boolean
    usesUowboNet?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSettings"]>

  export type GuildSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: boolean
    moderatorRoleId?: boolean
    usesUowboNet?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSettings"]>

  export type GuildSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: boolean
    moderatorRoleId?: boolean
    usesUowboNet?: boolean
    guildsId?: boolean
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildSettings"]>

  export type GuildSettingsSelectScalar = {
    id?: boolean
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: boolean
    moderatorRoleId?: boolean
    usesUowboNet?: boolean
    guildsId?: boolean
  }

  export type GuildSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "allowsEmailEntry" | "allowsBiometricEntry" | "allowsExternalEntry" | "verifiedRoleId" | "moderatorRoleId" | "usesUowboNet" | "guildsId", ExtArgs["result"]["guildSettings"]>
  export type GuildSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }
  export type GuildSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }
  export type GuildSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildsDefaultArgs<ExtArgs>
  }

  export type $GuildSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildSettings"
    objects: {
      Guilds: Prisma.$GuildsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      allowsEmailEntry: boolean
      allowsBiometricEntry: boolean
      allowsExternalEntry: boolean
      verifiedRoleId: string | null
      moderatorRoleId: string | null
      usesUowboNet: boolean
      guildsId: string
    }, ExtArgs["result"]["guildSettings"]>
    composites: {}
  }

  type GuildSettingsGetPayload<S extends boolean | null | undefined | GuildSettingsDefaultArgs> = $Result.GetResult<Prisma.$GuildSettingsPayload, S>

  type GuildSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildSettingsCountAggregateInputType | true
    }

  export interface GuildSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildSettings'], meta: { name: 'GuildSettings' } }
    /**
     * Find zero or one GuildSettings that matches the filter.
     * @param {GuildSettingsFindUniqueArgs} args - Arguments to find a GuildSettings
     * @example
     * // Get one GuildSettings
     * const guildSettings = await prisma.guildSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildSettingsFindUniqueArgs>(args: SelectSubset<T, GuildSettingsFindUniqueArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildSettingsFindUniqueOrThrowArgs} args - Arguments to find a GuildSettings
     * @example
     * // Get one GuildSettings
     * const guildSettings = await prisma.guildSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsFindFirstArgs} args - Arguments to find a GuildSettings
     * @example
     * // Get one GuildSettings
     * const guildSettings = await prisma.guildSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildSettingsFindFirstArgs>(args?: SelectSubset<T, GuildSettingsFindFirstArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsFindFirstOrThrowArgs} args - Arguments to find a GuildSettings
     * @example
     * // Get one GuildSettings
     * const guildSettings = await prisma.guildSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildSettings
     * const guildSettings = await prisma.guildSettings.findMany()
     * 
     * // Get first 10 GuildSettings
     * const guildSettings = await prisma.guildSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildSettingsWithIdOnly = await prisma.guildSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildSettingsFindManyArgs>(args?: SelectSubset<T, GuildSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildSettings.
     * @param {GuildSettingsCreateArgs} args - Arguments to create a GuildSettings.
     * @example
     * // Create one GuildSettings
     * const GuildSettings = await prisma.guildSettings.create({
     *   data: {
     *     // ... data to create a GuildSettings
     *   }
     * })
     * 
     */
    create<T extends GuildSettingsCreateArgs>(args: SelectSubset<T, GuildSettingsCreateArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildSettings.
     * @param {GuildSettingsCreateManyArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSettings = await prisma.guildSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildSettingsCreateManyArgs>(args?: SelectSubset<T, GuildSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildSettings and returns the data saved in the database.
     * @param {GuildSettingsCreateManyAndReturnArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSettings = await prisma.guildSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildSettings and only return the `id`
     * const guildSettingsWithIdOnly = await prisma.guildSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildSettings.
     * @param {GuildSettingsDeleteArgs} args - Arguments to delete one GuildSettings.
     * @example
     * // Delete one GuildSettings
     * const GuildSettings = await prisma.guildSettings.delete({
     *   where: {
     *     // ... filter to delete one GuildSettings
     *   }
     * })
     * 
     */
    delete<T extends GuildSettingsDeleteArgs>(args: SelectSubset<T, GuildSettingsDeleteArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildSettings.
     * @param {GuildSettingsUpdateArgs} args - Arguments to update one GuildSettings.
     * @example
     * // Update one GuildSettings
     * const guildSettings = await prisma.guildSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildSettingsUpdateArgs>(args: SelectSubset<T, GuildSettingsUpdateArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildSettings.
     * @param {GuildSettingsDeleteManyArgs} args - Arguments to filter GuildSettings to delete.
     * @example
     * // Delete a few GuildSettings
     * const { count } = await prisma.guildSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildSettingsDeleteManyArgs>(args?: SelectSubset<T, GuildSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildSettings
     * const guildSettings = await prisma.guildSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildSettingsUpdateManyArgs>(args: SelectSubset<T, GuildSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings and returns the data updated in the database.
     * @param {GuildSettingsUpdateManyAndReturnArgs} args - Arguments to update many GuildSettings.
     * @example
     * // Update many GuildSettings
     * const guildSettings = await prisma.guildSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildSettings and only return the `id`
     * const guildSettingsWithIdOnly = await prisma.guildSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildSettings.
     * @param {GuildSettingsUpsertArgs} args - Arguments to update or create a GuildSettings.
     * @example
     * // Update or create a GuildSettings
     * const guildSettings = await prisma.guildSettings.upsert({
     *   create: {
     *     // ... data to create a GuildSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildSettings we want to update
     *   }
     * })
     */
    upsert<T extends GuildSettingsUpsertArgs>(args: SelectSubset<T, GuildSettingsUpsertArgs<ExtArgs>>): Prisma__GuildSettingsClient<$Result.GetResult<Prisma.$GuildSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsCountArgs} args - Arguments to filter GuildSettings to count.
     * @example
     * // Count the number of GuildSettings
     * const count = await prisma.guildSettings.count({
     *   where: {
     *     // ... the filter for the GuildSettings we want to count
     *   }
     * })
    **/
    count<T extends GuildSettingsCountArgs>(
      args?: Subset<T, GuildSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildSettingsAggregateArgs>(args: Subset<T, GuildSettingsAggregateArgs>): Prisma.PrismaPromise<GetGuildSettingsAggregateType<T>>

    /**
     * Group by GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildSettingsGroupByArgs['orderBy'] }
        : { orderBy?: GuildSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildSettings model
   */
  readonly fields: GuildSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Guilds<T extends GuildsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildsDefaultArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildSettings model
   */
  interface GuildSettingsFieldRefs {
    readonly id: FieldRef<"GuildSettings", 'String'>
    readonly allowsEmailEntry: FieldRef<"GuildSettings", 'Boolean'>
    readonly allowsBiometricEntry: FieldRef<"GuildSettings", 'Boolean'>
    readonly allowsExternalEntry: FieldRef<"GuildSettings", 'Boolean'>
    readonly verifiedRoleId: FieldRef<"GuildSettings", 'String'>
    readonly moderatorRoleId: FieldRef<"GuildSettings", 'String'>
    readonly usesUowboNet: FieldRef<"GuildSettings", 'Boolean'>
    readonly guildsId: FieldRef<"GuildSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuildSettings findUnique
   */
  export type GuildSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where: GuildSettingsWhereUniqueInput
  }

  /**
   * GuildSettings findUniqueOrThrow
   */
  export type GuildSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where: GuildSettingsWhereUniqueInput
  }

  /**
   * GuildSettings findFirst
   */
  export type GuildSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingsOrderByWithRelationInput | GuildSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingsScalarFieldEnum | GuildSettingsScalarFieldEnum[]
  }

  /**
   * GuildSettings findFirstOrThrow
   */
  export type GuildSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingsOrderByWithRelationInput | GuildSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingsScalarFieldEnum | GuildSettingsScalarFieldEnum[]
  }

  /**
   * GuildSettings findMany
   */
  export type GuildSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingsOrderByWithRelationInput | GuildSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildSettings.
     */
    cursor?: GuildSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    distinct?: GuildSettingsScalarFieldEnum | GuildSettingsScalarFieldEnum[]
  }

  /**
   * GuildSettings create
   */
  export type GuildSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildSettings.
     */
    data: XOR<GuildSettingsCreateInput, GuildSettingsUncheckedCreateInput>
  }

  /**
   * GuildSettings createMany
   */
  export type GuildSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingsCreateManyInput | GuildSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildSettings createManyAndReturn
   */
  export type GuildSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingsCreateManyInput | GuildSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildSettings update
   */
  export type GuildSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildSettings.
     */
    data: XOR<GuildSettingsUpdateInput, GuildSettingsUncheckedUpdateInput>
    /**
     * Choose, which GuildSettings to update.
     */
    where: GuildSettingsWhereUniqueInput
  }

  /**
   * GuildSettings updateMany
   */
  export type GuildSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingsUpdateManyMutationInput, GuildSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingsWhereInput
    /**
     * Limit how many GuildSettings to update.
     */
    limit?: number
  }

  /**
   * GuildSettings updateManyAndReturn
   */
  export type GuildSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingsUpdateManyMutationInput, GuildSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingsWhereInput
    /**
     * Limit how many GuildSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildSettings upsert
   */
  export type GuildSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildSettings to update in case it exists.
     */
    where: GuildSettingsWhereUniqueInput
    /**
     * In case the GuildSettings found by the `where` argument doesn't exist, create a new GuildSettings with this data.
     */
    create: XOR<GuildSettingsCreateInput, GuildSettingsUncheckedCreateInput>
    /**
     * In case the GuildSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildSettingsUpdateInput, GuildSettingsUncheckedUpdateInput>
  }

  /**
   * GuildSettings delete
   */
  export type GuildSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
    /**
     * Filter which GuildSettings to delete.
     */
    where: GuildSettingsWhereUniqueInput
  }

  /**
   * GuildSettings deleteMany
   */
  export type GuildSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSettings to delete
     */
    where?: GuildSettingsWhereInput
    /**
     * Limit how many GuildSettings to delete.
     */
    limit?: number
  }

  /**
   * GuildSettings without action
   */
  export type GuildSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSettings
     */
    select?: GuildSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSettings
     */
    omit?: GuildSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildSettingsInclude<ExtArgs> | null
  }


  /**
   * Model GuildUser
   */

  export type AggregateGuildUser = {
    _count: GuildUserCountAggregateOutputType | null
    _min: GuildUserMinAggregateOutputType | null
    _max: GuildUserMaxAggregateOutputType | null
  }

  export type GuildUserMinAggregateOutputType = {
    id: string | null
    guildsId: string | null
    discordUserId: string | null
    isMod: boolean | null
    isOwner: boolean | null
  }

  export type GuildUserMaxAggregateOutputType = {
    id: string | null
    guildsId: string | null
    discordUserId: string | null
    isMod: boolean | null
    isOwner: boolean | null
  }

  export type GuildUserCountAggregateOutputType = {
    id: number
    guildsId: number
    discordUserId: number
    isMod: number
    isOwner: number
    _all: number
  }


  export type GuildUserMinAggregateInputType = {
    id?: true
    guildsId?: true
    discordUserId?: true
    isMod?: true
    isOwner?: true
  }

  export type GuildUserMaxAggregateInputType = {
    id?: true
    guildsId?: true
    discordUserId?: true
    isMod?: true
    isOwner?: true
  }

  export type GuildUserCountAggregateInputType = {
    id?: true
    guildsId?: true
    discordUserId?: true
    isMod?: true
    isOwner?: true
    _all?: true
  }

  export type GuildUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildUser to aggregate.
     */
    where?: GuildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildUsers to fetch.
     */
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildUsers
    **/
    _count?: true | GuildUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildUserMaxAggregateInputType
  }

  export type GetGuildUserAggregateType<T extends GuildUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildUser[P]>
      : GetScalarType<T[P], AggregateGuildUser[P]>
  }




  export type GuildUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildUserWhereInput
    orderBy?: GuildUserOrderByWithAggregationInput | GuildUserOrderByWithAggregationInput[]
    by: GuildUserScalarFieldEnum[] | GuildUserScalarFieldEnum
    having?: GuildUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildUserCountAggregateInputType | true
    _min?: GuildUserMinAggregateInputType
    _max?: GuildUserMaxAggregateInputType
  }

  export type GuildUserGroupByOutputType = {
    id: string
    guildsId: string | null
    discordUserId: string | null
    isMod: boolean
    isOwner: boolean
    _count: GuildUserCountAggregateOutputType | null
    _min: GuildUserMinAggregateOutputType | null
    _max: GuildUserMaxAggregateOutputType | null
  }

  type GetGuildUserGroupByPayload<T extends GuildUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildUserGroupByOutputType[P]>
            : GetScalarType<T[P], GuildUserGroupByOutputType[P]>
        }
      >
    >


  export type GuildUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildsId?: boolean
    discordUserId?: boolean
    isMod?: boolean
    isOwner?: boolean
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
    messages?: boolean | GuildUser$messagesArgs<ExtArgs>
    _count?: boolean | GuildUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildUser"]>

  export type GuildUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildsId?: boolean
    discordUserId?: boolean
    isMod?: boolean
    isOwner?: boolean
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
  }, ExtArgs["result"]["guildUser"]>

  export type GuildUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildsId?: boolean
    discordUserId?: boolean
    isMod?: boolean
    isOwner?: boolean
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
  }, ExtArgs["result"]["guildUser"]>

  export type GuildUserSelectScalar = {
    id?: boolean
    guildsId?: boolean
    discordUserId?: boolean
    isMod?: boolean
    isOwner?: boolean
  }

  export type GuildUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildsId" | "discordUserId" | "isMod" | "isOwner", ExtArgs["result"]["guildUser"]>
  export type GuildUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
    messages?: boolean | GuildUser$messagesArgs<ExtArgs>
    _count?: boolean | GuildUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
  }
  export type GuildUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guilds?: boolean | GuildUser$GuildsArgs<ExtArgs>
    DiscordUser?: boolean | GuildUser$DiscordUserArgs<ExtArgs>
  }

  export type $GuildUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildUser"
    objects: {
      Guilds: Prisma.$GuildsPayload<ExtArgs> | null
      DiscordUser: Prisma.$DiscordUserPayload<ExtArgs> | null
      messages: Prisma.$GuildMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildsId: string | null
      discordUserId: string | null
      isMod: boolean
      isOwner: boolean
    }, ExtArgs["result"]["guildUser"]>
    composites: {}
  }

  type GuildUserGetPayload<S extends boolean | null | undefined | GuildUserDefaultArgs> = $Result.GetResult<Prisma.$GuildUserPayload, S>

  type GuildUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildUserCountAggregateInputType | true
    }

  export interface GuildUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildUser'], meta: { name: 'GuildUser' } }
    /**
     * Find zero or one GuildUser that matches the filter.
     * @param {GuildUserFindUniqueArgs} args - Arguments to find a GuildUser
     * @example
     * // Get one GuildUser
     * const guildUser = await prisma.guildUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildUserFindUniqueArgs>(args: SelectSubset<T, GuildUserFindUniqueArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildUserFindUniqueOrThrowArgs} args - Arguments to find a GuildUser
     * @example
     * // Get one GuildUser
     * const guildUser = await prisma.guildUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserFindFirstArgs} args - Arguments to find a GuildUser
     * @example
     * // Get one GuildUser
     * const guildUser = await prisma.guildUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildUserFindFirstArgs>(args?: SelectSubset<T, GuildUserFindFirstArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserFindFirstOrThrowArgs} args - Arguments to find a GuildUser
     * @example
     * // Get one GuildUser
     * const guildUser = await prisma.guildUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildUsers
     * const guildUsers = await prisma.guildUser.findMany()
     * 
     * // Get first 10 GuildUsers
     * const guildUsers = await prisma.guildUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildUserWithIdOnly = await prisma.guildUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildUserFindManyArgs>(args?: SelectSubset<T, GuildUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildUser.
     * @param {GuildUserCreateArgs} args - Arguments to create a GuildUser.
     * @example
     * // Create one GuildUser
     * const GuildUser = await prisma.guildUser.create({
     *   data: {
     *     // ... data to create a GuildUser
     *   }
     * })
     * 
     */
    create<T extends GuildUserCreateArgs>(args: SelectSubset<T, GuildUserCreateArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildUsers.
     * @param {GuildUserCreateManyArgs} args - Arguments to create many GuildUsers.
     * @example
     * // Create many GuildUsers
     * const guildUser = await prisma.guildUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildUserCreateManyArgs>(args?: SelectSubset<T, GuildUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildUsers and returns the data saved in the database.
     * @param {GuildUserCreateManyAndReturnArgs} args - Arguments to create many GuildUsers.
     * @example
     * // Create many GuildUsers
     * const guildUser = await prisma.guildUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildUsers and only return the `id`
     * const guildUserWithIdOnly = await prisma.guildUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildUser.
     * @param {GuildUserDeleteArgs} args - Arguments to delete one GuildUser.
     * @example
     * // Delete one GuildUser
     * const GuildUser = await prisma.guildUser.delete({
     *   where: {
     *     // ... filter to delete one GuildUser
     *   }
     * })
     * 
     */
    delete<T extends GuildUserDeleteArgs>(args: SelectSubset<T, GuildUserDeleteArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildUser.
     * @param {GuildUserUpdateArgs} args - Arguments to update one GuildUser.
     * @example
     * // Update one GuildUser
     * const guildUser = await prisma.guildUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildUserUpdateArgs>(args: SelectSubset<T, GuildUserUpdateArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildUsers.
     * @param {GuildUserDeleteManyArgs} args - Arguments to filter GuildUsers to delete.
     * @example
     * // Delete a few GuildUsers
     * const { count } = await prisma.guildUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildUserDeleteManyArgs>(args?: SelectSubset<T, GuildUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildUsers
     * const guildUser = await prisma.guildUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildUserUpdateManyArgs>(args: SelectSubset<T, GuildUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildUsers and returns the data updated in the database.
     * @param {GuildUserUpdateManyAndReturnArgs} args - Arguments to update many GuildUsers.
     * @example
     * // Update many GuildUsers
     * const guildUser = await prisma.guildUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildUsers and only return the `id`
     * const guildUserWithIdOnly = await prisma.guildUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildUser.
     * @param {GuildUserUpsertArgs} args - Arguments to update or create a GuildUser.
     * @example
     * // Update or create a GuildUser
     * const guildUser = await prisma.guildUser.upsert({
     *   create: {
     *     // ... data to create a GuildUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildUser we want to update
     *   }
     * })
     */
    upsert<T extends GuildUserUpsertArgs>(args: SelectSubset<T, GuildUserUpsertArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserCountArgs} args - Arguments to filter GuildUsers to count.
     * @example
     * // Count the number of GuildUsers
     * const count = await prisma.guildUser.count({
     *   where: {
     *     // ... the filter for the GuildUsers we want to count
     *   }
     * })
    **/
    count<T extends GuildUserCountArgs>(
      args?: Subset<T, GuildUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildUserAggregateArgs>(args: Subset<T, GuildUserAggregateArgs>): Prisma.PrismaPromise<GetGuildUserAggregateType<T>>

    /**
     * Group by GuildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildUserGroupByArgs['orderBy'] }
        : { orderBy?: GuildUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildUser model
   */
  readonly fields: GuildUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Guilds<T extends GuildUser$GuildsArgs<ExtArgs> = {}>(args?: Subset<T, GuildUser$GuildsArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DiscordUser<T extends GuildUser$DiscordUserArgs<ExtArgs> = {}>(args?: Subset<T, GuildUser$DiscordUserArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends GuildUser$messagesArgs<ExtArgs> = {}>(args?: Subset<T, GuildUser$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildUser model
   */
  interface GuildUserFieldRefs {
    readonly id: FieldRef<"GuildUser", 'String'>
    readonly guildsId: FieldRef<"GuildUser", 'String'>
    readonly discordUserId: FieldRef<"GuildUser", 'String'>
    readonly isMod: FieldRef<"GuildUser", 'Boolean'>
    readonly isOwner: FieldRef<"GuildUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GuildUser findUnique
   */
  export type GuildUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter, which GuildUser to fetch.
     */
    where: GuildUserWhereUniqueInput
  }

  /**
   * GuildUser findUniqueOrThrow
   */
  export type GuildUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter, which GuildUser to fetch.
     */
    where: GuildUserWhereUniqueInput
  }

  /**
   * GuildUser findFirst
   */
  export type GuildUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter, which GuildUser to fetch.
     */
    where?: GuildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildUsers to fetch.
     */
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildUsers.
     */
    cursor?: GuildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildUsers.
     */
    distinct?: GuildUserScalarFieldEnum | GuildUserScalarFieldEnum[]
  }

  /**
   * GuildUser findFirstOrThrow
   */
  export type GuildUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter, which GuildUser to fetch.
     */
    where?: GuildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildUsers to fetch.
     */
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildUsers.
     */
    cursor?: GuildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildUsers.
     */
    distinct?: GuildUserScalarFieldEnum | GuildUserScalarFieldEnum[]
  }

  /**
   * GuildUser findMany
   */
  export type GuildUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter, which GuildUsers to fetch.
     */
    where?: GuildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildUsers to fetch.
     */
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildUsers.
     */
    cursor?: GuildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildUsers.
     */
    skip?: number
    distinct?: GuildUserScalarFieldEnum | GuildUserScalarFieldEnum[]
  }

  /**
   * GuildUser create
   */
  export type GuildUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildUser.
     */
    data?: XOR<GuildUserCreateInput, GuildUserUncheckedCreateInput>
  }

  /**
   * GuildUser createMany
   */
  export type GuildUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildUsers.
     */
    data: GuildUserCreateManyInput | GuildUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildUser createManyAndReturn
   */
  export type GuildUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * The data used to create many GuildUsers.
     */
    data: GuildUserCreateManyInput | GuildUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildUser update
   */
  export type GuildUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildUser.
     */
    data: XOR<GuildUserUpdateInput, GuildUserUncheckedUpdateInput>
    /**
     * Choose, which GuildUser to update.
     */
    where: GuildUserWhereUniqueInput
  }

  /**
   * GuildUser updateMany
   */
  export type GuildUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildUsers.
     */
    data: XOR<GuildUserUpdateManyMutationInput, GuildUserUncheckedUpdateManyInput>
    /**
     * Filter which GuildUsers to update
     */
    where?: GuildUserWhereInput
    /**
     * Limit how many GuildUsers to update.
     */
    limit?: number
  }

  /**
   * GuildUser updateManyAndReturn
   */
  export type GuildUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * The data used to update GuildUsers.
     */
    data: XOR<GuildUserUpdateManyMutationInput, GuildUserUncheckedUpdateManyInput>
    /**
     * Filter which GuildUsers to update
     */
    where?: GuildUserWhereInput
    /**
     * Limit how many GuildUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildUser upsert
   */
  export type GuildUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildUser to update in case it exists.
     */
    where: GuildUserWhereUniqueInput
    /**
     * In case the GuildUser found by the `where` argument doesn't exist, create a new GuildUser with this data.
     */
    create: XOR<GuildUserCreateInput, GuildUserUncheckedCreateInput>
    /**
     * In case the GuildUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildUserUpdateInput, GuildUserUncheckedUpdateInput>
  }

  /**
   * GuildUser delete
   */
  export type GuildUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    /**
     * Filter which GuildUser to delete.
     */
    where: GuildUserWhereUniqueInput
  }

  /**
   * GuildUser deleteMany
   */
  export type GuildUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildUsers to delete
     */
    where?: GuildUserWhereInput
    /**
     * Limit how many GuildUsers to delete.
     */
    limit?: number
  }

  /**
   * GuildUser.Guilds
   */
  export type GuildUser$GuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    where?: GuildsWhereInput
  }

  /**
   * GuildUser.DiscordUser
   */
  export type GuildUser$DiscordUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    where?: DiscordUserWhereInput
  }

  /**
   * GuildUser.messages
   */
  export type GuildUser$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    where?: GuildMessageWhereInput
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    cursor?: GuildMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildMessageScalarFieldEnum | GuildMessageScalarFieldEnum[]
  }

  /**
   * GuildUser without action
   */
  export type GuildUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
  }


  /**
   * Model GuildMessage
   */

  export type AggregateGuildMessage = {
    _count: GuildMessageCountAggregateOutputType | null
    _min: GuildMessageMinAggregateOutputType | null
    _max: GuildMessageMaxAggregateOutputType | null
  }

  export type GuildMessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    parentMessageId: string | null
    guildUserId: string | null
    attachmentUrl: string | null
    createdAt: Date | null
  }

  export type GuildMessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    parentMessageId: string | null
    guildUserId: string | null
    attachmentUrl: string | null
    createdAt: Date | null
  }

  export type GuildMessageCountAggregateOutputType = {
    id: number
    message: number
    parentMessageId: number
    guildUserId: number
    attachmentUrl: number
    createdAt: number
    _all: number
  }


  export type GuildMessageMinAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    guildUserId?: true
    attachmentUrl?: true
    createdAt?: true
  }

  export type GuildMessageMaxAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    guildUserId?: true
    attachmentUrl?: true
    createdAt?: true
  }

  export type GuildMessageCountAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    guildUserId?: true
    attachmentUrl?: true
    createdAt?: true
    _all?: true
  }

  export type GuildMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildMessage to aggregate.
     */
    where?: GuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMessages to fetch.
     */
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildMessages
    **/
    _count?: true | GuildMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildMessageMaxAggregateInputType
  }

  export type GetGuildMessageAggregateType<T extends GuildMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildMessage[P]>
      : GetScalarType<T[P], AggregateGuildMessage[P]>
  }




  export type GuildMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildMessageWhereInput
    orderBy?: GuildMessageOrderByWithAggregationInput | GuildMessageOrderByWithAggregationInput[]
    by: GuildMessageScalarFieldEnum[] | GuildMessageScalarFieldEnum
    having?: GuildMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildMessageCountAggregateInputType | true
    _min?: GuildMessageMinAggregateInputType
    _max?: GuildMessageMaxAggregateInputType
  }

  export type GuildMessageGroupByOutputType = {
    id: string
    message: string | null
    parentMessageId: string | null
    guildUserId: string | null
    attachmentUrl: string | null
    createdAt: Date
    _count: GuildMessageCountAggregateOutputType | null
    _min: GuildMessageMinAggregateOutputType | null
    _max: GuildMessageMaxAggregateOutputType | null
  }

  type GetGuildMessageGroupByPayload<T extends GuildMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildMessageGroupByOutputType[P]>
            : GetScalarType<T[P], GuildMessageGroupByOutputType[P]>
        }
      >
    >


  export type GuildMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    guildUserId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    mentions?: boolean | GuildMessage$mentionsArgs<ExtArgs>
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
    _count?: boolean | GuildMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildMessage"]>

  export type GuildMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    guildUserId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
  }, ExtArgs["result"]["guildMessage"]>

  export type GuildMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    guildUserId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
  }, ExtArgs["result"]["guildMessage"]>

  export type GuildMessageSelectScalar = {
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    guildUserId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
  }

  export type GuildMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "parentMessageId" | "guildUserId" | "attachmentUrl" | "createdAt", ExtArgs["result"]["guildMessage"]>
  export type GuildMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentions?: boolean | GuildMessage$mentionsArgs<ExtArgs>
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
    _count?: boolean | GuildMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
  }
  export type GuildMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentMessage?: boolean | GuildMessage$parentMessageArgs<ExtArgs>
    GuildUser?: boolean | GuildMessage$GuildUserArgs<ExtArgs>
  }

  export type $GuildMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildMessage"
    objects: {
      mentions: Prisma.$GuildMessagePayload<ExtArgs>[]
      parentMessage: Prisma.$GuildMessagePayload<ExtArgs> | null
      GuildUser: Prisma.$GuildUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string | null
      parentMessageId: string | null
      guildUserId: string | null
      attachmentUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["guildMessage"]>
    composites: {}
  }

  type GuildMessageGetPayload<S extends boolean | null | undefined | GuildMessageDefaultArgs> = $Result.GetResult<Prisma.$GuildMessagePayload, S>

  type GuildMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildMessageCountAggregateInputType | true
    }

  export interface GuildMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildMessage'], meta: { name: 'GuildMessage' } }
    /**
     * Find zero or one GuildMessage that matches the filter.
     * @param {GuildMessageFindUniqueArgs} args - Arguments to find a GuildMessage
     * @example
     * // Get one GuildMessage
     * const guildMessage = await prisma.guildMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildMessageFindUniqueArgs>(args: SelectSubset<T, GuildMessageFindUniqueArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildMessageFindUniqueOrThrowArgs} args - Arguments to find a GuildMessage
     * @example
     * // Get one GuildMessage
     * const guildMessage = await prisma.guildMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageFindFirstArgs} args - Arguments to find a GuildMessage
     * @example
     * // Get one GuildMessage
     * const guildMessage = await prisma.guildMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildMessageFindFirstArgs>(args?: SelectSubset<T, GuildMessageFindFirstArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageFindFirstOrThrowArgs} args - Arguments to find a GuildMessage
     * @example
     * // Get one GuildMessage
     * const guildMessage = await prisma.guildMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildMessages
     * const guildMessages = await prisma.guildMessage.findMany()
     * 
     * // Get first 10 GuildMessages
     * const guildMessages = await prisma.guildMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildMessageWithIdOnly = await prisma.guildMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildMessageFindManyArgs>(args?: SelectSubset<T, GuildMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildMessage.
     * @param {GuildMessageCreateArgs} args - Arguments to create a GuildMessage.
     * @example
     * // Create one GuildMessage
     * const GuildMessage = await prisma.guildMessage.create({
     *   data: {
     *     // ... data to create a GuildMessage
     *   }
     * })
     * 
     */
    create<T extends GuildMessageCreateArgs>(args: SelectSubset<T, GuildMessageCreateArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildMessages.
     * @param {GuildMessageCreateManyArgs} args - Arguments to create many GuildMessages.
     * @example
     * // Create many GuildMessages
     * const guildMessage = await prisma.guildMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildMessageCreateManyArgs>(args?: SelectSubset<T, GuildMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildMessages and returns the data saved in the database.
     * @param {GuildMessageCreateManyAndReturnArgs} args - Arguments to create many GuildMessages.
     * @example
     * // Create many GuildMessages
     * const guildMessage = await prisma.guildMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildMessages and only return the `id`
     * const guildMessageWithIdOnly = await prisma.guildMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildMessage.
     * @param {GuildMessageDeleteArgs} args - Arguments to delete one GuildMessage.
     * @example
     * // Delete one GuildMessage
     * const GuildMessage = await prisma.guildMessage.delete({
     *   where: {
     *     // ... filter to delete one GuildMessage
     *   }
     * })
     * 
     */
    delete<T extends GuildMessageDeleteArgs>(args: SelectSubset<T, GuildMessageDeleteArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildMessage.
     * @param {GuildMessageUpdateArgs} args - Arguments to update one GuildMessage.
     * @example
     * // Update one GuildMessage
     * const guildMessage = await prisma.guildMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildMessageUpdateArgs>(args: SelectSubset<T, GuildMessageUpdateArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildMessages.
     * @param {GuildMessageDeleteManyArgs} args - Arguments to filter GuildMessages to delete.
     * @example
     * // Delete a few GuildMessages
     * const { count } = await prisma.guildMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildMessageDeleteManyArgs>(args?: SelectSubset<T, GuildMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildMessages
     * const guildMessage = await prisma.guildMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildMessageUpdateManyArgs>(args: SelectSubset<T, GuildMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildMessages and returns the data updated in the database.
     * @param {GuildMessageUpdateManyAndReturnArgs} args - Arguments to update many GuildMessages.
     * @example
     * // Update many GuildMessages
     * const guildMessage = await prisma.guildMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildMessages and only return the `id`
     * const guildMessageWithIdOnly = await prisma.guildMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildMessage.
     * @param {GuildMessageUpsertArgs} args - Arguments to update or create a GuildMessage.
     * @example
     * // Update or create a GuildMessage
     * const guildMessage = await prisma.guildMessage.upsert({
     *   create: {
     *     // ... data to create a GuildMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildMessage we want to update
     *   }
     * })
     */
    upsert<T extends GuildMessageUpsertArgs>(args: SelectSubset<T, GuildMessageUpsertArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageCountArgs} args - Arguments to filter GuildMessages to count.
     * @example
     * // Count the number of GuildMessages
     * const count = await prisma.guildMessage.count({
     *   where: {
     *     // ... the filter for the GuildMessages we want to count
     *   }
     * })
    **/
    count<T extends GuildMessageCountArgs>(
      args?: Subset<T, GuildMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildMessageAggregateArgs>(args: Subset<T, GuildMessageAggregateArgs>): Prisma.PrismaPromise<GetGuildMessageAggregateType<T>>

    /**
     * Group by GuildMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildMessageGroupByArgs['orderBy'] }
        : { orderBy?: GuildMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildMessage model
   */
  readonly fields: GuildMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentions<T extends GuildMessage$mentionsArgs<ExtArgs> = {}>(args?: Subset<T, GuildMessage$mentionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentMessage<T extends GuildMessage$parentMessageArgs<ExtArgs> = {}>(args?: Subset<T, GuildMessage$parentMessageArgs<ExtArgs>>): Prisma__GuildMessageClient<$Result.GetResult<Prisma.$GuildMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GuildUser<T extends GuildMessage$GuildUserArgs<ExtArgs> = {}>(args?: Subset<T, GuildMessage$GuildUserArgs<ExtArgs>>): Prisma__GuildUserClient<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildMessage model
   */
  interface GuildMessageFieldRefs {
    readonly id: FieldRef<"GuildMessage", 'String'>
    readonly message: FieldRef<"GuildMessage", 'String'>
    readonly parentMessageId: FieldRef<"GuildMessage", 'String'>
    readonly guildUserId: FieldRef<"GuildMessage", 'String'>
    readonly attachmentUrl: FieldRef<"GuildMessage", 'String'>
    readonly createdAt: FieldRef<"GuildMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuildMessage findUnique
   */
  export type GuildMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which GuildMessage to fetch.
     */
    where: GuildMessageWhereUniqueInput
  }

  /**
   * GuildMessage findUniqueOrThrow
   */
  export type GuildMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which GuildMessage to fetch.
     */
    where: GuildMessageWhereUniqueInput
  }

  /**
   * GuildMessage findFirst
   */
  export type GuildMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which GuildMessage to fetch.
     */
    where?: GuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMessages to fetch.
     */
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildMessages.
     */
    cursor?: GuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildMessages.
     */
    distinct?: GuildMessageScalarFieldEnum | GuildMessageScalarFieldEnum[]
  }

  /**
   * GuildMessage findFirstOrThrow
   */
  export type GuildMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which GuildMessage to fetch.
     */
    where?: GuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMessages to fetch.
     */
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildMessages.
     */
    cursor?: GuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildMessages.
     */
    distinct?: GuildMessageScalarFieldEnum | GuildMessageScalarFieldEnum[]
  }

  /**
   * GuildMessage findMany
   */
  export type GuildMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which GuildMessages to fetch.
     */
    where?: GuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildMessages to fetch.
     */
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildMessages.
     */
    cursor?: GuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildMessages.
     */
    skip?: number
    distinct?: GuildMessageScalarFieldEnum | GuildMessageScalarFieldEnum[]
  }

  /**
   * GuildMessage create
   */
  export type GuildMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildMessage.
     */
    data: XOR<GuildMessageCreateInput, GuildMessageUncheckedCreateInput>
  }

  /**
   * GuildMessage createMany
   */
  export type GuildMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildMessages.
     */
    data: GuildMessageCreateManyInput | GuildMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildMessage createManyAndReturn
   */
  export type GuildMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * The data used to create many GuildMessages.
     */
    data: GuildMessageCreateManyInput | GuildMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildMessage update
   */
  export type GuildMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildMessage.
     */
    data: XOR<GuildMessageUpdateInput, GuildMessageUncheckedUpdateInput>
    /**
     * Choose, which GuildMessage to update.
     */
    where: GuildMessageWhereUniqueInput
  }

  /**
   * GuildMessage updateMany
   */
  export type GuildMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildMessages.
     */
    data: XOR<GuildMessageUpdateManyMutationInput, GuildMessageUncheckedUpdateManyInput>
    /**
     * Filter which GuildMessages to update
     */
    where?: GuildMessageWhereInput
    /**
     * Limit how many GuildMessages to update.
     */
    limit?: number
  }

  /**
   * GuildMessage updateManyAndReturn
   */
  export type GuildMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * The data used to update GuildMessages.
     */
    data: XOR<GuildMessageUpdateManyMutationInput, GuildMessageUncheckedUpdateManyInput>
    /**
     * Filter which GuildMessages to update
     */
    where?: GuildMessageWhereInput
    /**
     * Limit how many GuildMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuildMessage upsert
   */
  export type GuildMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildMessage to update in case it exists.
     */
    where: GuildMessageWhereUniqueInput
    /**
     * In case the GuildMessage found by the `where` argument doesn't exist, create a new GuildMessage with this data.
     */
    create: XOR<GuildMessageCreateInput, GuildMessageUncheckedCreateInput>
    /**
     * In case the GuildMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildMessageUpdateInput, GuildMessageUncheckedUpdateInput>
  }

  /**
   * GuildMessage delete
   */
  export type GuildMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    /**
     * Filter which GuildMessage to delete.
     */
    where: GuildMessageWhereUniqueInput
  }

  /**
   * GuildMessage deleteMany
   */
  export type GuildMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildMessages to delete
     */
    where?: GuildMessageWhereInput
    /**
     * Limit how many GuildMessages to delete.
     */
    limit?: number
  }

  /**
   * GuildMessage.mentions
   */
  export type GuildMessage$mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    where?: GuildMessageWhereInput
    orderBy?: GuildMessageOrderByWithRelationInput | GuildMessageOrderByWithRelationInput[]
    cursor?: GuildMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildMessageScalarFieldEnum | GuildMessageScalarFieldEnum[]
  }

  /**
   * GuildMessage.parentMessage
   */
  export type GuildMessage$parentMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
    where?: GuildMessageWhereInput
  }

  /**
   * GuildMessage.GuildUser
   */
  export type GuildMessage$GuildUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    where?: GuildUserWhereInput
  }

  /**
   * GuildMessage without action
   */
  export type GuildMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildMessage
     */
    select?: GuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildMessage
     */
    omit?: GuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildMessageInclude<ExtArgs> | null
  }


  /**
   * Model DiscordUser
   */

  export type AggregateDiscordUser = {
    _count: DiscordUserCountAggregateOutputType | null
    _min: DiscordUserMinAggregateOutputType | null
    _max: DiscordUserMaxAggregateOutputType | null
  }

  export type DiscordUserMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    avatar: string | null
    username: string | null
    createdAt: Date | null
  }

  export type DiscordUserMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    avatar: string | null
    username: string | null
    createdAt: Date | null
  }

  export type DiscordUserCountAggregateOutputType = {
    id: number
    discordId: number
    avatar: number
    username: number
    createdAt: number
    _all: number
  }


  export type DiscordUserMinAggregateInputType = {
    id?: true
    discordId?: true
    avatar?: true
    username?: true
    createdAt?: true
  }

  export type DiscordUserMaxAggregateInputType = {
    id?: true
    discordId?: true
    avatar?: true
    username?: true
    createdAt?: true
  }

  export type DiscordUserCountAggregateInputType = {
    id?: true
    discordId?: true
    avatar?: true
    username?: true
    createdAt?: true
    _all?: true
  }

  export type DiscordUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordUser to aggregate.
     */
    where?: DiscordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUsers to fetch.
     */
    orderBy?: DiscordUserOrderByWithRelationInput | DiscordUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordUsers
    **/
    _count?: true | DiscordUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordUserMaxAggregateInputType
  }

  export type GetDiscordUserAggregateType<T extends DiscordUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordUser[P]>
      : GetScalarType<T[P], AggregateDiscordUser[P]>
  }




  export type DiscordUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUserWhereInput
    orderBy?: DiscordUserOrderByWithAggregationInput | DiscordUserOrderByWithAggregationInput[]
    by: DiscordUserScalarFieldEnum[] | DiscordUserScalarFieldEnum
    having?: DiscordUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordUserCountAggregateInputType | true
    _min?: DiscordUserMinAggregateInputType
    _max?: DiscordUserMaxAggregateInputType
  }

  export type DiscordUserGroupByOutputType = {
    id: string
    discordId: string
    avatar: string | null
    username: string
    createdAt: Date
    _count: DiscordUserCountAggregateOutputType | null
    _min: DiscordUserMinAggregateOutputType | null
    _max: DiscordUserMaxAggregateOutputType | null
  }

  type GetDiscordUserGroupByPayload<T extends DiscordUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordUserGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordUserGroupByOutputType[P]>
        }
      >
    >


  export type DiscordUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    avatar?: boolean
    username?: boolean
    createdAt?: boolean
    tokens?: boolean | DiscordUser$tokensArgs<ExtArgs>
    guilds?: boolean | DiscordUser$guildsArgs<ExtArgs>
    link?: boolean | DiscordUser$linkArgs<ExtArgs>
    _count?: boolean | DiscordUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordUser"]>

  export type DiscordUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    avatar?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discordUser"]>

  export type DiscordUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    avatar?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["discordUser"]>

  export type DiscordUserSelectScalar = {
    id?: boolean
    discordId?: boolean
    avatar?: boolean
    username?: boolean
    createdAt?: boolean
  }

  export type DiscordUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "avatar" | "username" | "createdAt", ExtArgs["result"]["discordUser"]>
  export type DiscordUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | DiscordUser$tokensArgs<ExtArgs>
    guilds?: boolean | DiscordUser$guildsArgs<ExtArgs>
    link?: boolean | DiscordUser$linkArgs<ExtArgs>
    _count?: boolean | DiscordUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiscordUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiscordUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordUser"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      guilds: Prisma.$GuildUserPayload<ExtArgs>[]
      link: Prisma.$DiscordUniversityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      avatar: string | null
      username: string
      createdAt: Date
    }, ExtArgs["result"]["discordUser"]>
    composites: {}
  }

  type DiscordUserGetPayload<S extends boolean | null | undefined | DiscordUserDefaultArgs> = $Result.GetResult<Prisma.$DiscordUserPayload, S>

  type DiscordUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordUserCountAggregateInputType | true
    }

  export interface DiscordUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordUser'], meta: { name: 'DiscordUser' } }
    /**
     * Find zero or one DiscordUser that matches the filter.
     * @param {DiscordUserFindUniqueArgs} args - Arguments to find a DiscordUser
     * @example
     * // Get one DiscordUser
     * const discordUser = await prisma.discordUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordUserFindUniqueArgs>(args: SelectSubset<T, DiscordUserFindUniqueArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordUserFindUniqueOrThrowArgs} args - Arguments to find a DiscordUser
     * @example
     * // Get one DiscordUser
     * const discordUser = await prisma.discordUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordUserFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserFindFirstArgs} args - Arguments to find a DiscordUser
     * @example
     * // Get one DiscordUser
     * const discordUser = await prisma.discordUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordUserFindFirstArgs>(args?: SelectSubset<T, DiscordUserFindFirstArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserFindFirstOrThrowArgs} args - Arguments to find a DiscordUser
     * @example
     * // Get one DiscordUser
     * const discordUser = await prisma.discordUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordUserFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordUsers
     * const discordUsers = await prisma.discordUser.findMany()
     * 
     * // Get first 10 DiscordUsers
     * const discordUsers = await prisma.discordUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordUserWithIdOnly = await prisma.discordUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordUserFindManyArgs>(args?: SelectSubset<T, DiscordUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordUser.
     * @param {DiscordUserCreateArgs} args - Arguments to create a DiscordUser.
     * @example
     * // Create one DiscordUser
     * const DiscordUser = await prisma.discordUser.create({
     *   data: {
     *     // ... data to create a DiscordUser
     *   }
     * })
     * 
     */
    create<T extends DiscordUserCreateArgs>(args: SelectSubset<T, DiscordUserCreateArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordUsers.
     * @param {DiscordUserCreateManyArgs} args - Arguments to create many DiscordUsers.
     * @example
     * // Create many DiscordUsers
     * const discordUser = await prisma.discordUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordUserCreateManyArgs>(args?: SelectSubset<T, DiscordUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordUsers and returns the data saved in the database.
     * @param {DiscordUserCreateManyAndReturnArgs} args - Arguments to create many DiscordUsers.
     * @example
     * // Create many DiscordUsers
     * const discordUser = await prisma.discordUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordUsers and only return the `id`
     * const discordUserWithIdOnly = await prisma.discordUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordUserCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordUser.
     * @param {DiscordUserDeleteArgs} args - Arguments to delete one DiscordUser.
     * @example
     * // Delete one DiscordUser
     * const DiscordUser = await prisma.discordUser.delete({
     *   where: {
     *     // ... filter to delete one DiscordUser
     *   }
     * })
     * 
     */
    delete<T extends DiscordUserDeleteArgs>(args: SelectSubset<T, DiscordUserDeleteArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordUser.
     * @param {DiscordUserUpdateArgs} args - Arguments to update one DiscordUser.
     * @example
     * // Update one DiscordUser
     * const discordUser = await prisma.discordUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordUserUpdateArgs>(args: SelectSubset<T, DiscordUserUpdateArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordUsers.
     * @param {DiscordUserDeleteManyArgs} args - Arguments to filter DiscordUsers to delete.
     * @example
     * // Delete a few DiscordUsers
     * const { count } = await prisma.discordUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordUserDeleteManyArgs>(args?: SelectSubset<T, DiscordUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordUsers
     * const discordUser = await prisma.discordUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordUserUpdateManyArgs>(args: SelectSubset<T, DiscordUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordUsers and returns the data updated in the database.
     * @param {DiscordUserUpdateManyAndReturnArgs} args - Arguments to update many DiscordUsers.
     * @example
     * // Update many DiscordUsers
     * const discordUser = await prisma.discordUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordUsers and only return the `id`
     * const discordUserWithIdOnly = await prisma.discordUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscordUserUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordUser.
     * @param {DiscordUserUpsertArgs} args - Arguments to update or create a DiscordUser.
     * @example
     * // Update or create a DiscordUser
     * const discordUser = await prisma.discordUser.upsert({
     *   create: {
     *     // ... data to create a DiscordUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordUser we want to update
     *   }
     * })
     */
    upsert<T extends DiscordUserUpsertArgs>(args: SelectSubset<T, DiscordUserUpsertArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserCountArgs} args - Arguments to filter DiscordUsers to count.
     * @example
     * // Count the number of DiscordUsers
     * const count = await prisma.discordUser.count({
     *   where: {
     *     // ... the filter for the DiscordUsers we want to count
     *   }
     * })
    **/
    count<T extends DiscordUserCountArgs>(
      args?: Subset<T, DiscordUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscordUserAggregateArgs>(args: Subset<T, DiscordUserAggregateArgs>): Prisma.PrismaPromise<GetDiscordUserAggregateType<T>>

    /**
     * Group by DiscordUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscordUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordUserGroupByArgs['orderBy'] }
        : { orderBy?: DiscordUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscordUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordUser model
   */
  readonly fields: DiscordUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends DiscordUser$tokensArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUser$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guilds<T extends DiscordUser$guildsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUser$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    link<T extends DiscordUser$linkArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUser$linkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscordUser model
   */
  interface DiscordUserFieldRefs {
    readonly id: FieldRef<"DiscordUser", 'String'>
    readonly discordId: FieldRef<"DiscordUser", 'String'>
    readonly avatar: FieldRef<"DiscordUser", 'String'>
    readonly username: FieldRef<"DiscordUser", 'String'>
    readonly createdAt: FieldRef<"DiscordUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscordUser findUnique
   */
  export type DiscordUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUser to fetch.
     */
    where: DiscordUserWhereUniqueInput
  }

  /**
   * DiscordUser findUniqueOrThrow
   */
  export type DiscordUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUser to fetch.
     */
    where: DiscordUserWhereUniqueInput
  }

  /**
   * DiscordUser findFirst
   */
  export type DiscordUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUser to fetch.
     */
    where?: DiscordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUsers to fetch.
     */
    orderBy?: DiscordUserOrderByWithRelationInput | DiscordUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordUsers.
     */
    cursor?: DiscordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordUsers.
     */
    distinct?: DiscordUserScalarFieldEnum | DiscordUserScalarFieldEnum[]
  }

  /**
   * DiscordUser findFirstOrThrow
   */
  export type DiscordUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUser to fetch.
     */
    where?: DiscordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUsers to fetch.
     */
    orderBy?: DiscordUserOrderByWithRelationInput | DiscordUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordUsers.
     */
    cursor?: DiscordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordUsers.
     */
    distinct?: DiscordUserScalarFieldEnum | DiscordUserScalarFieldEnum[]
  }

  /**
   * DiscordUser findMany
   */
  export type DiscordUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUsers to fetch.
     */
    where?: DiscordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUsers to fetch.
     */
    orderBy?: DiscordUserOrderByWithRelationInput | DiscordUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordUsers.
     */
    cursor?: DiscordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUsers.
     */
    skip?: number
    distinct?: DiscordUserScalarFieldEnum | DiscordUserScalarFieldEnum[]
  }

  /**
   * DiscordUser create
   */
  export type DiscordUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordUser.
     */
    data: XOR<DiscordUserCreateInput, DiscordUserUncheckedCreateInput>
  }

  /**
   * DiscordUser createMany
   */
  export type DiscordUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordUsers.
     */
    data: DiscordUserCreateManyInput | DiscordUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordUser createManyAndReturn
   */
  export type DiscordUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordUsers.
     */
    data: DiscordUserCreateManyInput | DiscordUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordUser update
   */
  export type DiscordUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordUser.
     */
    data: XOR<DiscordUserUpdateInput, DiscordUserUncheckedUpdateInput>
    /**
     * Choose, which DiscordUser to update.
     */
    where: DiscordUserWhereUniqueInput
  }

  /**
   * DiscordUser updateMany
   */
  export type DiscordUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordUsers.
     */
    data: XOR<DiscordUserUpdateManyMutationInput, DiscordUserUncheckedUpdateManyInput>
    /**
     * Filter which DiscordUsers to update
     */
    where?: DiscordUserWhereInput
    /**
     * Limit how many DiscordUsers to update.
     */
    limit?: number
  }

  /**
   * DiscordUser updateManyAndReturn
   */
  export type DiscordUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * The data used to update DiscordUsers.
     */
    data: XOR<DiscordUserUpdateManyMutationInput, DiscordUserUncheckedUpdateManyInput>
    /**
     * Filter which DiscordUsers to update
     */
    where?: DiscordUserWhereInput
    /**
     * Limit how many DiscordUsers to update.
     */
    limit?: number
  }

  /**
   * DiscordUser upsert
   */
  export type DiscordUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordUser to update in case it exists.
     */
    where: DiscordUserWhereUniqueInput
    /**
     * In case the DiscordUser found by the `where` argument doesn't exist, create a new DiscordUser with this data.
     */
    create: XOR<DiscordUserCreateInput, DiscordUserUncheckedCreateInput>
    /**
     * In case the DiscordUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordUserUpdateInput, DiscordUserUncheckedUpdateInput>
  }

  /**
   * DiscordUser delete
   */
  export type DiscordUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    /**
     * Filter which DiscordUser to delete.
     */
    where: DiscordUserWhereUniqueInput
  }

  /**
   * DiscordUser deleteMany
   */
  export type DiscordUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordUsers to delete
     */
    where?: DiscordUserWhereInput
    /**
     * Limit how many DiscordUsers to delete.
     */
    limit?: number
  }

  /**
   * DiscordUser.tokens
   */
  export type DiscordUser$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * DiscordUser.guilds
   */
  export type DiscordUser$guildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildUser
     */
    select?: GuildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildUser
     */
    omit?: GuildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildUserInclude<ExtArgs> | null
    where?: GuildUserWhereInput
    orderBy?: GuildUserOrderByWithRelationInput | GuildUserOrderByWithRelationInput[]
    cursor?: GuildUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildUserScalarFieldEnum | GuildUserScalarFieldEnum[]
  }

  /**
   * DiscordUser.link
   */
  export type DiscordUser$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    cursor?: DiscordUniversityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * DiscordUser without action
   */
  export type DiscordUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
    discordUserId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
    discordUserId: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    discordUserId: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    discordUserId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    discordUserId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    discordUserId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    createdAt: Date
    discordUserId: string | null
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    discordUserId?: boolean
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    discordUserId?: boolean
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    discordUserId?: boolean
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
    discordUserId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt" | "discordUserId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | Token$DiscordUserArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      DiscordUser: Prisma.$DiscordUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      createdAt: Date
      discordUserId: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiscordUser<T extends Token$DiscordUserArgs<ExtArgs> = {}>(args?: Subset<T, Token$DiscordUserArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly discordUserId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.DiscordUser
   */
  export type Token$DiscordUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    where?: DiscordUserWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model DiscordUniversity
   */

  export type AggregateDiscordUniversity = {
    _count: DiscordUniversityCountAggregateOutputType | null
    _min: DiscordUniversityMinAggregateOutputType | null
    _max: DiscordUniversityMaxAggregateOutputType | null
  }

  export type DiscordUniversityMinAggregateOutputType = {
    id: string | null
    discordUserId: string | null
    emailVerificationId: string | null
    emailCode: string | null
    biometricEntryId: string | null
    fullName: string | null
    isExternal: boolean | null
    helperId: string | null
    helperCode: string | null
    studentId: string | null
    isVerified: boolean | null
  }

  export type DiscordUniversityMaxAggregateOutputType = {
    id: string | null
    discordUserId: string | null
    emailVerificationId: string | null
    emailCode: string | null
    biometricEntryId: string | null
    fullName: string | null
    isExternal: boolean | null
    helperId: string | null
    helperCode: string | null
    studentId: string | null
    isVerified: boolean | null
  }

  export type DiscordUniversityCountAggregateOutputType = {
    id: number
    discordUserId: number
    emailVerificationId: number
    emailCode: number
    biometricEntryId: number
    fullName: number
    isExternal: number
    helperId: number
    helperCode: number
    studentId: number
    isVerified: number
    _all: number
  }


  export type DiscordUniversityMinAggregateInputType = {
    id?: true
    discordUserId?: true
    emailVerificationId?: true
    emailCode?: true
    biometricEntryId?: true
    fullName?: true
    isExternal?: true
    helperId?: true
    helperCode?: true
    studentId?: true
    isVerified?: true
  }

  export type DiscordUniversityMaxAggregateInputType = {
    id?: true
    discordUserId?: true
    emailVerificationId?: true
    emailCode?: true
    biometricEntryId?: true
    fullName?: true
    isExternal?: true
    helperId?: true
    helperCode?: true
    studentId?: true
    isVerified?: true
  }

  export type DiscordUniversityCountAggregateInputType = {
    id?: true
    discordUserId?: true
    emailVerificationId?: true
    emailCode?: true
    biometricEntryId?: true
    fullName?: true
    isExternal?: true
    helperId?: true
    helperCode?: true
    studentId?: true
    isVerified?: true
    _all?: true
  }

  export type DiscordUniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordUniversity to aggregate.
     */
    where?: DiscordUniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUniversities to fetch.
     */
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordUniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUniversities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUniversities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordUniversities
    **/
    _count?: true | DiscordUniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordUniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordUniversityMaxAggregateInputType
  }

  export type GetDiscordUniversityAggregateType<T extends DiscordUniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordUniversity[P]>
      : GetScalarType<T[P], AggregateDiscordUniversity[P]>
  }




  export type DiscordUniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordUniversityWhereInput
    orderBy?: DiscordUniversityOrderByWithAggregationInput | DiscordUniversityOrderByWithAggregationInput[]
    by: DiscordUniversityScalarFieldEnum[] | DiscordUniversityScalarFieldEnum
    having?: DiscordUniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordUniversityCountAggregateInputType | true
    _min?: DiscordUniversityMinAggregateInputType
    _max?: DiscordUniversityMaxAggregateInputType
  }

  export type DiscordUniversityGroupByOutputType = {
    id: string
    discordUserId: string | null
    emailVerificationId: string | null
    emailCode: string | null
    biometricEntryId: string | null
    fullName: string | null
    isExternal: boolean
    helperId: string | null
    helperCode: string | null
    studentId: string | null
    isVerified: boolean
    _count: DiscordUniversityCountAggregateOutputType | null
    _min: DiscordUniversityMinAggregateOutputType | null
    _max: DiscordUniversityMaxAggregateOutputType | null
  }

  type GetDiscordUniversityGroupByPayload<T extends DiscordUniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordUniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordUniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordUniversityGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordUniversityGroupByOutputType[P]>
        }
      >
    >


  export type DiscordUniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUserId?: boolean
    emailVerificationId?: boolean
    emailCode?: boolean
    biometricEntryId?: boolean
    fullName?: boolean
    isExternal?: boolean
    helperId?: boolean
    helperCode?: boolean
    studentId?: boolean
    isVerified?: boolean
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    externalsHelped?: boolean | DiscordUniversity$externalsHelpedArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
    authorityHits?: boolean | DiscordUniversity$authorityHitsArgs<ExtArgs>
    Guilds?: boolean | DiscordUniversity$GuildsArgs<ExtArgs>
    _count?: boolean | DiscordUniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordUniversity"]>

  export type DiscordUniversitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUserId?: boolean
    emailVerificationId?: boolean
    emailCode?: boolean
    biometricEntryId?: boolean
    fullName?: boolean
    isExternal?: boolean
    helperId?: boolean
    helperCode?: boolean
    studentId?: boolean
    isVerified?: boolean
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
  }, ExtArgs["result"]["discordUniversity"]>

  export type DiscordUniversitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUserId?: boolean
    emailVerificationId?: boolean
    emailCode?: boolean
    biometricEntryId?: boolean
    fullName?: boolean
    isExternal?: boolean
    helperId?: boolean
    helperCode?: boolean
    studentId?: boolean
    isVerified?: boolean
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
  }, ExtArgs["result"]["discordUniversity"]>

  export type DiscordUniversitySelectScalar = {
    id?: boolean
    discordUserId?: boolean
    emailVerificationId?: boolean
    emailCode?: boolean
    biometricEntryId?: boolean
    fullName?: boolean
    isExternal?: boolean
    helperId?: boolean
    helperCode?: boolean
    studentId?: boolean
    isVerified?: boolean
  }

  export type DiscordUniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordUserId" | "emailVerificationId" | "emailCode" | "biometricEntryId" | "fullName" | "isExternal" | "helperId" | "helperCode" | "studentId" | "isVerified", ExtArgs["result"]["discordUniversity"]>
  export type DiscordUniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    externalsHelped?: boolean | DiscordUniversity$externalsHelpedArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
    authorityHits?: boolean | DiscordUniversity$authorityHitsArgs<ExtArgs>
    Guilds?: boolean | DiscordUniversity$GuildsArgs<ExtArgs>
    _count?: boolean | DiscordUniversityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordUniversityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
  }
  export type DiscordUniversityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUser?: boolean | DiscordUniversity$DiscordUserArgs<ExtArgs>
    emailVerification?: boolean | DiscordUniversity$emailVerificationArgs<ExtArgs>
    BiometricEntry?: boolean | DiscordUniversity$BiometricEntryArgs<ExtArgs>
    helper?: boolean | DiscordUniversity$helperArgs<ExtArgs>
  }

  export type $DiscordUniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordUniversity"
    objects: {
      DiscordUser: Prisma.$DiscordUserPayload<ExtArgs> | null
      emailVerification: Prisma.$EmailVerificationPayload<ExtArgs> | null
      BiometricEntry: Prisma.$BiometricEntryPayload<ExtArgs> | null
      externalsHelped: Prisma.$DiscordUniversityPayload<ExtArgs>[]
      helper: Prisma.$DiscordUniversityPayload<ExtArgs> | null
      authorityHits: Prisma.$AuthorityHitPayload<ExtArgs>[]
      Guilds: Prisma.$GuildsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordUserId: string | null
      emailVerificationId: string | null
      emailCode: string | null
      biometricEntryId: string | null
      fullName: string | null
      isExternal: boolean
      helperId: string | null
      helperCode: string | null
      studentId: string | null
      isVerified: boolean
    }, ExtArgs["result"]["discordUniversity"]>
    composites: {}
  }

  type DiscordUniversityGetPayload<S extends boolean | null | undefined | DiscordUniversityDefaultArgs> = $Result.GetResult<Prisma.$DiscordUniversityPayload, S>

  type DiscordUniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordUniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordUniversityCountAggregateInputType | true
    }

  export interface DiscordUniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordUniversity'], meta: { name: 'DiscordUniversity' } }
    /**
     * Find zero or one DiscordUniversity that matches the filter.
     * @param {DiscordUniversityFindUniqueArgs} args - Arguments to find a DiscordUniversity
     * @example
     * // Get one DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordUniversityFindUniqueArgs>(args: SelectSubset<T, DiscordUniversityFindUniqueArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordUniversity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordUniversityFindUniqueOrThrowArgs} args - Arguments to find a DiscordUniversity
     * @example
     * // Get one DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordUniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordUniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordUniversity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityFindFirstArgs} args - Arguments to find a DiscordUniversity
     * @example
     * // Get one DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordUniversityFindFirstArgs>(args?: SelectSubset<T, DiscordUniversityFindFirstArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordUniversity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityFindFirstOrThrowArgs} args - Arguments to find a DiscordUniversity
     * @example
     * // Get one DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordUniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordUniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordUniversities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordUniversities
     * const discordUniversities = await prisma.discordUniversity.findMany()
     * 
     * // Get first 10 DiscordUniversities
     * const discordUniversities = await prisma.discordUniversity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordUniversityWithIdOnly = await prisma.discordUniversity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordUniversityFindManyArgs>(args?: SelectSubset<T, DiscordUniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordUniversity.
     * @param {DiscordUniversityCreateArgs} args - Arguments to create a DiscordUniversity.
     * @example
     * // Create one DiscordUniversity
     * const DiscordUniversity = await prisma.discordUniversity.create({
     *   data: {
     *     // ... data to create a DiscordUniversity
     *   }
     * })
     * 
     */
    create<T extends DiscordUniversityCreateArgs>(args: SelectSubset<T, DiscordUniversityCreateArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordUniversities.
     * @param {DiscordUniversityCreateManyArgs} args - Arguments to create many DiscordUniversities.
     * @example
     * // Create many DiscordUniversities
     * const discordUniversity = await prisma.discordUniversity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordUniversityCreateManyArgs>(args?: SelectSubset<T, DiscordUniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordUniversities and returns the data saved in the database.
     * @param {DiscordUniversityCreateManyAndReturnArgs} args - Arguments to create many DiscordUniversities.
     * @example
     * // Create many DiscordUniversities
     * const discordUniversity = await prisma.discordUniversity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordUniversities and only return the `id`
     * const discordUniversityWithIdOnly = await prisma.discordUniversity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordUniversityCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordUniversityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordUniversity.
     * @param {DiscordUniversityDeleteArgs} args - Arguments to delete one DiscordUniversity.
     * @example
     * // Delete one DiscordUniversity
     * const DiscordUniversity = await prisma.discordUniversity.delete({
     *   where: {
     *     // ... filter to delete one DiscordUniversity
     *   }
     * })
     * 
     */
    delete<T extends DiscordUniversityDeleteArgs>(args: SelectSubset<T, DiscordUniversityDeleteArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordUniversity.
     * @param {DiscordUniversityUpdateArgs} args - Arguments to update one DiscordUniversity.
     * @example
     * // Update one DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordUniversityUpdateArgs>(args: SelectSubset<T, DiscordUniversityUpdateArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordUniversities.
     * @param {DiscordUniversityDeleteManyArgs} args - Arguments to filter DiscordUniversities to delete.
     * @example
     * // Delete a few DiscordUniversities
     * const { count } = await prisma.discordUniversity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordUniversityDeleteManyArgs>(args?: SelectSubset<T, DiscordUniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordUniversities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordUniversities
     * const discordUniversity = await prisma.discordUniversity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordUniversityUpdateManyArgs>(args: SelectSubset<T, DiscordUniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordUniversities and returns the data updated in the database.
     * @param {DiscordUniversityUpdateManyAndReturnArgs} args - Arguments to update many DiscordUniversities.
     * @example
     * // Update many DiscordUniversities
     * const discordUniversity = await prisma.discordUniversity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordUniversities and only return the `id`
     * const discordUniversityWithIdOnly = await prisma.discordUniversity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscordUniversityUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordUniversityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordUniversity.
     * @param {DiscordUniversityUpsertArgs} args - Arguments to update or create a DiscordUniversity.
     * @example
     * // Update or create a DiscordUniversity
     * const discordUniversity = await prisma.discordUniversity.upsert({
     *   create: {
     *     // ... data to create a DiscordUniversity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordUniversity we want to update
     *   }
     * })
     */
    upsert<T extends DiscordUniversityUpsertArgs>(args: SelectSubset<T, DiscordUniversityUpsertArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordUniversities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityCountArgs} args - Arguments to filter DiscordUniversities to count.
     * @example
     * // Count the number of DiscordUniversities
     * const count = await prisma.discordUniversity.count({
     *   where: {
     *     // ... the filter for the DiscordUniversities we want to count
     *   }
     * })
    **/
    count<T extends DiscordUniversityCountArgs>(
      args?: Subset<T, DiscordUniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordUniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordUniversity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscordUniversityAggregateArgs>(args: Subset<T, DiscordUniversityAggregateArgs>): Prisma.PrismaPromise<GetDiscordUniversityAggregateType<T>>

    /**
     * Group by DiscordUniversity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordUniversityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscordUniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordUniversityGroupByArgs['orderBy'] }
        : { orderBy?: DiscordUniversityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscordUniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordUniversity model
   */
  readonly fields: DiscordUniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordUniversity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordUniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiscordUser<T extends DiscordUniversity$DiscordUserArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$DiscordUserArgs<ExtArgs>>): Prisma__DiscordUserClient<$Result.GetResult<Prisma.$DiscordUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emailVerification<T extends DiscordUniversity$emailVerificationArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$emailVerificationArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BiometricEntry<T extends DiscordUniversity$BiometricEntryArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$BiometricEntryArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    externalsHelped<T extends DiscordUniversity$externalsHelpedArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$externalsHelpedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    helper<T extends DiscordUniversity$helperArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$helperArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    authorityHits<T extends DiscordUniversity$authorityHitsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$authorityHitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Guilds<T extends DiscordUniversity$GuildsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordUniversity$GuildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscordUniversity model
   */
  interface DiscordUniversityFieldRefs {
    readonly id: FieldRef<"DiscordUniversity", 'String'>
    readonly discordUserId: FieldRef<"DiscordUniversity", 'String'>
    readonly emailVerificationId: FieldRef<"DiscordUniversity", 'String'>
    readonly emailCode: FieldRef<"DiscordUniversity", 'String'>
    readonly biometricEntryId: FieldRef<"DiscordUniversity", 'String'>
    readonly fullName: FieldRef<"DiscordUniversity", 'String'>
    readonly isExternal: FieldRef<"DiscordUniversity", 'Boolean'>
    readonly helperId: FieldRef<"DiscordUniversity", 'String'>
    readonly helperCode: FieldRef<"DiscordUniversity", 'String'>
    readonly studentId: FieldRef<"DiscordUniversity", 'String'>
    readonly isVerified: FieldRef<"DiscordUniversity", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DiscordUniversity findUnique
   */
  export type DiscordUniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUniversity to fetch.
     */
    where: DiscordUniversityWhereUniqueInput
  }

  /**
   * DiscordUniversity findUniqueOrThrow
   */
  export type DiscordUniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUniversity to fetch.
     */
    where: DiscordUniversityWhereUniqueInput
  }

  /**
   * DiscordUniversity findFirst
   */
  export type DiscordUniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUniversity to fetch.
     */
    where?: DiscordUniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUniversities to fetch.
     */
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordUniversities.
     */
    cursor?: DiscordUniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUniversities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUniversities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordUniversities.
     */
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * DiscordUniversity findFirstOrThrow
   */
  export type DiscordUniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUniversity to fetch.
     */
    where?: DiscordUniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUniversities to fetch.
     */
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordUniversities.
     */
    cursor?: DiscordUniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUniversities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUniversities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordUniversities.
     */
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * DiscordUniversity findMany
   */
  export type DiscordUniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter, which DiscordUniversities to fetch.
     */
    where?: DiscordUniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordUniversities to fetch.
     */
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordUniversities.
     */
    cursor?: DiscordUniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordUniversities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordUniversities.
     */
    skip?: number
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * DiscordUniversity create
   */
  export type DiscordUniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordUniversity.
     */
    data?: XOR<DiscordUniversityCreateInput, DiscordUniversityUncheckedCreateInput>
  }

  /**
   * DiscordUniversity createMany
   */
  export type DiscordUniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordUniversities.
     */
    data: DiscordUniversityCreateManyInput | DiscordUniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordUniversity createManyAndReturn
   */
  export type DiscordUniversityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordUniversities.
     */
    data: DiscordUniversityCreateManyInput | DiscordUniversityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordUniversity update
   */
  export type DiscordUniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordUniversity.
     */
    data: XOR<DiscordUniversityUpdateInput, DiscordUniversityUncheckedUpdateInput>
    /**
     * Choose, which DiscordUniversity to update.
     */
    where: DiscordUniversityWhereUniqueInput
  }

  /**
   * DiscordUniversity updateMany
   */
  export type DiscordUniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordUniversities.
     */
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyInput>
    /**
     * Filter which DiscordUniversities to update
     */
    where?: DiscordUniversityWhereInput
    /**
     * Limit how many DiscordUniversities to update.
     */
    limit?: number
  }

  /**
   * DiscordUniversity updateManyAndReturn
   */
  export type DiscordUniversityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * The data used to update DiscordUniversities.
     */
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyInput>
    /**
     * Filter which DiscordUniversities to update
     */
    where?: DiscordUniversityWhereInput
    /**
     * Limit how many DiscordUniversities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordUniversity upsert
   */
  export type DiscordUniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordUniversity to update in case it exists.
     */
    where: DiscordUniversityWhereUniqueInput
    /**
     * In case the DiscordUniversity found by the `where` argument doesn't exist, create a new DiscordUniversity with this data.
     */
    create: XOR<DiscordUniversityCreateInput, DiscordUniversityUncheckedCreateInput>
    /**
     * In case the DiscordUniversity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordUniversityUpdateInput, DiscordUniversityUncheckedUpdateInput>
  }

  /**
   * DiscordUniversity delete
   */
  export type DiscordUniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    /**
     * Filter which DiscordUniversity to delete.
     */
    where: DiscordUniversityWhereUniqueInput
  }

  /**
   * DiscordUniversity deleteMany
   */
  export type DiscordUniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordUniversities to delete
     */
    where?: DiscordUniversityWhereInput
    /**
     * Limit how many DiscordUniversities to delete.
     */
    limit?: number
  }

  /**
   * DiscordUniversity.DiscordUser
   */
  export type DiscordUniversity$DiscordUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUser
     */
    select?: DiscordUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUser
     */
    omit?: DiscordUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUserInclude<ExtArgs> | null
    where?: DiscordUserWhereInput
  }

  /**
   * DiscordUniversity.emailVerification
   */
  export type DiscordUniversity$emailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
  }

  /**
   * DiscordUniversity.BiometricEntry
   */
  export type DiscordUniversity$BiometricEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    where?: BiometricEntryWhereInput
  }

  /**
   * DiscordUniversity.externalsHelped
   */
  export type DiscordUniversity$externalsHelpedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    cursor?: DiscordUniversityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * DiscordUniversity.helper
   */
  export type DiscordUniversity$helperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
  }

  /**
   * DiscordUniversity.authorityHits
   */
  export type DiscordUniversity$authorityHitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    where?: AuthorityHitWhereInput
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    cursor?: AuthorityHitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorityHitScalarFieldEnum | AuthorityHitScalarFieldEnum[]
  }

  /**
   * DiscordUniversity.Guilds
   */
  export type DiscordUniversity$GuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    where?: GuildsWhereInput
    orderBy?: GuildsOrderByWithRelationInput | GuildsOrderByWithRelationInput[]
    cursor?: GuildsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuildsScalarFieldEnum | GuildsScalarFieldEnum[]
  }

  /**
   * DiscordUniversity without action
   */
  export type DiscordUniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
  }


  /**
   * Model AuthorityHit
   */

  export type AggregateAuthorityHit = {
    _count: AuthorityHitCountAggregateOutputType | null
    _min: AuthorityHitMinAggregateOutputType | null
    _max: AuthorityHitMaxAggregateOutputType | null
  }

  export type AuthorityHitMinAggregateOutputType = {
    id: string | null
    discordUniversityId: string | null
    guildsId: string | null
    federated: $Enums.Federated | null
    reason: string | null
    type: $Enums.HitType | null
    createdAt: Date | null
  }

  export type AuthorityHitMaxAggregateOutputType = {
    id: string | null
    discordUniversityId: string | null
    guildsId: string | null
    federated: $Enums.Federated | null
    reason: string | null
    type: $Enums.HitType | null
    createdAt: Date | null
  }

  export type AuthorityHitCountAggregateOutputType = {
    id: number
    discordUniversityId: number
    guildsId: number
    federated: number
    reason: number
    type: number
    createdAt: number
    _all: number
  }


  export type AuthorityHitMinAggregateInputType = {
    id?: true
    discordUniversityId?: true
    guildsId?: true
    federated?: true
    reason?: true
    type?: true
    createdAt?: true
  }

  export type AuthorityHitMaxAggregateInputType = {
    id?: true
    discordUniversityId?: true
    guildsId?: true
    federated?: true
    reason?: true
    type?: true
    createdAt?: true
  }

  export type AuthorityHitCountAggregateInputType = {
    id?: true
    discordUniversityId?: true
    guildsId?: true
    federated?: true
    reason?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type AuthorityHitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorityHit to aggregate.
     */
    where?: AuthorityHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorityHits to fetch.
     */
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorityHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorityHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorityHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorityHits
    **/
    _count?: true | AuthorityHitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorityHitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorityHitMaxAggregateInputType
  }

  export type GetAuthorityHitAggregateType<T extends AuthorityHitAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorityHit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorityHit[P]>
      : GetScalarType<T[P], AggregateAuthorityHit[P]>
  }




  export type AuthorityHitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorityHitWhereInput
    orderBy?: AuthorityHitOrderByWithAggregationInput | AuthorityHitOrderByWithAggregationInput[]
    by: AuthorityHitScalarFieldEnum[] | AuthorityHitScalarFieldEnum
    having?: AuthorityHitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorityHitCountAggregateInputType | true
    _min?: AuthorityHitMinAggregateInputType
    _max?: AuthorityHitMaxAggregateInputType
  }

  export type AuthorityHitGroupByOutputType = {
    id: string
    discordUniversityId: string | null
    guildsId: string | null
    federated: $Enums.Federated
    reason: string
    type: $Enums.HitType
    createdAt: Date
    _count: AuthorityHitCountAggregateOutputType | null
    _min: AuthorityHitMinAggregateOutputType | null
    _max: AuthorityHitMaxAggregateOutputType | null
  }

  type GetAuthorityHitGroupByPayload<T extends AuthorityHitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorityHitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorityHitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorityHitGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorityHitGroupByOutputType[P]>
        }
      >
    >


  export type AuthorityHitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUniversityId?: boolean
    guildsId?: boolean
    federated?: boolean
    reason?: boolean
    type?: boolean
    createdAt?: boolean
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["authorityHit"]>

  export type AuthorityHitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUniversityId?: boolean
    guildsId?: boolean
    federated?: boolean
    reason?: boolean
    type?: boolean
    createdAt?: boolean
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["authorityHit"]>

  export type AuthorityHitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordUniversityId?: boolean
    guildsId?: boolean
    federated?: boolean
    reason?: boolean
    type?: boolean
    createdAt?: boolean
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }, ExtArgs["result"]["authorityHit"]>

  export type AuthorityHitSelectScalar = {
    id?: boolean
    discordUniversityId?: boolean
    guildsId?: boolean
    federated?: boolean
    reason?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type AuthorityHitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordUniversityId" | "guildsId" | "federated" | "reason" | "type" | "createdAt", ExtArgs["result"]["authorityHit"]>
  export type AuthorityHitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }
  export type AuthorityHitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }
  export type AuthorityHitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiscordUniversity?: boolean | AuthorityHit$DiscordUniversityArgs<ExtArgs>
    Guilds?: boolean | AuthorityHit$GuildsArgs<ExtArgs>
  }

  export type $AuthorityHitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorityHit"
    objects: {
      DiscordUniversity: Prisma.$DiscordUniversityPayload<ExtArgs> | null
      Guilds: Prisma.$GuildsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordUniversityId: string | null
      guildsId: string | null
      federated: $Enums.Federated
      reason: string
      type: $Enums.HitType
      createdAt: Date
    }, ExtArgs["result"]["authorityHit"]>
    composites: {}
  }

  type AuthorityHitGetPayload<S extends boolean | null | undefined | AuthorityHitDefaultArgs> = $Result.GetResult<Prisma.$AuthorityHitPayload, S>

  type AuthorityHitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorityHitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorityHitCountAggregateInputType | true
    }

  export interface AuthorityHitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorityHit'], meta: { name: 'AuthorityHit' } }
    /**
     * Find zero or one AuthorityHit that matches the filter.
     * @param {AuthorityHitFindUniqueArgs} args - Arguments to find a AuthorityHit
     * @example
     * // Get one AuthorityHit
     * const authorityHit = await prisma.authorityHit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorityHitFindUniqueArgs>(args: SelectSubset<T, AuthorityHitFindUniqueArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorityHit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorityHitFindUniqueOrThrowArgs} args - Arguments to find a AuthorityHit
     * @example
     * // Get one AuthorityHit
     * const authorityHit = await prisma.authorityHit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorityHitFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorityHitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorityHit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitFindFirstArgs} args - Arguments to find a AuthorityHit
     * @example
     * // Get one AuthorityHit
     * const authorityHit = await prisma.authorityHit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorityHitFindFirstArgs>(args?: SelectSubset<T, AuthorityHitFindFirstArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorityHit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitFindFirstOrThrowArgs} args - Arguments to find a AuthorityHit
     * @example
     * // Get one AuthorityHit
     * const authorityHit = await prisma.authorityHit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorityHitFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorityHitFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorityHits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorityHits
     * const authorityHits = await prisma.authorityHit.findMany()
     * 
     * // Get first 10 AuthorityHits
     * const authorityHits = await prisma.authorityHit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorityHitWithIdOnly = await prisma.authorityHit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorityHitFindManyArgs>(args?: SelectSubset<T, AuthorityHitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorityHit.
     * @param {AuthorityHitCreateArgs} args - Arguments to create a AuthorityHit.
     * @example
     * // Create one AuthorityHit
     * const AuthorityHit = await prisma.authorityHit.create({
     *   data: {
     *     // ... data to create a AuthorityHit
     *   }
     * })
     * 
     */
    create<T extends AuthorityHitCreateArgs>(args: SelectSubset<T, AuthorityHitCreateArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorityHits.
     * @param {AuthorityHitCreateManyArgs} args - Arguments to create many AuthorityHits.
     * @example
     * // Create many AuthorityHits
     * const authorityHit = await prisma.authorityHit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorityHitCreateManyArgs>(args?: SelectSubset<T, AuthorityHitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorityHits and returns the data saved in the database.
     * @param {AuthorityHitCreateManyAndReturnArgs} args - Arguments to create many AuthorityHits.
     * @example
     * // Create many AuthorityHits
     * const authorityHit = await prisma.authorityHit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorityHits and only return the `id`
     * const authorityHitWithIdOnly = await prisma.authorityHit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorityHitCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorityHitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorityHit.
     * @param {AuthorityHitDeleteArgs} args - Arguments to delete one AuthorityHit.
     * @example
     * // Delete one AuthorityHit
     * const AuthorityHit = await prisma.authorityHit.delete({
     *   where: {
     *     // ... filter to delete one AuthorityHit
     *   }
     * })
     * 
     */
    delete<T extends AuthorityHitDeleteArgs>(args: SelectSubset<T, AuthorityHitDeleteArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorityHit.
     * @param {AuthorityHitUpdateArgs} args - Arguments to update one AuthorityHit.
     * @example
     * // Update one AuthorityHit
     * const authorityHit = await prisma.authorityHit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorityHitUpdateArgs>(args: SelectSubset<T, AuthorityHitUpdateArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorityHits.
     * @param {AuthorityHitDeleteManyArgs} args - Arguments to filter AuthorityHits to delete.
     * @example
     * // Delete a few AuthorityHits
     * const { count } = await prisma.authorityHit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorityHitDeleteManyArgs>(args?: SelectSubset<T, AuthorityHitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorityHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorityHits
     * const authorityHit = await prisma.authorityHit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorityHitUpdateManyArgs>(args: SelectSubset<T, AuthorityHitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorityHits and returns the data updated in the database.
     * @param {AuthorityHitUpdateManyAndReturnArgs} args - Arguments to update many AuthorityHits.
     * @example
     * // Update many AuthorityHits
     * const authorityHit = await prisma.authorityHit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorityHits and only return the `id`
     * const authorityHitWithIdOnly = await prisma.authorityHit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorityHitUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorityHitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorityHit.
     * @param {AuthorityHitUpsertArgs} args - Arguments to update or create a AuthorityHit.
     * @example
     * // Update or create a AuthorityHit
     * const authorityHit = await prisma.authorityHit.upsert({
     *   create: {
     *     // ... data to create a AuthorityHit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorityHit we want to update
     *   }
     * })
     */
    upsert<T extends AuthorityHitUpsertArgs>(args: SelectSubset<T, AuthorityHitUpsertArgs<ExtArgs>>): Prisma__AuthorityHitClient<$Result.GetResult<Prisma.$AuthorityHitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorityHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitCountArgs} args - Arguments to filter AuthorityHits to count.
     * @example
     * // Count the number of AuthorityHits
     * const count = await prisma.authorityHit.count({
     *   where: {
     *     // ... the filter for the AuthorityHits we want to count
     *   }
     * })
    **/
    count<T extends AuthorityHitCountArgs>(
      args?: Subset<T, AuthorityHitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorityHitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorityHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorityHitAggregateArgs>(args: Subset<T, AuthorityHitAggregateArgs>): Prisma.PrismaPromise<GetAuthorityHitAggregateType<T>>

    /**
     * Group by AuthorityHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorityHitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorityHitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorityHitGroupByArgs['orderBy'] }
        : { orderBy?: AuthorityHitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorityHitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorityHitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorityHit model
   */
  readonly fields: AuthorityHitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorityHit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorityHitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiscordUniversity<T extends AuthorityHit$DiscordUniversityArgs<ExtArgs> = {}>(args?: Subset<T, AuthorityHit$DiscordUniversityArgs<ExtArgs>>): Prisma__DiscordUniversityClient<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Guilds<T extends AuthorityHit$GuildsArgs<ExtArgs> = {}>(args?: Subset<T, AuthorityHit$GuildsArgs<ExtArgs>>): Prisma__GuildsClient<$Result.GetResult<Prisma.$GuildsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorityHit model
   */
  interface AuthorityHitFieldRefs {
    readonly id: FieldRef<"AuthorityHit", 'String'>
    readonly discordUniversityId: FieldRef<"AuthorityHit", 'String'>
    readonly guildsId: FieldRef<"AuthorityHit", 'String'>
    readonly federated: FieldRef<"AuthorityHit", 'Federated'>
    readonly reason: FieldRef<"AuthorityHit", 'String'>
    readonly type: FieldRef<"AuthorityHit", 'HitType'>
    readonly createdAt: FieldRef<"AuthorityHit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthorityHit findUnique
   */
  export type AuthorityHitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter, which AuthorityHit to fetch.
     */
    where: AuthorityHitWhereUniqueInput
  }

  /**
   * AuthorityHit findUniqueOrThrow
   */
  export type AuthorityHitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter, which AuthorityHit to fetch.
     */
    where: AuthorityHitWhereUniqueInput
  }

  /**
   * AuthorityHit findFirst
   */
  export type AuthorityHitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter, which AuthorityHit to fetch.
     */
    where?: AuthorityHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorityHits to fetch.
     */
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorityHits.
     */
    cursor?: AuthorityHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorityHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorityHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorityHits.
     */
    distinct?: AuthorityHitScalarFieldEnum | AuthorityHitScalarFieldEnum[]
  }

  /**
   * AuthorityHit findFirstOrThrow
   */
  export type AuthorityHitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter, which AuthorityHit to fetch.
     */
    where?: AuthorityHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorityHits to fetch.
     */
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorityHits.
     */
    cursor?: AuthorityHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorityHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorityHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorityHits.
     */
    distinct?: AuthorityHitScalarFieldEnum | AuthorityHitScalarFieldEnum[]
  }

  /**
   * AuthorityHit findMany
   */
  export type AuthorityHitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter, which AuthorityHits to fetch.
     */
    where?: AuthorityHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorityHits to fetch.
     */
    orderBy?: AuthorityHitOrderByWithRelationInput | AuthorityHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorityHits.
     */
    cursor?: AuthorityHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorityHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorityHits.
     */
    skip?: number
    distinct?: AuthorityHitScalarFieldEnum | AuthorityHitScalarFieldEnum[]
  }

  /**
   * AuthorityHit create
   */
  export type AuthorityHitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorityHit.
     */
    data: XOR<AuthorityHitCreateInput, AuthorityHitUncheckedCreateInput>
  }

  /**
   * AuthorityHit createMany
   */
  export type AuthorityHitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorityHits.
     */
    data: AuthorityHitCreateManyInput | AuthorityHitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorityHit createManyAndReturn
   */
  export type AuthorityHitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorityHits.
     */
    data: AuthorityHitCreateManyInput | AuthorityHitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorityHit update
   */
  export type AuthorityHitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorityHit.
     */
    data: XOR<AuthorityHitUpdateInput, AuthorityHitUncheckedUpdateInput>
    /**
     * Choose, which AuthorityHit to update.
     */
    where: AuthorityHitWhereUniqueInput
  }

  /**
   * AuthorityHit updateMany
   */
  export type AuthorityHitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorityHits.
     */
    data: XOR<AuthorityHitUpdateManyMutationInput, AuthorityHitUncheckedUpdateManyInput>
    /**
     * Filter which AuthorityHits to update
     */
    where?: AuthorityHitWhereInput
    /**
     * Limit how many AuthorityHits to update.
     */
    limit?: number
  }

  /**
   * AuthorityHit updateManyAndReturn
   */
  export type AuthorityHitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * The data used to update AuthorityHits.
     */
    data: XOR<AuthorityHitUpdateManyMutationInput, AuthorityHitUncheckedUpdateManyInput>
    /**
     * Filter which AuthorityHits to update
     */
    where?: AuthorityHitWhereInput
    /**
     * Limit how many AuthorityHits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorityHit upsert
   */
  export type AuthorityHitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorityHit to update in case it exists.
     */
    where: AuthorityHitWhereUniqueInput
    /**
     * In case the AuthorityHit found by the `where` argument doesn't exist, create a new AuthorityHit with this data.
     */
    create: XOR<AuthorityHitCreateInput, AuthorityHitUncheckedCreateInput>
    /**
     * In case the AuthorityHit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorityHitUpdateInput, AuthorityHitUncheckedUpdateInput>
  }

  /**
   * AuthorityHit delete
   */
  export type AuthorityHitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
    /**
     * Filter which AuthorityHit to delete.
     */
    where: AuthorityHitWhereUniqueInput
  }

  /**
   * AuthorityHit deleteMany
   */
  export type AuthorityHitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorityHits to delete
     */
    where?: AuthorityHitWhereInput
    /**
     * Limit how many AuthorityHits to delete.
     */
    limit?: number
  }

  /**
   * AuthorityHit.DiscordUniversity
   */
  export type AuthorityHit$DiscordUniversityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
  }

  /**
   * AuthorityHit.Guilds
   */
  export type AuthorityHit$GuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guilds
     */
    select?: GuildsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guilds
     */
    omit?: GuildsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildsInclude<ExtArgs> | null
    where?: GuildsWhereInput
  }

  /**
   * AuthorityHit without action
   */
  export type AuthorityHitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorityHit
     */
    select?: AuthorityHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorityHit
     */
    omit?: AuthorityHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorityHitInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerification
   */

  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  export type EmailVerificationMinAggregateOutputType = {
    id: string | null
    email: string | null
    isVerified: boolean | null
  }

  export type EmailVerificationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    isVerified: boolean | null
  }

  export type EmailVerificationCountAggregateOutputType = {
    id: number
    email: number
    isVerified: number
    _all: number
  }


  export type EmailVerificationMinAggregateInputType = {
    id?: true
    email?: true
    isVerified?: true
  }

  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    isVerified?: true
  }

  export type EmailVerificationCountAggregateInputType = {
    id?: true
    email?: true
    isVerified?: true
    _all?: true
  }

  export type EmailVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerification to aggregate.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerifications
    **/
    _count?: true | EmailVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type GetEmailVerificationAggregateType<T extends EmailVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>
  }




  export type EmailVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithAggregationInput | EmailVerificationOrderByWithAggregationInput[]
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum
    having?: EmailVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCountAggregateInputType | true
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type EmailVerificationGroupByOutputType = {
    id: string
    email: string
    isVerified: boolean
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  type GetEmailVerificationGroupByPayload<T extends EmailVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isVerified?: boolean
    link?: boolean | EmailVerification$linkArgs<ExtArgs>
    _count?: boolean | EmailVerificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isVerified?: boolean
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    isVerified?: boolean
  }

  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "isVerified", ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | EmailVerification$linkArgs<ExtArgs>
    _count?: boolean | EmailVerificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmailVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {
      link: Prisma.$DiscordUniversityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      isVerified: boolean
    }, ExtArgs["result"]["emailVerification"]>
    composites: {}
  }

  type EmailVerificationGetPayload<S extends boolean | null | undefined | EmailVerificationDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationPayload, S>

  type EmailVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCountAggregateInputType | true
    }

  export interface EmailVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerification'], meta: { name: 'EmailVerification' } }
    /**
     * Find zero or one EmailVerification that matches the filter.
     * @param {EmailVerificationFindUniqueArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationFindUniqueArgs>(args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationFindUniqueOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationFindFirstArgs>(args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany()
     * 
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationFindManyArgs>(args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerification.
     * @param {EmailVerificationCreateArgs} args - Arguments to create a EmailVerification.
     * @example
     * // Create one EmailVerification
     * const EmailVerification = await prisma.emailVerification.create({
     *   data: {
     *     // ... data to create a EmailVerification
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationCreateArgs>(args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerification.
     * @param {EmailVerificationDeleteArgs} args - Arguments to delete one EmailVerification.
     * @example
     * // Delete one EmailVerification
     * const EmailVerification = await prisma.emailVerification.delete({
     *   where: {
     *     // ... filter to delete one EmailVerification
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationDeleteArgs>(args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerification.
     * @param {EmailVerificationUpdateArgs} args - Arguments to update one EmailVerification.
     * @example
     * // Update one EmailVerification
     * const emailVerification = await prisma.emailVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationUpdateArgs>(args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationUpdateManyArgs>(args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications and returns the data updated in the database.
     * @param {EmailVerificationUpdateManyAndReturnArgs} args - Arguments to update many EmailVerifications.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerification.
     * @param {EmailVerificationUpsertArgs} args - Arguments to update or create a EmailVerification.
     * @example
     * // Update or create a EmailVerification
     * const emailVerification = await prisma.emailVerification.upsert({
     *   create: {
     *     // ... data to create a EmailVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerification we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationUpsertArgs>(args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerification.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationAggregateArgs>(args: Subset<T, EmailVerificationAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>

    /**
     * Group by EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerification model
   */
  readonly fields: EmailVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link<T extends EmailVerification$linkArgs<ExtArgs> = {}>(args?: Subset<T, EmailVerification$linkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerification model
   */
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", 'String'>
    readonly email: FieldRef<"EmailVerification", 'String'>
    readonly isVerified: FieldRef<"EmailVerification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerification findUnique
   */
  export type EmailVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findUniqueOrThrow
   */
  export type EmailVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findFirst
   */
  export type EmailVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findFirstOrThrow
   */
  export type EmailVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findMany
   */
  export type EmailVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification create
   */
  export type EmailVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerification.
     */
    data: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
  }

  /**
   * EmailVerification createMany
   */
  export type EmailVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification createManyAndReturn
   */
  export type EmailVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification update
   */
  export type EmailVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerification.
     */
    data: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
    /**
     * Choose, which EmailVerification to update.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification updateMany
   */
  export type EmailVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification updateManyAndReturn
   */
  export type EmailVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification upsert
   */
  export type EmailVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerification to update in case it exists.
     */
    where: EmailVerificationWhereUniqueInput
    /**
     * In case the EmailVerification found by the `where` argument doesn't exist, create a new EmailVerification with this data.
     */
    create: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
    /**
     * In case the EmailVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
  }

  /**
   * EmailVerification delete
   */
  export type EmailVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
    /**
     * Filter which EmailVerification to delete.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification deleteMany
   */
  export type EmailVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to delete.
     */
    limit?: number
  }

  /**
   * EmailVerification.link
   */
  export type EmailVerification$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    cursor?: DiscordUniversityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * EmailVerification without action
   */
  export type EmailVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationInclude<ExtArgs> | null
  }


  /**
   * Model BiometricEntry
   */

  export type AggregateBiometricEntry = {
    _count: BiometricEntryCountAggregateOutputType | null
    _min: BiometricEntryMinAggregateOutputType | null
    _max: BiometricEntryMaxAggregateOutputType | null
  }

  export type BiometricEntryMinAggregateOutputType = {
    id: string | null
    universityID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BiometricEntryMaxAggregateOutputType = {
    id: string | null
    universityID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BiometricEntryCountAggregateOutputType = {
    id: number
    universityID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BiometricEntryMinAggregateInputType = {
    id?: true
    universityID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BiometricEntryMaxAggregateInputType = {
    id?: true
    universityID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BiometricEntryCountAggregateInputType = {
    id?: true
    universityID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BiometricEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricEntry to aggregate.
     */
    where?: BiometricEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricEntries to fetch.
     */
    orderBy?: BiometricEntryOrderByWithRelationInput | BiometricEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiometricEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiometricEntries
    **/
    _count?: true | BiometricEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiometricEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiometricEntryMaxAggregateInputType
  }

  export type GetBiometricEntryAggregateType<T extends BiometricEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateBiometricEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiometricEntry[P]>
      : GetScalarType<T[P], AggregateBiometricEntry[P]>
  }




  export type BiometricEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricEntryWhereInput
    orderBy?: BiometricEntryOrderByWithAggregationInput | BiometricEntryOrderByWithAggregationInput[]
    by: BiometricEntryScalarFieldEnum[] | BiometricEntryScalarFieldEnum
    having?: BiometricEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiometricEntryCountAggregateInputType | true
    _min?: BiometricEntryMinAggregateInputType
    _max?: BiometricEntryMaxAggregateInputType
  }

  export type BiometricEntryGroupByOutputType = {
    id: string
    universityID: string
    createdAt: Date
    updatedAt: Date
    _count: BiometricEntryCountAggregateOutputType | null
    _min: BiometricEntryMinAggregateOutputType | null
    _max: BiometricEntryMaxAggregateOutputType | null
  }

  type GetBiometricEntryGroupByPayload<T extends BiometricEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiometricEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiometricEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiometricEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BiometricEntryGroupByOutputType[P]>
        }
      >
    >


  export type BiometricEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    link?: boolean | BiometricEntry$linkArgs<ExtArgs>
    _count?: boolean | BiometricEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricEntry"]>

  export type BiometricEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["biometricEntry"]>

  export type BiometricEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["biometricEntry"]>

  export type BiometricEntrySelectScalar = {
    id?: boolean
    universityID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BiometricEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "universityID" | "createdAt" | "updatedAt", ExtArgs["result"]["biometricEntry"]>
  export type BiometricEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | BiometricEntry$linkArgs<ExtArgs>
    _count?: boolean | BiometricEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BiometricEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BiometricEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BiometricEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiometricEntry"
    objects: {
      link: Prisma.$DiscordUniversityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      universityID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["biometricEntry"]>
    composites: {}
  }

  type BiometricEntryGetPayload<S extends boolean | null | undefined | BiometricEntryDefaultArgs> = $Result.GetResult<Prisma.$BiometricEntryPayload, S>

  type BiometricEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiometricEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiometricEntryCountAggregateInputType | true
    }

  export interface BiometricEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiometricEntry'], meta: { name: 'BiometricEntry' } }
    /**
     * Find zero or one BiometricEntry that matches the filter.
     * @param {BiometricEntryFindUniqueArgs} args - Arguments to find a BiometricEntry
     * @example
     * // Get one BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiometricEntryFindUniqueArgs>(args: SelectSubset<T, BiometricEntryFindUniqueArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiometricEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiometricEntryFindUniqueOrThrowArgs} args - Arguments to find a BiometricEntry
     * @example
     * // Get one BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiometricEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, BiometricEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryFindFirstArgs} args - Arguments to find a BiometricEntry
     * @example
     * // Get one BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiometricEntryFindFirstArgs>(args?: SelectSubset<T, BiometricEntryFindFirstArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryFindFirstOrThrowArgs} args - Arguments to find a BiometricEntry
     * @example
     * // Get one BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiometricEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, BiometricEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiometricEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiometricEntries
     * const biometricEntries = await prisma.biometricEntry.findMany()
     * 
     * // Get first 10 BiometricEntries
     * const biometricEntries = await prisma.biometricEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biometricEntryWithIdOnly = await prisma.biometricEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiometricEntryFindManyArgs>(args?: SelectSubset<T, BiometricEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiometricEntry.
     * @param {BiometricEntryCreateArgs} args - Arguments to create a BiometricEntry.
     * @example
     * // Create one BiometricEntry
     * const BiometricEntry = await prisma.biometricEntry.create({
     *   data: {
     *     // ... data to create a BiometricEntry
     *   }
     * })
     * 
     */
    create<T extends BiometricEntryCreateArgs>(args: SelectSubset<T, BiometricEntryCreateArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiometricEntries.
     * @param {BiometricEntryCreateManyArgs} args - Arguments to create many BiometricEntries.
     * @example
     * // Create many BiometricEntries
     * const biometricEntry = await prisma.biometricEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiometricEntryCreateManyArgs>(args?: SelectSubset<T, BiometricEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiometricEntries and returns the data saved in the database.
     * @param {BiometricEntryCreateManyAndReturnArgs} args - Arguments to create many BiometricEntries.
     * @example
     * // Create many BiometricEntries
     * const biometricEntry = await prisma.biometricEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiometricEntries and only return the `id`
     * const biometricEntryWithIdOnly = await prisma.biometricEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiometricEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, BiometricEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BiometricEntry.
     * @param {BiometricEntryDeleteArgs} args - Arguments to delete one BiometricEntry.
     * @example
     * // Delete one BiometricEntry
     * const BiometricEntry = await prisma.biometricEntry.delete({
     *   where: {
     *     // ... filter to delete one BiometricEntry
     *   }
     * })
     * 
     */
    delete<T extends BiometricEntryDeleteArgs>(args: SelectSubset<T, BiometricEntryDeleteArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiometricEntry.
     * @param {BiometricEntryUpdateArgs} args - Arguments to update one BiometricEntry.
     * @example
     * // Update one BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiometricEntryUpdateArgs>(args: SelectSubset<T, BiometricEntryUpdateArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiometricEntries.
     * @param {BiometricEntryDeleteManyArgs} args - Arguments to filter BiometricEntries to delete.
     * @example
     * // Delete a few BiometricEntries
     * const { count } = await prisma.biometricEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiometricEntryDeleteManyArgs>(args?: SelectSubset<T, BiometricEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiometricEntries
     * const biometricEntry = await prisma.biometricEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiometricEntryUpdateManyArgs>(args: SelectSubset<T, BiometricEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricEntries and returns the data updated in the database.
     * @param {BiometricEntryUpdateManyAndReturnArgs} args - Arguments to update many BiometricEntries.
     * @example
     * // Update many BiometricEntries
     * const biometricEntry = await prisma.biometricEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiometricEntries and only return the `id`
     * const biometricEntryWithIdOnly = await prisma.biometricEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiometricEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, BiometricEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BiometricEntry.
     * @param {BiometricEntryUpsertArgs} args - Arguments to update or create a BiometricEntry.
     * @example
     * // Update or create a BiometricEntry
     * const biometricEntry = await prisma.biometricEntry.upsert({
     *   create: {
     *     // ... data to create a BiometricEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiometricEntry we want to update
     *   }
     * })
     */
    upsert<T extends BiometricEntryUpsertArgs>(args: SelectSubset<T, BiometricEntryUpsertArgs<ExtArgs>>): Prisma__BiometricEntryClient<$Result.GetResult<Prisma.$BiometricEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiometricEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryCountArgs} args - Arguments to filter BiometricEntries to count.
     * @example
     * // Count the number of BiometricEntries
     * const count = await prisma.biometricEntry.count({
     *   where: {
     *     // ... the filter for the BiometricEntries we want to count
     *   }
     * })
    **/
    count<T extends BiometricEntryCountArgs>(
      args?: Subset<T, BiometricEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiometricEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiometricEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiometricEntryAggregateArgs>(args: Subset<T, BiometricEntryAggregateArgs>): Prisma.PrismaPromise<GetBiometricEntryAggregateType<T>>

    /**
     * Group by BiometricEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BiometricEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiometricEntryGroupByArgs['orderBy'] }
        : { orderBy?: BiometricEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BiometricEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiometricEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiometricEntry model
   */
  readonly fields: BiometricEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiometricEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiometricEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link<T extends BiometricEntry$linkArgs<ExtArgs> = {}>(args?: Subset<T, BiometricEntry$linkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordUniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BiometricEntry model
   */
  interface BiometricEntryFieldRefs {
    readonly id: FieldRef<"BiometricEntry", 'String'>
    readonly universityID: FieldRef<"BiometricEntry", 'String'>
    readonly createdAt: FieldRef<"BiometricEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"BiometricEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BiometricEntry findUnique
   */
  export type BiometricEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter, which BiometricEntry to fetch.
     */
    where: BiometricEntryWhereUniqueInput
  }

  /**
   * BiometricEntry findUniqueOrThrow
   */
  export type BiometricEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter, which BiometricEntry to fetch.
     */
    where: BiometricEntryWhereUniqueInput
  }

  /**
   * BiometricEntry findFirst
   */
  export type BiometricEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter, which BiometricEntry to fetch.
     */
    where?: BiometricEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricEntries to fetch.
     */
    orderBy?: BiometricEntryOrderByWithRelationInput | BiometricEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricEntries.
     */
    cursor?: BiometricEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricEntries.
     */
    distinct?: BiometricEntryScalarFieldEnum | BiometricEntryScalarFieldEnum[]
  }

  /**
   * BiometricEntry findFirstOrThrow
   */
  export type BiometricEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter, which BiometricEntry to fetch.
     */
    where?: BiometricEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricEntries to fetch.
     */
    orderBy?: BiometricEntryOrderByWithRelationInput | BiometricEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricEntries.
     */
    cursor?: BiometricEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricEntries.
     */
    distinct?: BiometricEntryScalarFieldEnum | BiometricEntryScalarFieldEnum[]
  }

  /**
   * BiometricEntry findMany
   */
  export type BiometricEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter, which BiometricEntries to fetch.
     */
    where?: BiometricEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricEntries to fetch.
     */
    orderBy?: BiometricEntryOrderByWithRelationInput | BiometricEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiometricEntries.
     */
    cursor?: BiometricEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricEntries.
     */
    skip?: number
    distinct?: BiometricEntryScalarFieldEnum | BiometricEntryScalarFieldEnum[]
  }

  /**
   * BiometricEntry create
   */
  export type BiometricEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a BiometricEntry.
     */
    data: XOR<BiometricEntryCreateInput, BiometricEntryUncheckedCreateInput>
  }

  /**
   * BiometricEntry createMany
   */
  export type BiometricEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiometricEntries.
     */
    data: BiometricEntryCreateManyInput | BiometricEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiometricEntry createManyAndReturn
   */
  export type BiometricEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * The data used to create many BiometricEntries.
     */
    data: BiometricEntryCreateManyInput | BiometricEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiometricEntry update
   */
  export type BiometricEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a BiometricEntry.
     */
    data: XOR<BiometricEntryUpdateInput, BiometricEntryUncheckedUpdateInput>
    /**
     * Choose, which BiometricEntry to update.
     */
    where: BiometricEntryWhereUniqueInput
  }

  /**
   * BiometricEntry updateMany
   */
  export type BiometricEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiometricEntries.
     */
    data: XOR<BiometricEntryUpdateManyMutationInput, BiometricEntryUncheckedUpdateManyInput>
    /**
     * Filter which BiometricEntries to update
     */
    where?: BiometricEntryWhereInput
    /**
     * Limit how many BiometricEntries to update.
     */
    limit?: number
  }

  /**
   * BiometricEntry updateManyAndReturn
   */
  export type BiometricEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * The data used to update BiometricEntries.
     */
    data: XOR<BiometricEntryUpdateManyMutationInput, BiometricEntryUncheckedUpdateManyInput>
    /**
     * Filter which BiometricEntries to update
     */
    where?: BiometricEntryWhereInput
    /**
     * Limit how many BiometricEntries to update.
     */
    limit?: number
  }

  /**
   * BiometricEntry upsert
   */
  export type BiometricEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the BiometricEntry to update in case it exists.
     */
    where: BiometricEntryWhereUniqueInput
    /**
     * In case the BiometricEntry found by the `where` argument doesn't exist, create a new BiometricEntry with this data.
     */
    create: XOR<BiometricEntryCreateInput, BiometricEntryUncheckedCreateInput>
    /**
     * In case the BiometricEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiometricEntryUpdateInput, BiometricEntryUncheckedUpdateInput>
  }

  /**
   * BiometricEntry delete
   */
  export type BiometricEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
    /**
     * Filter which BiometricEntry to delete.
     */
    where: BiometricEntryWhereUniqueInput
  }

  /**
   * BiometricEntry deleteMany
   */
  export type BiometricEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricEntries to delete
     */
    where?: BiometricEntryWhereInput
    /**
     * Limit how many BiometricEntries to delete.
     */
    limit?: number
  }

  /**
   * BiometricEntry.link
   */
  export type BiometricEntry$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordUniversity
     */
    select?: DiscordUniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordUniversity
     */
    omit?: DiscordUniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordUniversityInclude<ExtArgs> | null
    where?: DiscordUniversityWhereInput
    orderBy?: DiscordUniversityOrderByWithRelationInput | DiscordUniversityOrderByWithRelationInput[]
    cursor?: DiscordUniversityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordUniversityScalarFieldEnum | DiscordUniversityScalarFieldEnum[]
  }

  /**
   * BiometricEntry without action
   */
  export type BiometricEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricEntry
     */
    select?: BiometricEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricEntry
     */
    omit?: BiometricEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GuildsScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    guildName: 'guildName',
    guildIcon: 'guildIcon',
    backgroundImage: 'backgroundImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    discordUniversityId: 'discordUniversityId'
  };

  export type GuildsScalarFieldEnum = (typeof GuildsScalarFieldEnum)[keyof typeof GuildsScalarFieldEnum]


  export const GuildLogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    guildsId: 'guildsId'
  };

  export type GuildLogScalarFieldEnum = (typeof GuildLogScalarFieldEnum)[keyof typeof GuildLogScalarFieldEnum]


  export const GuildSettingsScalarFieldEnum: {
    id: 'id',
    allowsEmailEntry: 'allowsEmailEntry',
    allowsBiometricEntry: 'allowsBiometricEntry',
    allowsExternalEntry: 'allowsExternalEntry',
    verifiedRoleId: 'verifiedRoleId',
    moderatorRoleId: 'moderatorRoleId',
    usesUowboNet: 'usesUowboNet',
    guildsId: 'guildsId'
  };

  export type GuildSettingsScalarFieldEnum = (typeof GuildSettingsScalarFieldEnum)[keyof typeof GuildSettingsScalarFieldEnum]


  export const GuildUserScalarFieldEnum: {
    id: 'id',
    guildsId: 'guildsId',
    discordUserId: 'discordUserId',
    isMod: 'isMod',
    isOwner: 'isOwner'
  };

  export type GuildUserScalarFieldEnum = (typeof GuildUserScalarFieldEnum)[keyof typeof GuildUserScalarFieldEnum]


  export const GuildMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    parentMessageId: 'parentMessageId',
    guildUserId: 'guildUserId',
    attachmentUrl: 'attachmentUrl',
    createdAt: 'createdAt'
  };

  export type GuildMessageScalarFieldEnum = (typeof GuildMessageScalarFieldEnum)[keyof typeof GuildMessageScalarFieldEnum]


  export const DiscordUserScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    avatar: 'avatar',
    username: 'username',
    createdAt: 'createdAt'
  };

  export type DiscordUserScalarFieldEnum = (typeof DiscordUserScalarFieldEnum)[keyof typeof DiscordUserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt',
    discordUserId: 'discordUserId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const DiscordUniversityScalarFieldEnum: {
    id: 'id',
    discordUserId: 'discordUserId',
    emailVerificationId: 'emailVerificationId',
    emailCode: 'emailCode',
    biometricEntryId: 'biometricEntryId',
    fullName: 'fullName',
    isExternal: 'isExternal',
    helperId: 'helperId',
    helperCode: 'helperCode',
    studentId: 'studentId',
    isVerified: 'isVerified'
  };

  export type DiscordUniversityScalarFieldEnum = (typeof DiscordUniversityScalarFieldEnum)[keyof typeof DiscordUniversityScalarFieldEnum]


  export const AuthorityHitScalarFieldEnum: {
    id: 'id',
    discordUniversityId: 'discordUniversityId',
    guildsId: 'guildsId',
    federated: 'federated',
    reason: 'reason',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type AuthorityHitScalarFieldEnum = (typeof AuthorityHitScalarFieldEnum)[keyof typeof AuthorityHitScalarFieldEnum]


  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    isVerified: 'isVerified'
  };

  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]


  export const BiometricEntryScalarFieldEnum: {
    id: 'id',
    universityID: 'universityID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BiometricEntryScalarFieldEnum = (typeof BiometricEntryScalarFieldEnum)[keyof typeof BiometricEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Federated'
   */
  export type EnumFederatedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Federated'>
    


  /**
   * Reference to a field of type 'Federated[]'
   */
  export type ListEnumFederatedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Federated[]'>
    


  /**
   * Reference to a field of type 'HitType'
   */
  export type EnumHitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HitType'>
    


  /**
   * Reference to a field of type 'HitType[]'
   */
  export type ListEnumHitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HitType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type GuildsWhereInput = {
    AND?: GuildsWhereInput | GuildsWhereInput[]
    OR?: GuildsWhereInput[]
    NOT?: GuildsWhereInput | GuildsWhereInput[]
    id?: StringFilter<"Guilds"> | string
    guildId?: StringFilter<"Guilds"> | string
    guildName?: StringFilter<"Guilds"> | string
    guildIcon?: StringNullableFilter<"Guilds"> | string | null
    backgroundImage?: StringNullableFilter<"Guilds"> | string | null
    createdAt?: DateTimeFilter<"Guilds"> | Date | string
    updatedAt?: DateTimeFilter<"Guilds"> | Date | string
    discordUniversityId?: StringNullableFilter<"Guilds"> | string | null
    members?: GuildUserListRelationFilter
    settings?: GuildSettingsListRelationFilter
    authorityHits?: AuthorityHitListRelationFilter
    GuildLog?: GuildLogListRelationFilter
    DiscordUniversity?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
  }

  export type GuildsOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    guildName?: SortOrder
    guildIcon?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discordUniversityId?: SortOrderInput | SortOrder
    members?: GuildUserOrderByRelationAggregateInput
    settings?: GuildSettingsOrderByRelationAggregateInput
    authorityHits?: AuthorityHitOrderByRelationAggregateInput
    GuildLog?: GuildLogOrderByRelationAggregateInput
    DiscordUniversity?: DiscordUniversityOrderByWithRelationInput
  }

  export type GuildsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: GuildsWhereInput | GuildsWhereInput[]
    OR?: GuildsWhereInput[]
    NOT?: GuildsWhereInput | GuildsWhereInput[]
    guildName?: StringFilter<"Guilds"> | string
    guildIcon?: StringNullableFilter<"Guilds"> | string | null
    backgroundImage?: StringNullableFilter<"Guilds"> | string | null
    createdAt?: DateTimeFilter<"Guilds"> | Date | string
    updatedAt?: DateTimeFilter<"Guilds"> | Date | string
    discordUniversityId?: StringNullableFilter<"Guilds"> | string | null
    members?: GuildUserListRelationFilter
    settings?: GuildSettingsListRelationFilter
    authorityHits?: AuthorityHitListRelationFilter
    GuildLog?: GuildLogListRelationFilter
    DiscordUniversity?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
  }, "id" | "guildId">

  export type GuildsOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    guildName?: SortOrder
    guildIcon?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discordUniversityId?: SortOrderInput | SortOrder
    _count?: GuildsCountOrderByAggregateInput
    _max?: GuildsMaxOrderByAggregateInput
    _min?: GuildsMinOrderByAggregateInput
  }

  export type GuildsScalarWhereWithAggregatesInput = {
    AND?: GuildsScalarWhereWithAggregatesInput | GuildsScalarWhereWithAggregatesInput[]
    OR?: GuildsScalarWhereWithAggregatesInput[]
    NOT?: GuildsScalarWhereWithAggregatesInput | GuildsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guilds"> | string
    guildId?: StringWithAggregatesFilter<"Guilds"> | string
    guildName?: StringWithAggregatesFilter<"Guilds"> | string
    guildIcon?: StringNullableWithAggregatesFilter<"Guilds"> | string | null
    backgroundImage?: StringNullableWithAggregatesFilter<"Guilds"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guilds"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guilds"> | Date | string
    discordUniversityId?: StringNullableWithAggregatesFilter<"Guilds"> | string | null
  }

  export type GuildLogWhereInput = {
    AND?: GuildLogWhereInput | GuildLogWhereInput[]
    OR?: GuildLogWhereInput[]
    NOT?: GuildLogWhereInput | GuildLogWhereInput[]
    id?: StringFilter<"GuildLog"> | string
    message?: StringFilter<"GuildLog"> | string
    createdAt?: DateTimeFilter<"GuildLog"> | Date | string
    guildsId?: StringNullableFilter<"GuildLog"> | string | null
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
  }

  export type GuildLogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    guildsId?: SortOrderInput | SortOrder
    Guilds?: GuildsOrderByWithRelationInput
  }

  export type GuildLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuildLogWhereInput | GuildLogWhereInput[]
    OR?: GuildLogWhereInput[]
    NOT?: GuildLogWhereInput | GuildLogWhereInput[]
    message?: StringFilter<"GuildLog"> | string
    createdAt?: DateTimeFilter<"GuildLog"> | Date | string
    guildsId?: StringNullableFilter<"GuildLog"> | string | null
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
  }, "id">

  export type GuildLogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    guildsId?: SortOrderInput | SortOrder
    _count?: GuildLogCountOrderByAggregateInput
    _max?: GuildLogMaxOrderByAggregateInput
    _min?: GuildLogMinOrderByAggregateInput
  }

  export type GuildLogScalarWhereWithAggregatesInput = {
    AND?: GuildLogScalarWhereWithAggregatesInput | GuildLogScalarWhereWithAggregatesInput[]
    OR?: GuildLogScalarWhereWithAggregatesInput[]
    NOT?: GuildLogScalarWhereWithAggregatesInput | GuildLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuildLog"> | string
    message?: StringWithAggregatesFilter<"GuildLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GuildLog"> | Date | string
    guildsId?: StringNullableWithAggregatesFilter<"GuildLog"> | string | null
  }

  export type GuildSettingsWhereInput = {
    AND?: GuildSettingsWhereInput | GuildSettingsWhereInput[]
    OR?: GuildSettingsWhereInput[]
    NOT?: GuildSettingsWhereInput | GuildSettingsWhereInput[]
    id?: StringFilter<"GuildSettings"> | string
    allowsEmailEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsBiometricEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsExternalEntry?: BoolFilter<"GuildSettings"> | boolean
    verifiedRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    moderatorRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    usesUowboNet?: BoolFilter<"GuildSettings"> | boolean
    guildsId?: StringFilter<"GuildSettings"> | string
    Guilds?: XOR<GuildsScalarRelationFilter, GuildsWhereInput>
  }

  export type GuildSettingsOrderByWithRelationInput = {
    id?: SortOrder
    allowsEmailEntry?: SortOrder
    allowsBiometricEntry?: SortOrder
    allowsExternalEntry?: SortOrder
    verifiedRoleId?: SortOrderInput | SortOrder
    moderatorRoleId?: SortOrderInput | SortOrder
    usesUowboNet?: SortOrder
    guildsId?: SortOrder
    Guilds?: GuildsOrderByWithRelationInput
  }

  export type GuildSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuildSettingsWhereInput | GuildSettingsWhereInput[]
    OR?: GuildSettingsWhereInput[]
    NOT?: GuildSettingsWhereInput | GuildSettingsWhereInput[]
    allowsEmailEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsBiometricEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsExternalEntry?: BoolFilter<"GuildSettings"> | boolean
    verifiedRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    moderatorRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    usesUowboNet?: BoolFilter<"GuildSettings"> | boolean
    guildsId?: StringFilter<"GuildSettings"> | string
    Guilds?: XOR<GuildsScalarRelationFilter, GuildsWhereInput>
  }, "id">

  export type GuildSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    allowsEmailEntry?: SortOrder
    allowsBiometricEntry?: SortOrder
    allowsExternalEntry?: SortOrder
    verifiedRoleId?: SortOrderInput | SortOrder
    moderatorRoleId?: SortOrderInput | SortOrder
    usesUowboNet?: SortOrder
    guildsId?: SortOrder
    _count?: GuildSettingsCountOrderByAggregateInput
    _max?: GuildSettingsMaxOrderByAggregateInput
    _min?: GuildSettingsMinOrderByAggregateInput
  }

  export type GuildSettingsScalarWhereWithAggregatesInput = {
    AND?: GuildSettingsScalarWhereWithAggregatesInput | GuildSettingsScalarWhereWithAggregatesInput[]
    OR?: GuildSettingsScalarWhereWithAggregatesInput[]
    NOT?: GuildSettingsScalarWhereWithAggregatesInput | GuildSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuildSettings"> | string
    allowsEmailEntry?: BoolWithAggregatesFilter<"GuildSettings"> | boolean
    allowsBiometricEntry?: BoolWithAggregatesFilter<"GuildSettings"> | boolean
    allowsExternalEntry?: BoolWithAggregatesFilter<"GuildSettings"> | boolean
    verifiedRoleId?: StringNullableWithAggregatesFilter<"GuildSettings"> | string | null
    moderatorRoleId?: StringNullableWithAggregatesFilter<"GuildSettings"> | string | null
    usesUowboNet?: BoolWithAggregatesFilter<"GuildSettings"> | boolean
    guildsId?: StringWithAggregatesFilter<"GuildSettings"> | string
  }

  export type GuildUserWhereInput = {
    AND?: GuildUserWhereInput | GuildUserWhereInput[]
    OR?: GuildUserWhereInput[]
    NOT?: GuildUserWhereInput | GuildUserWhereInput[]
    id?: StringFilter<"GuildUser"> | string
    guildsId?: StringNullableFilter<"GuildUser"> | string | null
    discordUserId?: StringNullableFilter<"GuildUser"> | string | null
    isMod?: BoolFilter<"GuildUser"> | boolean
    isOwner?: BoolFilter<"GuildUser"> | boolean
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
    messages?: GuildMessageListRelationFilter
  }

  export type GuildUserOrderByWithRelationInput = {
    id?: SortOrder
    guildsId?: SortOrderInput | SortOrder
    discordUserId?: SortOrderInput | SortOrder
    isMod?: SortOrder
    isOwner?: SortOrder
    Guilds?: GuildsOrderByWithRelationInput
    DiscordUser?: DiscordUserOrderByWithRelationInput
    messages?: GuildMessageOrderByRelationAggregateInput
  }

  export type GuildUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildsId_discordUserId?: GuildUserGuildsIdDiscordUserIdCompoundUniqueInput
    AND?: GuildUserWhereInput | GuildUserWhereInput[]
    OR?: GuildUserWhereInput[]
    NOT?: GuildUserWhereInput | GuildUserWhereInput[]
    guildsId?: StringNullableFilter<"GuildUser"> | string | null
    discordUserId?: StringNullableFilter<"GuildUser"> | string | null
    isMod?: BoolFilter<"GuildUser"> | boolean
    isOwner?: BoolFilter<"GuildUser"> | boolean
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
    messages?: GuildMessageListRelationFilter
  }, "id" | "guildsId_discordUserId">

  export type GuildUserOrderByWithAggregationInput = {
    id?: SortOrder
    guildsId?: SortOrderInput | SortOrder
    discordUserId?: SortOrderInput | SortOrder
    isMod?: SortOrder
    isOwner?: SortOrder
    _count?: GuildUserCountOrderByAggregateInput
    _max?: GuildUserMaxOrderByAggregateInput
    _min?: GuildUserMinOrderByAggregateInput
  }

  export type GuildUserScalarWhereWithAggregatesInput = {
    AND?: GuildUserScalarWhereWithAggregatesInput | GuildUserScalarWhereWithAggregatesInput[]
    OR?: GuildUserScalarWhereWithAggregatesInput[]
    NOT?: GuildUserScalarWhereWithAggregatesInput | GuildUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuildUser"> | string
    guildsId?: StringNullableWithAggregatesFilter<"GuildUser"> | string | null
    discordUserId?: StringNullableWithAggregatesFilter<"GuildUser"> | string | null
    isMod?: BoolWithAggregatesFilter<"GuildUser"> | boolean
    isOwner?: BoolWithAggregatesFilter<"GuildUser"> | boolean
  }

  export type GuildMessageWhereInput = {
    AND?: GuildMessageWhereInput | GuildMessageWhereInput[]
    OR?: GuildMessageWhereInput[]
    NOT?: GuildMessageWhereInput | GuildMessageWhereInput[]
    id?: StringFilter<"GuildMessage"> | string
    message?: StringNullableFilter<"GuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"GuildMessage"> | string | null
    guildUserId?: StringNullableFilter<"GuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"GuildMessage"> | string | null
    createdAt?: DateTimeFilter<"GuildMessage"> | Date | string
    mentions?: GuildMessageListRelationFilter
    parentMessage?: XOR<GuildMessageNullableScalarRelationFilter, GuildMessageWhereInput> | null
    GuildUser?: XOR<GuildUserNullableScalarRelationFilter, GuildUserWhereInput> | null
  }

  export type GuildMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    parentMessageId?: SortOrderInput | SortOrder
    guildUserId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mentions?: GuildMessageOrderByRelationAggregateInput
    parentMessage?: GuildMessageOrderByWithRelationInput
    GuildUser?: GuildUserOrderByWithRelationInput
  }

  export type GuildMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuildMessageWhereInput | GuildMessageWhereInput[]
    OR?: GuildMessageWhereInput[]
    NOT?: GuildMessageWhereInput | GuildMessageWhereInput[]
    message?: StringNullableFilter<"GuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"GuildMessage"> | string | null
    guildUserId?: StringNullableFilter<"GuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"GuildMessage"> | string | null
    createdAt?: DateTimeFilter<"GuildMessage"> | Date | string
    mentions?: GuildMessageListRelationFilter
    parentMessage?: XOR<GuildMessageNullableScalarRelationFilter, GuildMessageWhereInput> | null
    GuildUser?: XOR<GuildUserNullableScalarRelationFilter, GuildUserWhereInput> | null
  }, "id">

  export type GuildMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    parentMessageId?: SortOrderInput | SortOrder
    guildUserId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GuildMessageCountOrderByAggregateInput
    _max?: GuildMessageMaxOrderByAggregateInput
    _min?: GuildMessageMinOrderByAggregateInput
  }

  export type GuildMessageScalarWhereWithAggregatesInput = {
    AND?: GuildMessageScalarWhereWithAggregatesInput | GuildMessageScalarWhereWithAggregatesInput[]
    OR?: GuildMessageScalarWhereWithAggregatesInput[]
    NOT?: GuildMessageScalarWhereWithAggregatesInput | GuildMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuildMessage"> | string
    message?: StringNullableWithAggregatesFilter<"GuildMessage"> | string | null
    parentMessageId?: StringNullableWithAggregatesFilter<"GuildMessage"> | string | null
    guildUserId?: StringNullableWithAggregatesFilter<"GuildMessage"> | string | null
    attachmentUrl?: StringNullableWithAggregatesFilter<"GuildMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GuildMessage"> | Date | string
  }

  export type DiscordUserWhereInput = {
    AND?: DiscordUserWhereInput | DiscordUserWhereInput[]
    OR?: DiscordUserWhereInput[]
    NOT?: DiscordUserWhereInput | DiscordUserWhereInput[]
    id?: StringFilter<"DiscordUser"> | string
    discordId?: StringFilter<"DiscordUser"> | string
    avatar?: StringNullableFilter<"DiscordUser"> | string | null
    username?: StringFilter<"DiscordUser"> | string
    createdAt?: DateTimeFilter<"DiscordUser"> | Date | string
    tokens?: TokenListRelationFilter
    guilds?: GuildUserListRelationFilter
    link?: DiscordUniversityListRelationFilter
  }

  export type DiscordUserOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
    guilds?: GuildUserOrderByRelationAggregateInput
    link?: DiscordUniversityOrderByRelationAggregateInput
  }

  export type DiscordUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordId?: string
    AND?: DiscordUserWhereInput | DiscordUserWhereInput[]
    OR?: DiscordUserWhereInput[]
    NOT?: DiscordUserWhereInput | DiscordUserWhereInput[]
    avatar?: StringNullableFilter<"DiscordUser"> | string | null
    username?: StringFilter<"DiscordUser"> | string
    createdAt?: DateTimeFilter<"DiscordUser"> | Date | string
    tokens?: TokenListRelationFilter
    guilds?: GuildUserListRelationFilter
    link?: DiscordUniversityListRelationFilter
  }, "id" | "discordId">

  export type DiscordUserOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    avatar?: SortOrderInput | SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    _count?: DiscordUserCountOrderByAggregateInput
    _max?: DiscordUserMaxOrderByAggregateInput
    _min?: DiscordUserMinOrderByAggregateInput
  }

  export type DiscordUserScalarWhereWithAggregatesInput = {
    AND?: DiscordUserScalarWhereWithAggregatesInput | DiscordUserScalarWhereWithAggregatesInput[]
    OR?: DiscordUserScalarWhereWithAggregatesInput[]
    NOT?: DiscordUserScalarWhereWithAggregatesInput | DiscordUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordUser"> | string
    discordId?: StringWithAggregatesFilter<"DiscordUser"> | string
    avatar?: StringNullableWithAggregatesFilter<"DiscordUser"> | string | null
    username?: StringWithAggregatesFilter<"DiscordUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiscordUser"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    discordUserId?: StringNullableFilter<"Token"> | string | null
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    DiscordUser?: DiscordUserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    createdAt?: DateTimeFilter<"Token"> | Date | string
    discordUserId?: StringNullableFilter<"Token"> | string | null
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    discordUserId?: StringNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type DiscordUniversityWhereInput = {
    AND?: DiscordUniversityWhereInput | DiscordUniversityWhereInput[]
    OR?: DiscordUniversityWhereInput[]
    NOT?: DiscordUniversityWhereInput | DiscordUniversityWhereInput[]
    id?: StringFilter<"DiscordUniversity"> | string
    discordUserId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailVerificationId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailCode?: StringNullableFilter<"DiscordUniversity"> | string | null
    biometricEntryId?: StringNullableFilter<"DiscordUniversity"> | string | null
    fullName?: StringNullableFilter<"DiscordUniversity"> | string | null
    isExternal?: BoolFilter<"DiscordUniversity"> | boolean
    helperId?: StringNullableFilter<"DiscordUniversity"> | string | null
    helperCode?: StringNullableFilter<"DiscordUniversity"> | string | null
    studentId?: StringNullableFilter<"DiscordUniversity"> | string | null
    isVerified?: BoolFilter<"DiscordUniversity"> | boolean
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
    emailVerification?: XOR<EmailVerificationNullableScalarRelationFilter, EmailVerificationWhereInput> | null
    BiometricEntry?: XOR<BiometricEntryNullableScalarRelationFilter, BiometricEntryWhereInput> | null
    externalsHelped?: DiscordUniversityListRelationFilter
    helper?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
    authorityHits?: AuthorityHitListRelationFilter
    Guilds?: GuildsListRelationFilter
  }

  export type DiscordUniversityOrderByWithRelationInput = {
    id?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    emailVerificationId?: SortOrderInput | SortOrder
    emailCode?: SortOrderInput | SortOrder
    biometricEntryId?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    isExternal?: SortOrder
    helperId?: SortOrderInput | SortOrder
    helperCode?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    DiscordUser?: DiscordUserOrderByWithRelationInput
    emailVerification?: EmailVerificationOrderByWithRelationInput
    BiometricEntry?: BiometricEntryOrderByWithRelationInput
    externalsHelped?: DiscordUniversityOrderByRelationAggregateInput
    helper?: DiscordUniversityOrderByWithRelationInput
    authorityHits?: AuthorityHitOrderByRelationAggregateInput
    Guilds?: GuildsOrderByRelationAggregateInput
  }

  export type DiscordUniversityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    helperCode?: string
    studentId?: string
    AND?: DiscordUniversityWhereInput | DiscordUniversityWhereInput[]
    OR?: DiscordUniversityWhereInput[]
    NOT?: DiscordUniversityWhereInput | DiscordUniversityWhereInput[]
    discordUserId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailVerificationId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailCode?: StringNullableFilter<"DiscordUniversity"> | string | null
    biometricEntryId?: StringNullableFilter<"DiscordUniversity"> | string | null
    fullName?: StringNullableFilter<"DiscordUniversity"> | string | null
    isExternal?: BoolFilter<"DiscordUniversity"> | boolean
    helperId?: StringNullableFilter<"DiscordUniversity"> | string | null
    isVerified?: BoolFilter<"DiscordUniversity"> | boolean
    DiscordUser?: XOR<DiscordUserNullableScalarRelationFilter, DiscordUserWhereInput> | null
    emailVerification?: XOR<EmailVerificationNullableScalarRelationFilter, EmailVerificationWhereInput> | null
    BiometricEntry?: XOR<BiometricEntryNullableScalarRelationFilter, BiometricEntryWhereInput> | null
    externalsHelped?: DiscordUniversityListRelationFilter
    helper?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
    authorityHits?: AuthorityHitListRelationFilter
    Guilds?: GuildsListRelationFilter
  }, "id" | "helperCode" | "studentId">

  export type DiscordUniversityOrderByWithAggregationInput = {
    id?: SortOrder
    discordUserId?: SortOrderInput | SortOrder
    emailVerificationId?: SortOrderInput | SortOrder
    emailCode?: SortOrderInput | SortOrder
    biometricEntryId?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    isExternal?: SortOrder
    helperId?: SortOrderInput | SortOrder
    helperCode?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    _count?: DiscordUniversityCountOrderByAggregateInput
    _max?: DiscordUniversityMaxOrderByAggregateInput
    _min?: DiscordUniversityMinOrderByAggregateInput
  }

  export type DiscordUniversityScalarWhereWithAggregatesInput = {
    AND?: DiscordUniversityScalarWhereWithAggregatesInput | DiscordUniversityScalarWhereWithAggregatesInput[]
    OR?: DiscordUniversityScalarWhereWithAggregatesInput[]
    NOT?: DiscordUniversityScalarWhereWithAggregatesInput | DiscordUniversityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordUniversity"> | string
    discordUserId?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    emailVerificationId?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    emailCode?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    biometricEntryId?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    isExternal?: BoolWithAggregatesFilter<"DiscordUniversity"> | boolean
    helperId?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    helperCode?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    studentId?: StringNullableWithAggregatesFilter<"DiscordUniversity"> | string | null
    isVerified?: BoolWithAggregatesFilter<"DiscordUniversity"> | boolean
  }

  export type AuthorityHitWhereInput = {
    AND?: AuthorityHitWhereInput | AuthorityHitWhereInput[]
    OR?: AuthorityHitWhereInput[]
    NOT?: AuthorityHitWhereInput | AuthorityHitWhereInput[]
    id?: StringFilter<"AuthorityHit"> | string
    discordUniversityId?: StringNullableFilter<"AuthorityHit"> | string | null
    guildsId?: StringNullableFilter<"AuthorityHit"> | string | null
    federated?: EnumFederatedFilter<"AuthorityHit"> | $Enums.Federated
    reason?: StringFilter<"AuthorityHit"> | string
    type?: EnumHitTypeFilter<"AuthorityHit"> | $Enums.HitType
    createdAt?: DateTimeFilter<"AuthorityHit"> | Date | string
    DiscordUniversity?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
  }

  export type AuthorityHitOrderByWithRelationInput = {
    id?: SortOrder
    discordUniversityId?: SortOrderInput | SortOrder
    guildsId?: SortOrderInput | SortOrder
    federated?: SortOrder
    reason?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    DiscordUniversity?: DiscordUniversityOrderByWithRelationInput
    Guilds?: GuildsOrderByWithRelationInput
  }

  export type AuthorityHitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorityHitWhereInput | AuthorityHitWhereInput[]
    OR?: AuthorityHitWhereInput[]
    NOT?: AuthorityHitWhereInput | AuthorityHitWhereInput[]
    discordUniversityId?: StringNullableFilter<"AuthorityHit"> | string | null
    guildsId?: StringNullableFilter<"AuthorityHit"> | string | null
    federated?: EnumFederatedFilter<"AuthorityHit"> | $Enums.Federated
    reason?: StringFilter<"AuthorityHit"> | string
    type?: EnumHitTypeFilter<"AuthorityHit"> | $Enums.HitType
    createdAt?: DateTimeFilter<"AuthorityHit"> | Date | string
    DiscordUniversity?: XOR<DiscordUniversityNullableScalarRelationFilter, DiscordUniversityWhereInput> | null
    Guilds?: XOR<GuildsNullableScalarRelationFilter, GuildsWhereInput> | null
  }, "id">

  export type AuthorityHitOrderByWithAggregationInput = {
    id?: SortOrder
    discordUniversityId?: SortOrderInput | SortOrder
    guildsId?: SortOrderInput | SortOrder
    federated?: SortOrder
    reason?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: AuthorityHitCountOrderByAggregateInput
    _max?: AuthorityHitMaxOrderByAggregateInput
    _min?: AuthorityHitMinOrderByAggregateInput
  }

  export type AuthorityHitScalarWhereWithAggregatesInput = {
    AND?: AuthorityHitScalarWhereWithAggregatesInput | AuthorityHitScalarWhereWithAggregatesInput[]
    OR?: AuthorityHitScalarWhereWithAggregatesInput[]
    NOT?: AuthorityHitScalarWhereWithAggregatesInput | AuthorityHitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthorityHit"> | string
    discordUniversityId?: StringNullableWithAggregatesFilter<"AuthorityHit"> | string | null
    guildsId?: StringNullableWithAggregatesFilter<"AuthorityHit"> | string | null
    federated?: EnumFederatedWithAggregatesFilter<"AuthorityHit"> | $Enums.Federated
    reason?: StringWithAggregatesFilter<"AuthorityHit"> | string
    type?: EnumHitTypeWithAggregatesFilter<"AuthorityHit"> | $Enums.HitType
    createdAt?: DateTimeWithAggregatesFilter<"AuthorityHit"> | Date | string
  }

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    email?: StringFilter<"EmailVerification"> | string
    isVerified?: BoolFilter<"EmailVerification"> | boolean
    link?: DiscordUniversityListRelationFilter
  }

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    isVerified?: SortOrder
    link?: DiscordUniversityOrderByRelationAggregateInput
  }

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    isVerified?: BoolFilter<"EmailVerification"> | boolean
    link?: DiscordUniversityListRelationFilter
  }, "id" | "email">

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    isVerified?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
  }

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerification"> | string
    email?: StringWithAggregatesFilter<"EmailVerification"> | string
    isVerified?: BoolWithAggregatesFilter<"EmailVerification"> | boolean
  }

  export type BiometricEntryWhereInput = {
    AND?: BiometricEntryWhereInput | BiometricEntryWhereInput[]
    OR?: BiometricEntryWhereInput[]
    NOT?: BiometricEntryWhereInput | BiometricEntryWhereInput[]
    id?: StringFilter<"BiometricEntry"> | string
    universityID?: StringFilter<"BiometricEntry"> | string
    createdAt?: DateTimeFilter<"BiometricEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BiometricEntry"> | Date | string
    link?: DiscordUniversityListRelationFilter
  }

  export type BiometricEntryOrderByWithRelationInput = {
    id?: SortOrder
    universityID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    link?: DiscordUniversityOrderByRelationAggregateInput
  }

  export type BiometricEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BiometricEntryWhereInput | BiometricEntryWhereInput[]
    OR?: BiometricEntryWhereInput[]
    NOT?: BiometricEntryWhereInput | BiometricEntryWhereInput[]
    universityID?: StringFilter<"BiometricEntry"> | string
    createdAt?: DateTimeFilter<"BiometricEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BiometricEntry"> | Date | string
    link?: DiscordUniversityListRelationFilter
  }, "id">

  export type BiometricEntryOrderByWithAggregationInput = {
    id?: SortOrder
    universityID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BiometricEntryCountOrderByAggregateInput
    _max?: BiometricEntryMaxOrderByAggregateInput
    _min?: BiometricEntryMinOrderByAggregateInput
  }

  export type BiometricEntryScalarWhereWithAggregatesInput = {
    AND?: BiometricEntryScalarWhereWithAggregatesInput | BiometricEntryScalarWhereWithAggregatesInput[]
    OR?: BiometricEntryScalarWhereWithAggregatesInput[]
    NOT?: BiometricEntryScalarWhereWithAggregatesInput | BiometricEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BiometricEntry"> | string
    universityID?: StringWithAggregatesFilter<"BiometricEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BiometricEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BiometricEntry"> | Date | string
  }

  export type GuildsCreateInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogCreateNestedManyWithoutGuildsInput
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutGuildsInput
  }

  export type GuildsUncheckedCreateInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
    members?: GuildUserUncheckedCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUpdateManyWithoutGuildsNestedInput
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GuildUserUncheckedUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type GuildsCreateManyInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
  }

  export type GuildsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildLogCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    Guilds?: GuildsCreateNestedOneWithoutGuildLogInput
  }

  export type GuildLogUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    guildsId?: string | null
  }

  export type GuildLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Guilds?: GuildsUpdateOneWithoutGuildLogNestedInput
  }

  export type GuildLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildLogCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
    guildsId?: string | null
  }

  export type GuildLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingsCreateInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
    Guilds: GuildsCreateNestedOneWithoutSettingsInput
  }

  export type GuildSettingsUncheckedCreateInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
    guildsId: string
  }

  export type GuildSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
    Guilds?: GuildsUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type GuildSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
    guildsId?: StringFieldUpdateOperationsInput | string
  }

  export type GuildSettingsCreateManyInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
    guildsId: string
  }

  export type GuildSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
    guildsId?: StringFieldUpdateOperationsInput | string
  }

  export type GuildUserCreateInput = {
    id?: string
    isMod?: boolean
    isOwner?: boolean
    Guilds?: GuildsCreateNestedOneWithoutMembersInput
    DiscordUser?: DiscordUserCreateNestedOneWithoutGuildsInput
    messages?: GuildMessageCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserUncheckedCreateInput = {
    id?: string
    guildsId?: string | null
    discordUserId?: string | null
    isMod?: boolean
    isOwner?: boolean
    messages?: GuildMessageUncheckedCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    Guilds?: GuildsUpdateOneWithoutMembersNestedInput
    DiscordUser?: DiscordUserUpdateOneWithoutGuildsNestedInput
    messages?: GuildMessageUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    messages?: GuildMessageUncheckedUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserCreateManyInput = {
    id?: string
    guildsId?: string | null
    discordUserId?: string | null
    isMod?: boolean
    isOwner?: boolean
  }

  export type GuildUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildMessageCreateInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageCreateNestedManyWithoutParentMessageInput
    parentMessage?: GuildMessageCreateNestedOneWithoutMentionsInput
    GuildUser?: GuildUserCreateNestedOneWithoutMessagesInput
  }

  export type GuildMessageUncheckedCreateInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    guildUserId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type GuildMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUpdateManyWithoutParentMessageNestedInput
    parentMessage?: GuildMessageUpdateOneWithoutMentionsNestedInput
    GuildUser?: GuildUserUpdateOneWithoutMessagesNestedInput
  }

  export type GuildMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    guildUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type GuildMessageCreateManyInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    guildUserId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type GuildMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    guildUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordUserCreateInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutDiscordUserInput
    guilds?: GuildUserCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserUncheckedCreateInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutDiscordUserInput
    guilds?: GuildUserUncheckedCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityUncheckedCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutDiscordUserNestedInput
    guilds?: GuildUserUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutDiscordUserNestedInput
    guilds?: GuildUserUncheckedUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUncheckedUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserCreateManyInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
  }

  export type DiscordUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    DiscordUser?: DiscordUserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    discordUserId?: string | null
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiscordUser?: DiscordUserUpdateOneWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    createdAt?: Date | string
    discordUserId?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordUniversityCreateInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityCreateManyInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
  }

  export type DiscordUniversityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordUniversityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorityHitCreateInput = {
    id?: string
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutAuthorityHitsInput
    Guilds?: GuildsCreateNestedOneWithoutAuthorityHitsInput
  }

  export type AuthorityHitUncheckedCreateInput = {
    id?: string
    discordUniversityId?: string | null
    guildsId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type AuthorityHitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutAuthorityHitsNestedInput
    Guilds?: GuildsUpdateOneWithoutAuthorityHitsNestedInput
  }

  export type AuthorityHitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorityHitCreateManyInput = {
    id?: string
    discordUniversityId?: string | null
    guildsId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type AuthorityHitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorityHitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateInput = {
    id?: string
    email: string
    isVerified?: boolean
    link?: DiscordUniversityCreateNestedManyWithoutEmailVerificationInput
  }

  export type EmailVerificationUncheckedCreateInput = {
    id?: string
    email: string
    isVerified?: boolean
    link?: DiscordUniversityUncheckedCreateNestedManyWithoutEmailVerificationInput
  }

  export type EmailVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    link?: DiscordUniversityUpdateManyWithoutEmailVerificationNestedInput
  }

  export type EmailVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    link?: DiscordUniversityUncheckedUpdateManyWithoutEmailVerificationNestedInput
  }

  export type EmailVerificationCreateManyInput = {
    id?: string
    email: string
    isVerified?: boolean
  }

  export type EmailVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BiometricEntryCreateInput = {
    id?: string
    universityID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    link?: DiscordUniversityCreateNestedManyWithoutBiometricEntryInput
  }

  export type BiometricEntryUncheckedCreateInput = {
    id?: string
    universityID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    link?: DiscordUniversityUncheckedCreateNestedManyWithoutBiometricEntryInput
  }

  export type BiometricEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: DiscordUniversityUpdateManyWithoutBiometricEntryNestedInput
  }

  export type BiometricEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: DiscordUniversityUncheckedUpdateManyWithoutBiometricEntryNestedInput
  }

  export type BiometricEntryCreateManyInput = {
    id?: string
    universityID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BiometricEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuildUserListRelationFilter = {
    every?: GuildUserWhereInput
    some?: GuildUserWhereInput
    none?: GuildUserWhereInput
  }

  export type GuildSettingsListRelationFilter = {
    every?: GuildSettingsWhereInput
    some?: GuildSettingsWhereInput
    none?: GuildSettingsWhereInput
  }

  export type AuthorityHitListRelationFilter = {
    every?: AuthorityHitWhereInput
    some?: AuthorityHitWhereInput
    none?: AuthorityHitWhereInput
  }

  export type GuildLogListRelationFilter = {
    every?: GuildLogWhereInput
    some?: GuildLogWhereInput
    none?: GuildLogWhereInput
  }

  export type DiscordUniversityNullableScalarRelationFilter = {
    is?: DiscordUniversityWhereInput | null
    isNot?: DiscordUniversityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuildUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorityHitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildsCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    guildName?: SortOrder
    guildIcon?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discordUniversityId?: SortOrder
  }

  export type GuildsMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    guildName?: SortOrder
    guildIcon?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discordUniversityId?: SortOrder
  }

  export type GuildsMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    guildName?: SortOrder
    guildIcon?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discordUniversityId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GuildsNullableScalarRelationFilter = {
    is?: GuildsWhereInput | null
    isNot?: GuildsWhereInput | null
  }

  export type GuildLogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    guildsId?: SortOrder
  }

  export type GuildLogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    guildsId?: SortOrder
  }

  export type GuildLogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    guildsId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GuildsScalarRelationFilter = {
    is?: GuildsWhereInput
    isNot?: GuildsWhereInput
  }

  export type GuildSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    allowsEmailEntry?: SortOrder
    allowsBiometricEntry?: SortOrder
    allowsExternalEntry?: SortOrder
    verifiedRoleId?: SortOrder
    moderatorRoleId?: SortOrder
    usesUowboNet?: SortOrder
    guildsId?: SortOrder
  }

  export type GuildSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    allowsEmailEntry?: SortOrder
    allowsBiometricEntry?: SortOrder
    allowsExternalEntry?: SortOrder
    verifiedRoleId?: SortOrder
    moderatorRoleId?: SortOrder
    usesUowboNet?: SortOrder
    guildsId?: SortOrder
  }

  export type GuildSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    allowsEmailEntry?: SortOrder
    allowsBiometricEntry?: SortOrder
    allowsExternalEntry?: SortOrder
    verifiedRoleId?: SortOrder
    moderatorRoleId?: SortOrder
    usesUowboNet?: SortOrder
    guildsId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DiscordUserNullableScalarRelationFilter = {
    is?: DiscordUserWhereInput | null
    isNot?: DiscordUserWhereInput | null
  }

  export type GuildMessageListRelationFilter = {
    every?: GuildMessageWhereInput
    some?: GuildMessageWhereInput
    none?: GuildMessageWhereInput
  }

  export type GuildMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildUserGuildsIdDiscordUserIdCompoundUniqueInput = {
    guildsId: string
    discordUserId: string
  }

  export type GuildUserCountOrderByAggregateInput = {
    id?: SortOrder
    guildsId?: SortOrder
    discordUserId?: SortOrder
    isMod?: SortOrder
    isOwner?: SortOrder
  }

  export type GuildUserMaxOrderByAggregateInput = {
    id?: SortOrder
    guildsId?: SortOrder
    discordUserId?: SortOrder
    isMod?: SortOrder
    isOwner?: SortOrder
  }

  export type GuildUserMinOrderByAggregateInput = {
    id?: SortOrder
    guildsId?: SortOrder
    discordUserId?: SortOrder
    isMod?: SortOrder
    isOwner?: SortOrder
  }

  export type GuildMessageNullableScalarRelationFilter = {
    is?: GuildMessageWhereInput | null
    isNot?: GuildMessageWhereInput | null
  }

  export type GuildUserNullableScalarRelationFilter = {
    is?: GuildUserWhereInput | null
    isNot?: GuildUserWhereInput | null
  }

  export type GuildMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    guildUserId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GuildMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    guildUserId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type GuildMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    guildUserId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type DiscordUniversityListRelationFilter = {
    every?: DiscordUniversityWhereInput
    some?: DiscordUniversityWhereInput
    none?: DiscordUniversityWhereInput
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordUniversityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordUserCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscordUserMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscordUserMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    discordUserId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    discordUserId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    discordUserId?: SortOrder
  }

  export type EmailVerificationNullableScalarRelationFilter = {
    is?: EmailVerificationWhereInput | null
    isNot?: EmailVerificationWhereInput | null
  }

  export type BiometricEntryNullableScalarRelationFilter = {
    is?: BiometricEntryWhereInput | null
    isNot?: BiometricEntryWhereInput | null
  }

  export type GuildsListRelationFilter = {
    every?: GuildsWhereInput
    some?: GuildsWhereInput
    none?: GuildsWhereInput
  }

  export type GuildsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordUniversityCountOrderByAggregateInput = {
    id?: SortOrder
    discordUserId?: SortOrder
    emailVerificationId?: SortOrder
    emailCode?: SortOrder
    biometricEntryId?: SortOrder
    fullName?: SortOrder
    isExternal?: SortOrder
    helperId?: SortOrder
    helperCode?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
  }

  export type DiscordUniversityMaxOrderByAggregateInput = {
    id?: SortOrder
    discordUserId?: SortOrder
    emailVerificationId?: SortOrder
    emailCode?: SortOrder
    biometricEntryId?: SortOrder
    fullName?: SortOrder
    isExternal?: SortOrder
    helperId?: SortOrder
    helperCode?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
  }

  export type DiscordUniversityMinOrderByAggregateInput = {
    id?: SortOrder
    discordUserId?: SortOrder
    emailVerificationId?: SortOrder
    emailCode?: SortOrder
    biometricEntryId?: SortOrder
    fullName?: SortOrder
    isExternal?: SortOrder
    helperId?: SortOrder
    helperCode?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
  }

  export type EnumFederatedFilter<$PrismaModel = never> = {
    equals?: $Enums.Federated | EnumFederatedFieldRefInput<$PrismaModel>
    in?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    not?: NestedEnumFederatedFilter<$PrismaModel> | $Enums.Federated
  }

  export type EnumHitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HitType | EnumHitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHitTypeFilter<$PrismaModel> | $Enums.HitType
  }

  export type AuthorityHitCountOrderByAggregateInput = {
    id?: SortOrder
    discordUniversityId?: SortOrder
    guildsId?: SortOrder
    federated?: SortOrder
    reason?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorityHitMaxOrderByAggregateInput = {
    id?: SortOrder
    discordUniversityId?: SortOrder
    guildsId?: SortOrder
    federated?: SortOrder
    reason?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorityHitMinOrderByAggregateInput = {
    id?: SortOrder
    discordUniversityId?: SortOrder
    guildsId?: SortOrder
    federated?: SortOrder
    reason?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFederatedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Federated | EnumFederatedFieldRefInput<$PrismaModel>
    in?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    not?: NestedEnumFederatedWithAggregatesFilter<$PrismaModel> | $Enums.Federated
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFederatedFilter<$PrismaModel>
    _max?: NestedEnumFederatedFilter<$PrismaModel>
  }

  export type EnumHitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HitType | EnumHitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHitTypeWithAggregatesFilter<$PrismaModel> | $Enums.HitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHitTypeFilter<$PrismaModel>
    _max?: NestedEnumHitTypeFilter<$PrismaModel>
  }

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isVerified?: SortOrder
  }

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isVerified?: SortOrder
  }

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isVerified?: SortOrder
  }

  export type BiometricEntryCountOrderByAggregateInput = {
    id?: SortOrder
    universityID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BiometricEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    universityID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BiometricEntryMinOrderByAggregateInput = {
    id?: SortOrder
    universityID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuildUserCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput> | GuildUserCreateWithoutGuildsInput[] | GuildUserUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutGuildsInput | GuildUserCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildUserCreateManyGuildsInputEnvelope
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
  }

  export type GuildSettingsCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput> | GuildSettingsCreateWithoutGuildsInput[] | GuildSettingsUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildSettingsCreateOrConnectWithoutGuildsInput | GuildSettingsCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildSettingsCreateManyGuildsInputEnvelope
    connect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
  }

  export type AuthorityHitCreateNestedManyWithoutGuildsInput = {
    create?: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput> | AuthorityHitCreateWithoutGuildsInput[] | AuthorityHitUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutGuildsInput | AuthorityHitCreateOrConnectWithoutGuildsInput[]
    createMany?: AuthorityHitCreateManyGuildsInputEnvelope
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
  }

  export type GuildLogCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput> | GuildLogCreateWithoutGuildsInput[] | GuildLogUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildLogCreateOrConnectWithoutGuildsInput | GuildLogCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildLogCreateManyGuildsInputEnvelope
    connect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
  }

  export type DiscordUniversityCreateNestedOneWithoutGuildsInput = {
    create?: XOR<DiscordUniversityCreateWithoutGuildsInput, DiscordUniversityUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutGuildsInput
    connect?: DiscordUniversityWhereUniqueInput
  }

  export type GuildUserUncheckedCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput> | GuildUserCreateWithoutGuildsInput[] | GuildUserUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutGuildsInput | GuildUserCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildUserCreateManyGuildsInputEnvelope
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
  }

  export type GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput> | GuildSettingsCreateWithoutGuildsInput[] | GuildSettingsUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildSettingsCreateOrConnectWithoutGuildsInput | GuildSettingsCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildSettingsCreateManyGuildsInputEnvelope
    connect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
  }

  export type AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput = {
    create?: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput> | AuthorityHitCreateWithoutGuildsInput[] | AuthorityHitUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutGuildsInput | AuthorityHitCreateOrConnectWithoutGuildsInput[]
    createMany?: AuthorityHitCreateManyGuildsInputEnvelope
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
  }

  export type GuildLogUncheckedCreateNestedManyWithoutGuildsInput = {
    create?: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput> | GuildLogCreateWithoutGuildsInput[] | GuildLogUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildLogCreateOrConnectWithoutGuildsInput | GuildLogCreateOrConnectWithoutGuildsInput[]
    createMany?: GuildLogCreateManyGuildsInputEnvelope
    connect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuildUserUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput> | GuildUserCreateWithoutGuildsInput[] | GuildUserUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutGuildsInput | GuildUserCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildUserUpsertWithWhereUniqueWithoutGuildsInput | GuildUserUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildUserCreateManyGuildsInputEnvelope
    set?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    disconnect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    delete?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    update?: GuildUserUpdateWithWhereUniqueWithoutGuildsInput | GuildUserUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildUserUpdateManyWithWhereWithoutGuildsInput | GuildUserUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
  }

  export type GuildSettingsUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput> | GuildSettingsCreateWithoutGuildsInput[] | GuildSettingsUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildSettingsCreateOrConnectWithoutGuildsInput | GuildSettingsCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildSettingsUpsertWithWhereUniqueWithoutGuildsInput | GuildSettingsUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildSettingsCreateManyGuildsInputEnvelope
    set?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    disconnect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    delete?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    connect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    update?: GuildSettingsUpdateWithWhereUniqueWithoutGuildsInput | GuildSettingsUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildSettingsUpdateManyWithWhereWithoutGuildsInput | GuildSettingsUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildSettingsScalarWhereInput | GuildSettingsScalarWhereInput[]
  }

  export type AuthorityHitUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput> | AuthorityHitCreateWithoutGuildsInput[] | AuthorityHitUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutGuildsInput | AuthorityHitCreateOrConnectWithoutGuildsInput[]
    upsert?: AuthorityHitUpsertWithWhereUniqueWithoutGuildsInput | AuthorityHitUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: AuthorityHitCreateManyGuildsInputEnvelope
    set?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    disconnect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    delete?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    update?: AuthorityHitUpdateWithWhereUniqueWithoutGuildsInput | AuthorityHitUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: AuthorityHitUpdateManyWithWhereWithoutGuildsInput | AuthorityHitUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
  }

  export type GuildLogUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput> | GuildLogCreateWithoutGuildsInput[] | GuildLogUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildLogCreateOrConnectWithoutGuildsInput | GuildLogCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildLogUpsertWithWhereUniqueWithoutGuildsInput | GuildLogUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildLogCreateManyGuildsInputEnvelope
    set?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    disconnect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    delete?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    connect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    update?: GuildLogUpdateWithWhereUniqueWithoutGuildsInput | GuildLogUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildLogUpdateManyWithWhereWithoutGuildsInput | GuildLogUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildLogScalarWhereInput | GuildLogScalarWhereInput[]
  }

  export type DiscordUniversityUpdateOneWithoutGuildsNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutGuildsInput, DiscordUniversityUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutGuildsInput
    upsert?: DiscordUniversityUpsertWithoutGuildsInput
    disconnect?: DiscordUniversityWhereInput | boolean
    delete?: DiscordUniversityWhereInput | boolean
    connect?: DiscordUniversityWhereUniqueInput
    update?: XOR<XOR<DiscordUniversityUpdateToOneWithWhereWithoutGuildsInput, DiscordUniversityUpdateWithoutGuildsInput>, DiscordUniversityUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildUserUncheckedUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput> | GuildUserCreateWithoutGuildsInput[] | GuildUserUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutGuildsInput | GuildUserCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildUserUpsertWithWhereUniqueWithoutGuildsInput | GuildUserUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildUserCreateManyGuildsInputEnvelope
    set?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    disconnect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    delete?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    update?: GuildUserUpdateWithWhereUniqueWithoutGuildsInput | GuildUserUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildUserUpdateManyWithWhereWithoutGuildsInput | GuildUserUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
  }

  export type GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput> | GuildSettingsCreateWithoutGuildsInput[] | GuildSettingsUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildSettingsCreateOrConnectWithoutGuildsInput | GuildSettingsCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildSettingsUpsertWithWhereUniqueWithoutGuildsInput | GuildSettingsUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildSettingsCreateManyGuildsInputEnvelope
    set?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    disconnect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    delete?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    connect?: GuildSettingsWhereUniqueInput | GuildSettingsWhereUniqueInput[]
    update?: GuildSettingsUpdateWithWhereUniqueWithoutGuildsInput | GuildSettingsUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildSettingsUpdateManyWithWhereWithoutGuildsInput | GuildSettingsUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildSettingsScalarWhereInput | GuildSettingsScalarWhereInput[]
  }

  export type AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput> | AuthorityHitCreateWithoutGuildsInput[] | AuthorityHitUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutGuildsInput | AuthorityHitCreateOrConnectWithoutGuildsInput[]
    upsert?: AuthorityHitUpsertWithWhereUniqueWithoutGuildsInput | AuthorityHitUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: AuthorityHitCreateManyGuildsInputEnvelope
    set?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    disconnect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    delete?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    update?: AuthorityHitUpdateWithWhereUniqueWithoutGuildsInput | AuthorityHitUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: AuthorityHitUpdateManyWithWhereWithoutGuildsInput | AuthorityHitUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
  }

  export type GuildLogUncheckedUpdateManyWithoutGuildsNestedInput = {
    create?: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput> | GuildLogCreateWithoutGuildsInput[] | GuildLogUncheckedCreateWithoutGuildsInput[]
    connectOrCreate?: GuildLogCreateOrConnectWithoutGuildsInput | GuildLogCreateOrConnectWithoutGuildsInput[]
    upsert?: GuildLogUpsertWithWhereUniqueWithoutGuildsInput | GuildLogUpsertWithWhereUniqueWithoutGuildsInput[]
    createMany?: GuildLogCreateManyGuildsInputEnvelope
    set?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    disconnect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    delete?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    connect?: GuildLogWhereUniqueInput | GuildLogWhereUniqueInput[]
    update?: GuildLogUpdateWithWhereUniqueWithoutGuildsInput | GuildLogUpdateWithWhereUniqueWithoutGuildsInput[]
    updateMany?: GuildLogUpdateManyWithWhereWithoutGuildsInput | GuildLogUpdateManyWithWhereWithoutGuildsInput[]
    deleteMany?: GuildLogScalarWhereInput | GuildLogScalarWhereInput[]
  }

  export type GuildsCreateNestedOneWithoutGuildLogInput = {
    create?: XOR<GuildsCreateWithoutGuildLogInput, GuildsUncheckedCreateWithoutGuildLogInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutGuildLogInput
    connect?: GuildsWhereUniqueInput
  }

  export type GuildsUpdateOneWithoutGuildLogNestedInput = {
    create?: XOR<GuildsCreateWithoutGuildLogInput, GuildsUncheckedCreateWithoutGuildLogInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutGuildLogInput
    upsert?: GuildsUpsertWithoutGuildLogInput
    disconnect?: GuildsWhereInput | boolean
    delete?: GuildsWhereInput | boolean
    connect?: GuildsWhereUniqueInput
    update?: XOR<XOR<GuildsUpdateToOneWithWhereWithoutGuildLogInput, GuildsUpdateWithoutGuildLogInput>, GuildsUncheckedUpdateWithoutGuildLogInput>
  }

  export type GuildsCreateNestedOneWithoutSettingsInput = {
    create?: XOR<GuildsCreateWithoutSettingsInput, GuildsUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutSettingsInput
    connect?: GuildsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GuildsUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<GuildsCreateWithoutSettingsInput, GuildsUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutSettingsInput
    upsert?: GuildsUpsertWithoutSettingsInput
    connect?: GuildsWhereUniqueInput
    update?: XOR<XOR<GuildsUpdateToOneWithWhereWithoutSettingsInput, GuildsUpdateWithoutSettingsInput>, GuildsUncheckedUpdateWithoutSettingsInput>
  }

  export type GuildsCreateNestedOneWithoutMembersInput = {
    create?: XOR<GuildsCreateWithoutMembersInput, GuildsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutMembersInput
    connect?: GuildsWhereUniqueInput
  }

  export type DiscordUserCreateNestedOneWithoutGuildsInput = {
    create?: XOR<DiscordUserCreateWithoutGuildsInput, DiscordUserUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutGuildsInput
    connect?: DiscordUserWhereUniqueInput
  }

  export type GuildMessageCreateNestedManyWithoutGuildUserInput = {
    create?: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput> | GuildMessageCreateWithoutGuildUserInput[] | GuildMessageUncheckedCreateWithoutGuildUserInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutGuildUserInput | GuildMessageCreateOrConnectWithoutGuildUserInput[]
    createMany?: GuildMessageCreateManyGuildUserInputEnvelope
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
  }

  export type GuildMessageUncheckedCreateNestedManyWithoutGuildUserInput = {
    create?: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput> | GuildMessageCreateWithoutGuildUserInput[] | GuildMessageUncheckedCreateWithoutGuildUserInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutGuildUserInput | GuildMessageCreateOrConnectWithoutGuildUserInput[]
    createMany?: GuildMessageCreateManyGuildUserInputEnvelope
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
  }

  export type GuildsUpdateOneWithoutMembersNestedInput = {
    create?: XOR<GuildsCreateWithoutMembersInput, GuildsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutMembersInput
    upsert?: GuildsUpsertWithoutMembersInput
    disconnect?: GuildsWhereInput | boolean
    delete?: GuildsWhereInput | boolean
    connect?: GuildsWhereUniqueInput
    update?: XOR<XOR<GuildsUpdateToOneWithWhereWithoutMembersInput, GuildsUpdateWithoutMembersInput>, GuildsUncheckedUpdateWithoutMembersInput>
  }

  export type DiscordUserUpdateOneWithoutGuildsNestedInput = {
    create?: XOR<DiscordUserCreateWithoutGuildsInput, DiscordUserUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutGuildsInput
    upsert?: DiscordUserUpsertWithoutGuildsInput
    disconnect?: DiscordUserWhereInput | boolean
    delete?: DiscordUserWhereInput | boolean
    connect?: DiscordUserWhereUniqueInput
    update?: XOR<XOR<DiscordUserUpdateToOneWithWhereWithoutGuildsInput, DiscordUserUpdateWithoutGuildsInput>, DiscordUserUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildMessageUpdateManyWithoutGuildUserNestedInput = {
    create?: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput> | GuildMessageCreateWithoutGuildUserInput[] | GuildMessageUncheckedCreateWithoutGuildUserInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutGuildUserInput | GuildMessageCreateOrConnectWithoutGuildUserInput[]
    upsert?: GuildMessageUpsertWithWhereUniqueWithoutGuildUserInput | GuildMessageUpsertWithWhereUniqueWithoutGuildUserInput[]
    createMany?: GuildMessageCreateManyGuildUserInputEnvelope
    set?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    disconnect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    delete?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    update?: GuildMessageUpdateWithWhereUniqueWithoutGuildUserInput | GuildMessageUpdateWithWhereUniqueWithoutGuildUserInput[]
    updateMany?: GuildMessageUpdateManyWithWhereWithoutGuildUserInput | GuildMessageUpdateManyWithWhereWithoutGuildUserInput[]
    deleteMany?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
  }

  export type GuildMessageUncheckedUpdateManyWithoutGuildUserNestedInput = {
    create?: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput> | GuildMessageCreateWithoutGuildUserInput[] | GuildMessageUncheckedCreateWithoutGuildUserInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutGuildUserInput | GuildMessageCreateOrConnectWithoutGuildUserInput[]
    upsert?: GuildMessageUpsertWithWhereUniqueWithoutGuildUserInput | GuildMessageUpsertWithWhereUniqueWithoutGuildUserInput[]
    createMany?: GuildMessageCreateManyGuildUserInputEnvelope
    set?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    disconnect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    delete?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    update?: GuildMessageUpdateWithWhereUniqueWithoutGuildUserInput | GuildMessageUpdateWithWhereUniqueWithoutGuildUserInput[]
    updateMany?: GuildMessageUpdateManyWithWhereWithoutGuildUserInput | GuildMessageUpdateManyWithWhereWithoutGuildUserInput[]
    deleteMany?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
  }

  export type GuildMessageCreateNestedManyWithoutParentMessageInput = {
    create?: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput> | GuildMessageCreateWithoutParentMessageInput[] | GuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutParentMessageInput | GuildMessageCreateOrConnectWithoutParentMessageInput[]
    createMany?: GuildMessageCreateManyParentMessageInputEnvelope
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
  }

  export type GuildMessageCreateNestedOneWithoutMentionsInput = {
    create?: XOR<GuildMessageCreateWithoutMentionsInput, GuildMessageUncheckedCreateWithoutMentionsInput>
    connectOrCreate?: GuildMessageCreateOrConnectWithoutMentionsInput
    connect?: GuildMessageWhereUniqueInput
  }

  export type GuildUserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GuildUserCreateWithoutMessagesInput, GuildUserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GuildUserCreateOrConnectWithoutMessagesInput
    connect?: GuildUserWhereUniqueInput
  }

  export type GuildMessageUncheckedCreateNestedManyWithoutParentMessageInput = {
    create?: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput> | GuildMessageCreateWithoutParentMessageInput[] | GuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutParentMessageInput | GuildMessageCreateOrConnectWithoutParentMessageInput[]
    createMany?: GuildMessageCreateManyParentMessageInputEnvelope
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
  }

  export type GuildMessageUpdateManyWithoutParentMessageNestedInput = {
    create?: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput> | GuildMessageCreateWithoutParentMessageInput[] | GuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutParentMessageInput | GuildMessageCreateOrConnectWithoutParentMessageInput[]
    upsert?: GuildMessageUpsertWithWhereUniqueWithoutParentMessageInput | GuildMessageUpsertWithWhereUniqueWithoutParentMessageInput[]
    createMany?: GuildMessageCreateManyParentMessageInputEnvelope
    set?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    disconnect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    delete?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    update?: GuildMessageUpdateWithWhereUniqueWithoutParentMessageInput | GuildMessageUpdateWithWhereUniqueWithoutParentMessageInput[]
    updateMany?: GuildMessageUpdateManyWithWhereWithoutParentMessageInput | GuildMessageUpdateManyWithWhereWithoutParentMessageInput[]
    deleteMany?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
  }

  export type GuildMessageUpdateOneWithoutMentionsNestedInput = {
    create?: XOR<GuildMessageCreateWithoutMentionsInput, GuildMessageUncheckedCreateWithoutMentionsInput>
    connectOrCreate?: GuildMessageCreateOrConnectWithoutMentionsInput
    upsert?: GuildMessageUpsertWithoutMentionsInput
    disconnect?: GuildMessageWhereInput | boolean
    delete?: GuildMessageWhereInput | boolean
    connect?: GuildMessageWhereUniqueInput
    update?: XOR<XOR<GuildMessageUpdateToOneWithWhereWithoutMentionsInput, GuildMessageUpdateWithoutMentionsInput>, GuildMessageUncheckedUpdateWithoutMentionsInput>
  }

  export type GuildUserUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<GuildUserCreateWithoutMessagesInput, GuildUserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GuildUserCreateOrConnectWithoutMessagesInput
    upsert?: GuildUserUpsertWithoutMessagesInput
    disconnect?: GuildUserWhereInput | boolean
    delete?: GuildUserWhereInput | boolean
    connect?: GuildUserWhereUniqueInput
    update?: XOR<XOR<GuildUserUpdateToOneWithWhereWithoutMessagesInput, GuildUserUpdateWithoutMessagesInput>, GuildUserUncheckedUpdateWithoutMessagesInput>
  }

  export type GuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput = {
    create?: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput> | GuildMessageCreateWithoutParentMessageInput[] | GuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: GuildMessageCreateOrConnectWithoutParentMessageInput | GuildMessageCreateOrConnectWithoutParentMessageInput[]
    upsert?: GuildMessageUpsertWithWhereUniqueWithoutParentMessageInput | GuildMessageUpsertWithWhereUniqueWithoutParentMessageInput[]
    createMany?: GuildMessageCreateManyParentMessageInputEnvelope
    set?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    disconnect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    delete?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    connect?: GuildMessageWhereUniqueInput | GuildMessageWhereUniqueInput[]
    update?: GuildMessageUpdateWithWhereUniqueWithoutParentMessageInput | GuildMessageUpdateWithWhereUniqueWithoutParentMessageInput[]
    updateMany?: GuildMessageUpdateManyWithWhereWithoutParentMessageInput | GuildMessageUpdateManyWithWhereWithoutParentMessageInput[]
    deleteMany?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
  }

  export type TokenCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput> | TokenCreateWithoutDiscordUserInput[] | TokenUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutDiscordUserInput | TokenCreateOrConnectWithoutDiscordUserInput[]
    createMany?: TokenCreateManyDiscordUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type GuildUserCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput> | GuildUserCreateWithoutDiscordUserInput[] | GuildUserUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutDiscordUserInput | GuildUserCreateOrConnectWithoutDiscordUserInput[]
    createMany?: GuildUserCreateManyDiscordUserInputEnvelope
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
  }

  export type DiscordUniversityCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput> | DiscordUniversityCreateWithoutDiscordUserInput[] | DiscordUniversityUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutDiscordUserInput | DiscordUniversityCreateOrConnectWithoutDiscordUserInput[]
    createMany?: DiscordUniversityCreateManyDiscordUserInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput> | TokenCreateWithoutDiscordUserInput[] | TokenUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutDiscordUserInput | TokenCreateOrConnectWithoutDiscordUserInput[]
    createMany?: TokenCreateManyDiscordUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type GuildUserUncheckedCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput> | GuildUserCreateWithoutDiscordUserInput[] | GuildUserUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutDiscordUserInput | GuildUserCreateOrConnectWithoutDiscordUserInput[]
    createMany?: GuildUserCreateManyDiscordUserInputEnvelope
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
  }

  export type DiscordUniversityUncheckedCreateNestedManyWithoutDiscordUserInput = {
    create?: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput> | DiscordUniversityCreateWithoutDiscordUserInput[] | DiscordUniversityUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutDiscordUserInput | DiscordUniversityCreateOrConnectWithoutDiscordUserInput[]
    createMany?: DiscordUniversityCreateManyDiscordUserInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type TokenUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput> | TokenCreateWithoutDiscordUserInput[] | TokenUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutDiscordUserInput | TokenCreateOrConnectWithoutDiscordUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutDiscordUserInput | TokenUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: TokenCreateManyDiscordUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutDiscordUserInput | TokenUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutDiscordUserInput | TokenUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type GuildUserUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput> | GuildUserCreateWithoutDiscordUserInput[] | GuildUserUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutDiscordUserInput | GuildUserCreateOrConnectWithoutDiscordUserInput[]
    upsert?: GuildUserUpsertWithWhereUniqueWithoutDiscordUserInput | GuildUserUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: GuildUserCreateManyDiscordUserInputEnvelope
    set?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    disconnect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    delete?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    update?: GuildUserUpdateWithWhereUniqueWithoutDiscordUserInput | GuildUserUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: GuildUserUpdateManyWithWhereWithoutDiscordUserInput | GuildUserUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
  }

  export type DiscordUniversityUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput> | DiscordUniversityCreateWithoutDiscordUserInput[] | DiscordUniversityUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutDiscordUserInput | DiscordUniversityCreateOrConnectWithoutDiscordUserInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutDiscordUserInput | DiscordUniversityUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: DiscordUniversityCreateManyDiscordUserInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutDiscordUserInput | DiscordUniversityUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutDiscordUserInput | DiscordUniversityUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput> | TokenCreateWithoutDiscordUserInput[] | TokenUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutDiscordUserInput | TokenCreateOrConnectWithoutDiscordUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutDiscordUserInput | TokenUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: TokenCreateManyDiscordUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutDiscordUserInput | TokenUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutDiscordUserInput | TokenUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type GuildUserUncheckedUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput> | GuildUserCreateWithoutDiscordUserInput[] | GuildUserUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: GuildUserCreateOrConnectWithoutDiscordUserInput | GuildUserCreateOrConnectWithoutDiscordUserInput[]
    upsert?: GuildUserUpsertWithWhereUniqueWithoutDiscordUserInput | GuildUserUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: GuildUserCreateManyDiscordUserInputEnvelope
    set?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    disconnect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    delete?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    connect?: GuildUserWhereUniqueInput | GuildUserWhereUniqueInput[]
    update?: GuildUserUpdateWithWhereUniqueWithoutDiscordUserInput | GuildUserUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: GuildUserUpdateManyWithWhereWithoutDiscordUserInput | GuildUserUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutDiscordUserNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput> | DiscordUniversityCreateWithoutDiscordUserInput[] | DiscordUniversityUncheckedCreateWithoutDiscordUserInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutDiscordUserInput | DiscordUniversityCreateOrConnectWithoutDiscordUserInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutDiscordUserInput | DiscordUniversityUpsertWithWhereUniqueWithoutDiscordUserInput[]
    createMany?: DiscordUniversityCreateManyDiscordUserInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutDiscordUserInput | DiscordUniversityUpdateWithWhereUniqueWithoutDiscordUserInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutDiscordUserInput | DiscordUniversityUpdateManyWithWhereWithoutDiscordUserInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type DiscordUserCreateNestedOneWithoutTokensInput = {
    create?: XOR<DiscordUserCreateWithoutTokensInput, DiscordUserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutTokensInput
    connect?: DiscordUserWhereUniqueInput
  }

  export type DiscordUserUpdateOneWithoutTokensNestedInput = {
    create?: XOR<DiscordUserCreateWithoutTokensInput, DiscordUserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutTokensInput
    upsert?: DiscordUserUpsertWithoutTokensInput
    disconnect?: DiscordUserWhereInput | boolean
    delete?: DiscordUserWhereInput | boolean
    connect?: DiscordUserWhereUniqueInput
    update?: XOR<XOR<DiscordUserUpdateToOneWithWhereWithoutTokensInput, DiscordUserUpdateWithoutTokensInput>, DiscordUserUncheckedUpdateWithoutTokensInput>
  }

  export type DiscordUserCreateNestedOneWithoutLinkInput = {
    create?: XOR<DiscordUserCreateWithoutLinkInput, DiscordUserUncheckedCreateWithoutLinkInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutLinkInput
    connect?: DiscordUserWhereUniqueInput
  }

  export type EmailVerificationCreateNestedOneWithoutLinkInput = {
    create?: XOR<EmailVerificationCreateWithoutLinkInput, EmailVerificationUncheckedCreateWithoutLinkInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutLinkInput
    connect?: EmailVerificationWhereUniqueInput
  }

  export type BiometricEntryCreateNestedOneWithoutLinkInput = {
    create?: XOR<BiometricEntryCreateWithoutLinkInput, BiometricEntryUncheckedCreateWithoutLinkInput>
    connectOrCreate?: BiometricEntryCreateOrConnectWithoutLinkInput
    connect?: BiometricEntryWhereUniqueInput
  }

  export type DiscordUniversityCreateNestedManyWithoutHelperInput = {
    create?: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput> | DiscordUniversityCreateWithoutHelperInput[] | DiscordUniversityUncheckedCreateWithoutHelperInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutHelperInput | DiscordUniversityCreateOrConnectWithoutHelperInput[]
    createMany?: DiscordUniversityCreateManyHelperInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput = {
    create?: XOR<DiscordUniversityCreateWithoutExternalsHelpedInput, DiscordUniversityUncheckedCreateWithoutExternalsHelpedInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutExternalsHelpedInput
    connect?: DiscordUniversityWhereUniqueInput
  }

  export type AuthorityHitCreateNestedManyWithoutDiscordUniversityInput = {
    create?: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput> | AuthorityHitCreateWithoutDiscordUniversityInput[] | AuthorityHitUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutDiscordUniversityInput | AuthorityHitCreateOrConnectWithoutDiscordUniversityInput[]
    createMany?: AuthorityHitCreateManyDiscordUniversityInputEnvelope
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
  }

  export type GuildsCreateNestedManyWithoutDiscordUniversityInput = {
    create?: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput> | GuildsCreateWithoutDiscordUniversityInput[] | GuildsUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: GuildsCreateOrConnectWithoutDiscordUniversityInput | GuildsCreateOrConnectWithoutDiscordUniversityInput[]
    createMany?: GuildsCreateManyDiscordUniversityInputEnvelope
    connect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
  }

  export type DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput = {
    create?: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput> | DiscordUniversityCreateWithoutHelperInput[] | DiscordUniversityUncheckedCreateWithoutHelperInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutHelperInput | DiscordUniversityCreateOrConnectWithoutHelperInput[]
    createMany?: DiscordUniversityCreateManyHelperInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput = {
    create?: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput> | AuthorityHitCreateWithoutDiscordUniversityInput[] | AuthorityHitUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutDiscordUniversityInput | AuthorityHitCreateOrConnectWithoutDiscordUniversityInput[]
    createMany?: AuthorityHitCreateManyDiscordUniversityInputEnvelope
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
  }

  export type GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput = {
    create?: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput> | GuildsCreateWithoutDiscordUniversityInput[] | GuildsUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: GuildsCreateOrConnectWithoutDiscordUniversityInput | GuildsCreateOrConnectWithoutDiscordUniversityInput[]
    createMany?: GuildsCreateManyDiscordUniversityInputEnvelope
    connect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
  }

  export type DiscordUserUpdateOneWithoutLinkNestedInput = {
    create?: XOR<DiscordUserCreateWithoutLinkInput, DiscordUserUncheckedCreateWithoutLinkInput>
    connectOrCreate?: DiscordUserCreateOrConnectWithoutLinkInput
    upsert?: DiscordUserUpsertWithoutLinkInput
    disconnect?: DiscordUserWhereInput | boolean
    delete?: DiscordUserWhereInput | boolean
    connect?: DiscordUserWhereUniqueInput
    update?: XOR<XOR<DiscordUserUpdateToOneWithWhereWithoutLinkInput, DiscordUserUpdateWithoutLinkInput>, DiscordUserUncheckedUpdateWithoutLinkInput>
  }

  export type EmailVerificationUpdateOneWithoutLinkNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutLinkInput, EmailVerificationUncheckedCreateWithoutLinkInput>
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutLinkInput
    upsert?: EmailVerificationUpsertWithoutLinkInput
    disconnect?: EmailVerificationWhereInput | boolean
    delete?: EmailVerificationWhereInput | boolean
    connect?: EmailVerificationWhereUniqueInput
    update?: XOR<XOR<EmailVerificationUpdateToOneWithWhereWithoutLinkInput, EmailVerificationUpdateWithoutLinkInput>, EmailVerificationUncheckedUpdateWithoutLinkInput>
  }

  export type BiometricEntryUpdateOneWithoutLinkNestedInput = {
    create?: XOR<BiometricEntryCreateWithoutLinkInput, BiometricEntryUncheckedCreateWithoutLinkInput>
    connectOrCreate?: BiometricEntryCreateOrConnectWithoutLinkInput
    upsert?: BiometricEntryUpsertWithoutLinkInput
    disconnect?: BiometricEntryWhereInput | boolean
    delete?: BiometricEntryWhereInput | boolean
    connect?: BiometricEntryWhereUniqueInput
    update?: XOR<XOR<BiometricEntryUpdateToOneWithWhereWithoutLinkInput, BiometricEntryUpdateWithoutLinkInput>, BiometricEntryUncheckedUpdateWithoutLinkInput>
  }

  export type DiscordUniversityUpdateManyWithoutHelperNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput> | DiscordUniversityCreateWithoutHelperInput[] | DiscordUniversityUncheckedCreateWithoutHelperInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutHelperInput | DiscordUniversityCreateOrConnectWithoutHelperInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutHelperInput | DiscordUniversityUpsertWithWhereUniqueWithoutHelperInput[]
    createMany?: DiscordUniversityCreateManyHelperInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutHelperInput | DiscordUniversityUpdateWithWhereUniqueWithoutHelperInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutHelperInput | DiscordUniversityUpdateManyWithWhereWithoutHelperInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutExternalsHelpedInput, DiscordUniversityUncheckedCreateWithoutExternalsHelpedInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutExternalsHelpedInput
    upsert?: DiscordUniversityUpsertWithoutExternalsHelpedInput
    disconnect?: DiscordUniversityWhereInput | boolean
    delete?: DiscordUniversityWhereInput | boolean
    connect?: DiscordUniversityWhereUniqueInput
    update?: XOR<XOR<DiscordUniversityUpdateToOneWithWhereWithoutExternalsHelpedInput, DiscordUniversityUpdateWithoutExternalsHelpedInput>, DiscordUniversityUncheckedUpdateWithoutExternalsHelpedInput>
  }

  export type AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput = {
    create?: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput> | AuthorityHitCreateWithoutDiscordUniversityInput[] | AuthorityHitUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutDiscordUniversityInput | AuthorityHitCreateOrConnectWithoutDiscordUniversityInput[]
    upsert?: AuthorityHitUpsertWithWhereUniqueWithoutDiscordUniversityInput | AuthorityHitUpsertWithWhereUniqueWithoutDiscordUniversityInput[]
    createMany?: AuthorityHitCreateManyDiscordUniversityInputEnvelope
    set?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    disconnect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    delete?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    update?: AuthorityHitUpdateWithWhereUniqueWithoutDiscordUniversityInput | AuthorityHitUpdateWithWhereUniqueWithoutDiscordUniversityInput[]
    updateMany?: AuthorityHitUpdateManyWithWhereWithoutDiscordUniversityInput | AuthorityHitUpdateManyWithWhereWithoutDiscordUniversityInput[]
    deleteMany?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
  }

  export type GuildsUpdateManyWithoutDiscordUniversityNestedInput = {
    create?: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput> | GuildsCreateWithoutDiscordUniversityInput[] | GuildsUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: GuildsCreateOrConnectWithoutDiscordUniversityInput | GuildsCreateOrConnectWithoutDiscordUniversityInput[]
    upsert?: GuildsUpsertWithWhereUniqueWithoutDiscordUniversityInput | GuildsUpsertWithWhereUniqueWithoutDiscordUniversityInput[]
    createMany?: GuildsCreateManyDiscordUniversityInputEnvelope
    set?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    disconnect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    delete?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    connect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    update?: GuildsUpdateWithWhereUniqueWithoutDiscordUniversityInput | GuildsUpdateWithWhereUniqueWithoutDiscordUniversityInput[]
    updateMany?: GuildsUpdateManyWithWhereWithoutDiscordUniversityInput | GuildsUpdateManyWithWhereWithoutDiscordUniversityInput[]
    deleteMany?: GuildsScalarWhereInput | GuildsScalarWhereInput[]
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput> | DiscordUniversityCreateWithoutHelperInput[] | DiscordUniversityUncheckedCreateWithoutHelperInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutHelperInput | DiscordUniversityCreateOrConnectWithoutHelperInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutHelperInput | DiscordUniversityUpsertWithWhereUniqueWithoutHelperInput[]
    createMany?: DiscordUniversityCreateManyHelperInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutHelperInput | DiscordUniversityUpdateWithWhereUniqueWithoutHelperInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutHelperInput | DiscordUniversityUpdateManyWithWhereWithoutHelperInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput = {
    create?: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput> | AuthorityHitCreateWithoutDiscordUniversityInput[] | AuthorityHitUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: AuthorityHitCreateOrConnectWithoutDiscordUniversityInput | AuthorityHitCreateOrConnectWithoutDiscordUniversityInput[]
    upsert?: AuthorityHitUpsertWithWhereUniqueWithoutDiscordUniversityInput | AuthorityHitUpsertWithWhereUniqueWithoutDiscordUniversityInput[]
    createMany?: AuthorityHitCreateManyDiscordUniversityInputEnvelope
    set?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    disconnect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    delete?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    connect?: AuthorityHitWhereUniqueInput | AuthorityHitWhereUniqueInput[]
    update?: AuthorityHitUpdateWithWhereUniqueWithoutDiscordUniversityInput | AuthorityHitUpdateWithWhereUniqueWithoutDiscordUniversityInput[]
    updateMany?: AuthorityHitUpdateManyWithWhereWithoutDiscordUniversityInput | AuthorityHitUpdateManyWithWhereWithoutDiscordUniversityInput[]
    deleteMany?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
  }

  export type GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput = {
    create?: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput> | GuildsCreateWithoutDiscordUniversityInput[] | GuildsUncheckedCreateWithoutDiscordUniversityInput[]
    connectOrCreate?: GuildsCreateOrConnectWithoutDiscordUniversityInput | GuildsCreateOrConnectWithoutDiscordUniversityInput[]
    upsert?: GuildsUpsertWithWhereUniqueWithoutDiscordUniversityInput | GuildsUpsertWithWhereUniqueWithoutDiscordUniversityInput[]
    createMany?: GuildsCreateManyDiscordUniversityInputEnvelope
    set?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    disconnect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    delete?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    connect?: GuildsWhereUniqueInput | GuildsWhereUniqueInput[]
    update?: GuildsUpdateWithWhereUniqueWithoutDiscordUniversityInput | GuildsUpdateWithWhereUniqueWithoutDiscordUniversityInput[]
    updateMany?: GuildsUpdateManyWithWhereWithoutDiscordUniversityInput | GuildsUpdateManyWithWhereWithoutDiscordUniversityInput[]
    deleteMany?: GuildsScalarWhereInput | GuildsScalarWhereInput[]
  }

  export type DiscordUniversityCreateNestedOneWithoutAuthorityHitsInput = {
    create?: XOR<DiscordUniversityCreateWithoutAuthorityHitsInput, DiscordUniversityUncheckedCreateWithoutAuthorityHitsInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutAuthorityHitsInput
    connect?: DiscordUniversityWhereUniqueInput
  }

  export type GuildsCreateNestedOneWithoutAuthorityHitsInput = {
    create?: XOR<GuildsCreateWithoutAuthorityHitsInput, GuildsUncheckedCreateWithoutAuthorityHitsInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutAuthorityHitsInput
    connect?: GuildsWhereUniqueInput
  }

  export type EnumFederatedFieldUpdateOperationsInput = {
    set?: $Enums.Federated
  }

  export type EnumHitTypeFieldUpdateOperationsInput = {
    set?: $Enums.HitType
  }

  export type DiscordUniversityUpdateOneWithoutAuthorityHitsNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutAuthorityHitsInput, DiscordUniversityUncheckedCreateWithoutAuthorityHitsInput>
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutAuthorityHitsInput
    upsert?: DiscordUniversityUpsertWithoutAuthorityHitsInput
    disconnect?: DiscordUniversityWhereInput | boolean
    delete?: DiscordUniversityWhereInput | boolean
    connect?: DiscordUniversityWhereUniqueInput
    update?: XOR<XOR<DiscordUniversityUpdateToOneWithWhereWithoutAuthorityHitsInput, DiscordUniversityUpdateWithoutAuthorityHitsInput>, DiscordUniversityUncheckedUpdateWithoutAuthorityHitsInput>
  }

  export type GuildsUpdateOneWithoutAuthorityHitsNestedInput = {
    create?: XOR<GuildsCreateWithoutAuthorityHitsInput, GuildsUncheckedCreateWithoutAuthorityHitsInput>
    connectOrCreate?: GuildsCreateOrConnectWithoutAuthorityHitsInput
    upsert?: GuildsUpsertWithoutAuthorityHitsInput
    disconnect?: GuildsWhereInput | boolean
    delete?: GuildsWhereInput | boolean
    connect?: GuildsWhereUniqueInput
    update?: XOR<XOR<GuildsUpdateToOneWithWhereWithoutAuthorityHitsInput, GuildsUpdateWithoutAuthorityHitsInput>, GuildsUncheckedUpdateWithoutAuthorityHitsInput>
  }

  export type DiscordUniversityCreateNestedManyWithoutEmailVerificationInput = {
    create?: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput> | DiscordUniversityCreateWithoutEmailVerificationInput[] | DiscordUniversityUncheckedCreateWithoutEmailVerificationInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutEmailVerificationInput | DiscordUniversityCreateOrConnectWithoutEmailVerificationInput[]
    createMany?: DiscordUniversityCreateManyEmailVerificationInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type DiscordUniversityUncheckedCreateNestedManyWithoutEmailVerificationInput = {
    create?: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput> | DiscordUniversityCreateWithoutEmailVerificationInput[] | DiscordUniversityUncheckedCreateWithoutEmailVerificationInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutEmailVerificationInput | DiscordUniversityCreateOrConnectWithoutEmailVerificationInput[]
    createMany?: DiscordUniversityCreateManyEmailVerificationInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type DiscordUniversityUpdateManyWithoutEmailVerificationNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput> | DiscordUniversityCreateWithoutEmailVerificationInput[] | DiscordUniversityUncheckedCreateWithoutEmailVerificationInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutEmailVerificationInput | DiscordUniversityCreateOrConnectWithoutEmailVerificationInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutEmailVerificationInput | DiscordUniversityUpsertWithWhereUniqueWithoutEmailVerificationInput[]
    createMany?: DiscordUniversityCreateManyEmailVerificationInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutEmailVerificationInput | DiscordUniversityUpdateWithWhereUniqueWithoutEmailVerificationInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutEmailVerificationInput | DiscordUniversityUpdateManyWithWhereWithoutEmailVerificationInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutEmailVerificationNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput> | DiscordUniversityCreateWithoutEmailVerificationInput[] | DiscordUniversityUncheckedCreateWithoutEmailVerificationInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutEmailVerificationInput | DiscordUniversityCreateOrConnectWithoutEmailVerificationInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutEmailVerificationInput | DiscordUniversityUpsertWithWhereUniqueWithoutEmailVerificationInput[]
    createMany?: DiscordUniversityCreateManyEmailVerificationInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutEmailVerificationInput | DiscordUniversityUpdateWithWhereUniqueWithoutEmailVerificationInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutEmailVerificationInput | DiscordUniversityUpdateManyWithWhereWithoutEmailVerificationInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type DiscordUniversityCreateNestedManyWithoutBiometricEntryInput = {
    create?: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput> | DiscordUniversityCreateWithoutBiometricEntryInput[] | DiscordUniversityUncheckedCreateWithoutBiometricEntryInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutBiometricEntryInput | DiscordUniversityCreateOrConnectWithoutBiometricEntryInput[]
    createMany?: DiscordUniversityCreateManyBiometricEntryInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type DiscordUniversityUncheckedCreateNestedManyWithoutBiometricEntryInput = {
    create?: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput> | DiscordUniversityCreateWithoutBiometricEntryInput[] | DiscordUniversityUncheckedCreateWithoutBiometricEntryInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutBiometricEntryInput | DiscordUniversityCreateOrConnectWithoutBiometricEntryInput[]
    createMany?: DiscordUniversityCreateManyBiometricEntryInputEnvelope
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
  }

  export type DiscordUniversityUpdateManyWithoutBiometricEntryNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput> | DiscordUniversityCreateWithoutBiometricEntryInput[] | DiscordUniversityUncheckedCreateWithoutBiometricEntryInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutBiometricEntryInput | DiscordUniversityCreateOrConnectWithoutBiometricEntryInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutBiometricEntryInput | DiscordUniversityUpsertWithWhereUniqueWithoutBiometricEntryInput[]
    createMany?: DiscordUniversityCreateManyBiometricEntryInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutBiometricEntryInput | DiscordUniversityUpdateWithWhereUniqueWithoutBiometricEntryInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutBiometricEntryInput | DiscordUniversityUpdateManyWithWhereWithoutBiometricEntryInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutBiometricEntryNestedInput = {
    create?: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput> | DiscordUniversityCreateWithoutBiometricEntryInput[] | DiscordUniversityUncheckedCreateWithoutBiometricEntryInput[]
    connectOrCreate?: DiscordUniversityCreateOrConnectWithoutBiometricEntryInput | DiscordUniversityCreateOrConnectWithoutBiometricEntryInput[]
    upsert?: DiscordUniversityUpsertWithWhereUniqueWithoutBiometricEntryInput | DiscordUniversityUpsertWithWhereUniqueWithoutBiometricEntryInput[]
    createMany?: DiscordUniversityCreateManyBiometricEntryInputEnvelope
    set?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    disconnect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    delete?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    connect?: DiscordUniversityWhereUniqueInput | DiscordUniversityWhereUniqueInput[]
    update?: DiscordUniversityUpdateWithWhereUniqueWithoutBiometricEntryInput | DiscordUniversityUpdateWithWhereUniqueWithoutBiometricEntryInput[]
    updateMany?: DiscordUniversityUpdateManyWithWhereWithoutBiometricEntryInput | DiscordUniversityUpdateManyWithWhereWithoutBiometricEntryInput[]
    deleteMany?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFederatedFilter<$PrismaModel = never> = {
    equals?: $Enums.Federated | EnumFederatedFieldRefInput<$PrismaModel>
    in?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    not?: NestedEnumFederatedFilter<$PrismaModel> | $Enums.Federated
  }

  export type NestedEnumHitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HitType | EnumHitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHitTypeFilter<$PrismaModel> | $Enums.HitType
  }

  export type NestedEnumFederatedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Federated | EnumFederatedFieldRefInput<$PrismaModel>
    in?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    notIn?: $Enums.Federated[] | ListEnumFederatedFieldRefInput<$PrismaModel>
    not?: NestedEnumFederatedWithAggregatesFilter<$PrismaModel> | $Enums.Federated
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFederatedFilter<$PrismaModel>
    _max?: NestedEnumFederatedFilter<$PrismaModel>
  }

  export type NestedEnumHitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HitType | EnumHitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HitType[] | ListEnumHitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHitTypeWithAggregatesFilter<$PrismaModel> | $Enums.HitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHitTypeFilter<$PrismaModel>
    _max?: NestedEnumHitTypeFilter<$PrismaModel>
  }

  export type GuildUserCreateWithoutGuildsInput = {
    id?: string
    isMod?: boolean
    isOwner?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutGuildsInput
    messages?: GuildMessageCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserUncheckedCreateWithoutGuildsInput = {
    id?: string
    discordUserId?: string | null
    isMod?: boolean
    isOwner?: boolean
    messages?: GuildMessageUncheckedCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserCreateOrConnectWithoutGuildsInput = {
    where: GuildUserWhereUniqueInput
    create: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput>
  }

  export type GuildUserCreateManyGuildsInputEnvelope = {
    data: GuildUserCreateManyGuildsInput | GuildUserCreateManyGuildsInput[]
    skipDuplicates?: boolean
  }

  export type GuildSettingsCreateWithoutGuildsInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
  }

  export type GuildSettingsUncheckedCreateWithoutGuildsInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
  }

  export type GuildSettingsCreateOrConnectWithoutGuildsInput = {
    where: GuildSettingsWhereUniqueInput
    create: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput>
  }

  export type GuildSettingsCreateManyGuildsInputEnvelope = {
    data: GuildSettingsCreateManyGuildsInput | GuildSettingsCreateManyGuildsInput[]
    skipDuplicates?: boolean
  }

  export type AuthorityHitCreateWithoutGuildsInput = {
    id?: string
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutAuthorityHitsInput
  }

  export type AuthorityHitUncheckedCreateWithoutGuildsInput = {
    id?: string
    discordUniversityId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type AuthorityHitCreateOrConnectWithoutGuildsInput = {
    where: AuthorityHitWhereUniqueInput
    create: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput>
  }

  export type AuthorityHitCreateManyGuildsInputEnvelope = {
    data: AuthorityHitCreateManyGuildsInput | AuthorityHitCreateManyGuildsInput[]
    skipDuplicates?: boolean
  }

  export type GuildLogCreateWithoutGuildsInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type GuildLogUncheckedCreateWithoutGuildsInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type GuildLogCreateOrConnectWithoutGuildsInput = {
    where: GuildLogWhereUniqueInput
    create: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput>
  }

  export type GuildLogCreateManyGuildsInputEnvelope = {
    data: GuildLogCreateManyGuildsInput | GuildLogCreateManyGuildsInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUniversityCreateWithoutGuildsInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutGuildsInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutGuildsInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutGuildsInput, DiscordUniversityUncheckedCreateWithoutGuildsInput>
  }

  export type GuildUserUpsertWithWhereUniqueWithoutGuildsInput = {
    where: GuildUserWhereUniqueInput
    update: XOR<GuildUserUpdateWithoutGuildsInput, GuildUserUncheckedUpdateWithoutGuildsInput>
    create: XOR<GuildUserCreateWithoutGuildsInput, GuildUserUncheckedCreateWithoutGuildsInput>
  }

  export type GuildUserUpdateWithWhereUniqueWithoutGuildsInput = {
    where: GuildUserWhereUniqueInput
    data: XOR<GuildUserUpdateWithoutGuildsInput, GuildUserUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildUserUpdateManyWithWhereWithoutGuildsInput = {
    where: GuildUserScalarWhereInput
    data: XOR<GuildUserUpdateManyMutationInput, GuildUserUncheckedUpdateManyWithoutGuildsInput>
  }

  export type GuildUserScalarWhereInput = {
    AND?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
    OR?: GuildUserScalarWhereInput[]
    NOT?: GuildUserScalarWhereInput | GuildUserScalarWhereInput[]
    id?: StringFilter<"GuildUser"> | string
    guildsId?: StringNullableFilter<"GuildUser"> | string | null
    discordUserId?: StringNullableFilter<"GuildUser"> | string | null
    isMod?: BoolFilter<"GuildUser"> | boolean
    isOwner?: BoolFilter<"GuildUser"> | boolean
  }

  export type GuildSettingsUpsertWithWhereUniqueWithoutGuildsInput = {
    where: GuildSettingsWhereUniqueInput
    update: XOR<GuildSettingsUpdateWithoutGuildsInput, GuildSettingsUncheckedUpdateWithoutGuildsInput>
    create: XOR<GuildSettingsCreateWithoutGuildsInput, GuildSettingsUncheckedCreateWithoutGuildsInput>
  }

  export type GuildSettingsUpdateWithWhereUniqueWithoutGuildsInput = {
    where: GuildSettingsWhereUniqueInput
    data: XOR<GuildSettingsUpdateWithoutGuildsInput, GuildSettingsUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildSettingsUpdateManyWithWhereWithoutGuildsInput = {
    where: GuildSettingsScalarWhereInput
    data: XOR<GuildSettingsUpdateManyMutationInput, GuildSettingsUncheckedUpdateManyWithoutGuildsInput>
  }

  export type GuildSettingsScalarWhereInput = {
    AND?: GuildSettingsScalarWhereInput | GuildSettingsScalarWhereInput[]
    OR?: GuildSettingsScalarWhereInput[]
    NOT?: GuildSettingsScalarWhereInput | GuildSettingsScalarWhereInput[]
    id?: StringFilter<"GuildSettings"> | string
    allowsEmailEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsBiometricEntry?: BoolFilter<"GuildSettings"> | boolean
    allowsExternalEntry?: BoolFilter<"GuildSettings"> | boolean
    verifiedRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    moderatorRoleId?: StringNullableFilter<"GuildSettings"> | string | null
    usesUowboNet?: BoolFilter<"GuildSettings"> | boolean
    guildsId?: StringFilter<"GuildSettings"> | string
  }

  export type AuthorityHitUpsertWithWhereUniqueWithoutGuildsInput = {
    where: AuthorityHitWhereUniqueInput
    update: XOR<AuthorityHitUpdateWithoutGuildsInput, AuthorityHitUncheckedUpdateWithoutGuildsInput>
    create: XOR<AuthorityHitCreateWithoutGuildsInput, AuthorityHitUncheckedCreateWithoutGuildsInput>
  }

  export type AuthorityHitUpdateWithWhereUniqueWithoutGuildsInput = {
    where: AuthorityHitWhereUniqueInput
    data: XOR<AuthorityHitUpdateWithoutGuildsInput, AuthorityHitUncheckedUpdateWithoutGuildsInput>
  }

  export type AuthorityHitUpdateManyWithWhereWithoutGuildsInput = {
    where: AuthorityHitScalarWhereInput
    data: XOR<AuthorityHitUpdateManyMutationInput, AuthorityHitUncheckedUpdateManyWithoutGuildsInput>
  }

  export type AuthorityHitScalarWhereInput = {
    AND?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
    OR?: AuthorityHitScalarWhereInput[]
    NOT?: AuthorityHitScalarWhereInput | AuthorityHitScalarWhereInput[]
    id?: StringFilter<"AuthorityHit"> | string
    discordUniversityId?: StringNullableFilter<"AuthorityHit"> | string | null
    guildsId?: StringNullableFilter<"AuthorityHit"> | string | null
    federated?: EnumFederatedFilter<"AuthorityHit"> | $Enums.Federated
    reason?: StringFilter<"AuthorityHit"> | string
    type?: EnumHitTypeFilter<"AuthorityHit"> | $Enums.HitType
    createdAt?: DateTimeFilter<"AuthorityHit"> | Date | string
  }

  export type GuildLogUpsertWithWhereUniqueWithoutGuildsInput = {
    where: GuildLogWhereUniqueInput
    update: XOR<GuildLogUpdateWithoutGuildsInput, GuildLogUncheckedUpdateWithoutGuildsInput>
    create: XOR<GuildLogCreateWithoutGuildsInput, GuildLogUncheckedCreateWithoutGuildsInput>
  }

  export type GuildLogUpdateWithWhereUniqueWithoutGuildsInput = {
    where: GuildLogWhereUniqueInput
    data: XOR<GuildLogUpdateWithoutGuildsInput, GuildLogUncheckedUpdateWithoutGuildsInput>
  }

  export type GuildLogUpdateManyWithWhereWithoutGuildsInput = {
    where: GuildLogScalarWhereInput
    data: XOR<GuildLogUpdateManyMutationInput, GuildLogUncheckedUpdateManyWithoutGuildsInput>
  }

  export type GuildLogScalarWhereInput = {
    AND?: GuildLogScalarWhereInput | GuildLogScalarWhereInput[]
    OR?: GuildLogScalarWhereInput[]
    NOT?: GuildLogScalarWhereInput | GuildLogScalarWhereInput[]
    id?: StringFilter<"GuildLog"> | string
    message?: StringFilter<"GuildLog"> | string
    createdAt?: DateTimeFilter<"GuildLog"> | Date | string
    guildsId?: StringNullableFilter<"GuildLog"> | string | null
  }

  export type DiscordUniversityUpsertWithoutGuildsInput = {
    update: XOR<DiscordUniversityUpdateWithoutGuildsInput, DiscordUniversityUncheckedUpdateWithoutGuildsInput>
    create: XOR<DiscordUniversityCreateWithoutGuildsInput, DiscordUniversityUncheckedCreateWithoutGuildsInput>
    where?: DiscordUniversityWhereInput
  }

  export type DiscordUniversityUpdateToOneWithWhereWithoutGuildsInput = {
    where?: DiscordUniversityWhereInput
    data: XOR<DiscordUniversityUpdateWithoutGuildsInput, DiscordUniversityUncheckedUpdateWithoutGuildsInput>
  }

  export type DiscordUniversityUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type GuildsCreateWithoutGuildLogInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutGuildsInput
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutGuildsInput
  }

  export type GuildsUncheckedCreateWithoutGuildLogInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
    members?: GuildUserUncheckedCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsCreateOrConnectWithoutGuildLogInput = {
    where: GuildsWhereUniqueInput
    create: XOR<GuildsCreateWithoutGuildLogInput, GuildsUncheckedCreateWithoutGuildLogInput>
  }

  export type GuildsUpsertWithoutGuildLogInput = {
    update: XOR<GuildsUpdateWithoutGuildLogInput, GuildsUncheckedUpdateWithoutGuildLogInput>
    create: XOR<GuildsCreateWithoutGuildLogInput, GuildsUncheckedCreateWithoutGuildLogInput>
    where?: GuildsWhereInput
  }

  export type GuildsUpdateToOneWithWhereWithoutGuildLogInput = {
    where?: GuildsWhereInput
    data: XOR<GuildsUpdateWithoutGuildLogInput, GuildsUncheckedUpdateWithoutGuildLogInput>
  }

  export type GuildsUpdateWithoutGuildLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutGuildsNestedInput
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateWithoutGuildLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GuildUserUncheckedUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type GuildsCreateWithoutSettingsInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogCreateNestedManyWithoutGuildsInput
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutGuildsInput
  }

  export type GuildsUncheckedCreateWithoutSettingsInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
    members?: GuildUserUncheckedCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsCreateOrConnectWithoutSettingsInput = {
    where: GuildsWhereUniqueInput
    create: XOR<GuildsCreateWithoutSettingsInput, GuildsUncheckedCreateWithoutSettingsInput>
  }

  export type GuildsUpsertWithoutSettingsInput = {
    update: XOR<GuildsUpdateWithoutSettingsInput, GuildsUncheckedUpdateWithoutSettingsInput>
    create: XOR<GuildsCreateWithoutSettingsInput, GuildsUncheckedCreateWithoutSettingsInput>
    where?: GuildsWhereInput
  }

  export type GuildsUpdateToOneWithWhereWithoutSettingsInput = {
    where?: GuildsWhereInput
    data: XOR<GuildsUpdateWithoutSettingsInput, GuildsUncheckedUpdateWithoutSettingsInput>
  }

  export type GuildsUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUpdateManyWithoutGuildsNestedInput
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GuildUserUncheckedUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type GuildsCreateWithoutMembersInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    settings?: GuildSettingsCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogCreateNestedManyWithoutGuildsInput
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutGuildsInput
  }

  export type GuildsUncheckedCreateWithoutMembersInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
    settings?: GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsCreateOrConnectWithoutMembersInput = {
    where: GuildsWhereUniqueInput
    create: XOR<GuildsCreateWithoutMembersInput, GuildsUncheckedCreateWithoutMembersInput>
  }

  export type DiscordUserCreateWithoutGuildsInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserUncheckedCreateWithoutGuildsInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityUncheckedCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserCreateOrConnectWithoutGuildsInput = {
    where: DiscordUserWhereUniqueInput
    create: XOR<DiscordUserCreateWithoutGuildsInput, DiscordUserUncheckedCreateWithoutGuildsInput>
  }

  export type GuildMessageCreateWithoutGuildUserInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageCreateNestedManyWithoutParentMessageInput
    parentMessage?: GuildMessageCreateNestedOneWithoutMentionsInput
  }

  export type GuildMessageUncheckedCreateWithoutGuildUserInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type GuildMessageCreateOrConnectWithoutGuildUserInput = {
    where: GuildMessageWhereUniqueInput
    create: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput>
  }

  export type GuildMessageCreateManyGuildUserInputEnvelope = {
    data: GuildMessageCreateManyGuildUserInput | GuildMessageCreateManyGuildUserInput[]
    skipDuplicates?: boolean
  }

  export type GuildsUpsertWithoutMembersInput = {
    update: XOR<GuildsUpdateWithoutMembersInput, GuildsUncheckedUpdateWithoutMembersInput>
    create: XOR<GuildsCreateWithoutMembersInput, GuildsUncheckedCreateWithoutMembersInput>
    where?: GuildsWhereInput
  }

  export type GuildsUpdateToOneWithWhereWithoutMembersInput = {
    where?: GuildsWhereInput
    data: XOR<GuildsUpdateWithoutMembersInput, GuildsUncheckedUpdateWithoutMembersInput>
  }

  export type GuildsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settings?: GuildSettingsUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUpdateManyWithoutGuildsNestedInput
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type DiscordUserUpsertWithoutGuildsInput = {
    update: XOR<DiscordUserUpdateWithoutGuildsInput, DiscordUserUncheckedUpdateWithoutGuildsInput>
    create: XOR<DiscordUserCreateWithoutGuildsInput, DiscordUserUncheckedCreateWithoutGuildsInput>
    where?: DiscordUserWhereInput
  }

  export type DiscordUserUpdateToOneWithWhereWithoutGuildsInput = {
    where?: DiscordUserWhereInput
    data: XOR<DiscordUserUpdateWithoutGuildsInput, DiscordUserUncheckedUpdateWithoutGuildsInput>
  }

  export type DiscordUserUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUncheckedUpdateManyWithoutDiscordUserNestedInput
  }

  export type GuildMessageUpsertWithWhereUniqueWithoutGuildUserInput = {
    where: GuildMessageWhereUniqueInput
    update: XOR<GuildMessageUpdateWithoutGuildUserInput, GuildMessageUncheckedUpdateWithoutGuildUserInput>
    create: XOR<GuildMessageCreateWithoutGuildUserInput, GuildMessageUncheckedCreateWithoutGuildUserInput>
  }

  export type GuildMessageUpdateWithWhereUniqueWithoutGuildUserInput = {
    where: GuildMessageWhereUniqueInput
    data: XOR<GuildMessageUpdateWithoutGuildUserInput, GuildMessageUncheckedUpdateWithoutGuildUserInput>
  }

  export type GuildMessageUpdateManyWithWhereWithoutGuildUserInput = {
    where: GuildMessageScalarWhereInput
    data: XOR<GuildMessageUpdateManyMutationInput, GuildMessageUncheckedUpdateManyWithoutGuildUserInput>
  }

  export type GuildMessageScalarWhereInput = {
    AND?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
    OR?: GuildMessageScalarWhereInput[]
    NOT?: GuildMessageScalarWhereInput | GuildMessageScalarWhereInput[]
    id?: StringFilter<"GuildMessage"> | string
    message?: StringNullableFilter<"GuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"GuildMessage"> | string | null
    guildUserId?: StringNullableFilter<"GuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"GuildMessage"> | string | null
    createdAt?: DateTimeFilter<"GuildMessage"> | Date | string
  }

  export type GuildMessageCreateWithoutParentMessageInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageCreateNestedManyWithoutParentMessageInput
    GuildUser?: GuildUserCreateNestedOneWithoutMessagesInput
  }

  export type GuildMessageUncheckedCreateWithoutParentMessageInput = {
    id: string
    message?: string | null
    guildUserId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: GuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type GuildMessageCreateOrConnectWithoutParentMessageInput = {
    where: GuildMessageWhereUniqueInput
    create: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput>
  }

  export type GuildMessageCreateManyParentMessageInputEnvelope = {
    data: GuildMessageCreateManyParentMessageInput | GuildMessageCreateManyParentMessageInput[]
    skipDuplicates?: boolean
  }

  export type GuildMessageCreateWithoutMentionsInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    parentMessage?: GuildMessageCreateNestedOneWithoutMentionsInput
    GuildUser?: GuildUserCreateNestedOneWithoutMessagesInput
  }

  export type GuildMessageUncheckedCreateWithoutMentionsInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    guildUserId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type GuildMessageCreateOrConnectWithoutMentionsInput = {
    where: GuildMessageWhereUniqueInput
    create: XOR<GuildMessageCreateWithoutMentionsInput, GuildMessageUncheckedCreateWithoutMentionsInput>
  }

  export type GuildUserCreateWithoutMessagesInput = {
    id?: string
    isMod?: boolean
    isOwner?: boolean
    Guilds?: GuildsCreateNestedOneWithoutMembersInput
    DiscordUser?: DiscordUserCreateNestedOneWithoutGuildsInput
  }

  export type GuildUserUncheckedCreateWithoutMessagesInput = {
    id?: string
    guildsId?: string | null
    discordUserId?: string | null
    isMod?: boolean
    isOwner?: boolean
  }

  export type GuildUserCreateOrConnectWithoutMessagesInput = {
    where: GuildUserWhereUniqueInput
    create: XOR<GuildUserCreateWithoutMessagesInput, GuildUserUncheckedCreateWithoutMessagesInput>
  }

  export type GuildMessageUpsertWithWhereUniqueWithoutParentMessageInput = {
    where: GuildMessageWhereUniqueInput
    update: XOR<GuildMessageUpdateWithoutParentMessageInput, GuildMessageUncheckedUpdateWithoutParentMessageInput>
    create: XOR<GuildMessageCreateWithoutParentMessageInput, GuildMessageUncheckedCreateWithoutParentMessageInput>
  }

  export type GuildMessageUpdateWithWhereUniqueWithoutParentMessageInput = {
    where: GuildMessageWhereUniqueInput
    data: XOR<GuildMessageUpdateWithoutParentMessageInput, GuildMessageUncheckedUpdateWithoutParentMessageInput>
  }

  export type GuildMessageUpdateManyWithWhereWithoutParentMessageInput = {
    where: GuildMessageScalarWhereInput
    data: XOR<GuildMessageUpdateManyMutationInput, GuildMessageUncheckedUpdateManyWithoutParentMessageInput>
  }

  export type GuildMessageUpsertWithoutMentionsInput = {
    update: XOR<GuildMessageUpdateWithoutMentionsInput, GuildMessageUncheckedUpdateWithoutMentionsInput>
    create: XOR<GuildMessageCreateWithoutMentionsInput, GuildMessageUncheckedCreateWithoutMentionsInput>
    where?: GuildMessageWhereInput
  }

  export type GuildMessageUpdateToOneWithWhereWithoutMentionsInput = {
    where?: GuildMessageWhereInput
    data: XOR<GuildMessageUpdateWithoutMentionsInput, GuildMessageUncheckedUpdateWithoutMentionsInput>
  }

  export type GuildMessageUpdateWithoutMentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentMessage?: GuildMessageUpdateOneWithoutMentionsNestedInput
    GuildUser?: GuildUserUpdateOneWithoutMessagesNestedInput
  }

  export type GuildMessageUncheckedUpdateWithoutMentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    guildUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildUserUpsertWithoutMessagesInput = {
    update: XOR<GuildUserUpdateWithoutMessagesInput, GuildUserUncheckedUpdateWithoutMessagesInput>
    create: XOR<GuildUserCreateWithoutMessagesInput, GuildUserUncheckedCreateWithoutMessagesInput>
    where?: GuildUserWhereInput
  }

  export type GuildUserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GuildUserWhereInput
    data: XOR<GuildUserUpdateWithoutMessagesInput, GuildUserUncheckedUpdateWithoutMessagesInput>
  }

  export type GuildUserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    Guilds?: GuildsUpdateOneWithoutMembersNestedInput
    DiscordUser?: DiscordUserUpdateOneWithoutGuildsNestedInput
  }

  export type GuildUserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenCreateWithoutDiscordUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutDiscordUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutDiscordUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput>
  }

  export type TokenCreateManyDiscordUserInputEnvelope = {
    data: TokenCreateManyDiscordUserInput | TokenCreateManyDiscordUserInput[]
    skipDuplicates?: boolean
  }

  export type GuildUserCreateWithoutDiscordUserInput = {
    id?: string
    isMod?: boolean
    isOwner?: boolean
    Guilds?: GuildsCreateNestedOneWithoutMembersInput
    messages?: GuildMessageCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserUncheckedCreateWithoutDiscordUserInput = {
    id?: string
    guildsId?: string | null
    isMod?: boolean
    isOwner?: boolean
    messages?: GuildMessageUncheckedCreateNestedManyWithoutGuildUserInput
  }

  export type GuildUserCreateOrConnectWithoutDiscordUserInput = {
    where: GuildUserWhereUniqueInput
    create: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput>
  }

  export type GuildUserCreateManyDiscordUserInputEnvelope = {
    data: GuildUserCreateManyDiscordUserInput | GuildUserCreateManyDiscordUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUniversityCreateWithoutDiscordUserInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutDiscordUserInput = {
    id?: string
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutDiscordUserInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput>
  }

  export type DiscordUniversityCreateManyDiscordUserInputEnvelope = {
    data: DiscordUniversityCreateManyDiscordUserInput | DiscordUniversityCreateManyDiscordUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutDiscordUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutDiscordUserInput, TokenUncheckedUpdateWithoutDiscordUserInput>
    create: XOR<TokenCreateWithoutDiscordUserInput, TokenUncheckedCreateWithoutDiscordUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutDiscordUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutDiscordUserInput, TokenUncheckedUpdateWithoutDiscordUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutDiscordUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutDiscordUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    discordUserId?: StringNullableFilter<"Token"> | string | null
  }

  export type GuildUserUpsertWithWhereUniqueWithoutDiscordUserInput = {
    where: GuildUserWhereUniqueInput
    update: XOR<GuildUserUpdateWithoutDiscordUserInput, GuildUserUncheckedUpdateWithoutDiscordUserInput>
    create: XOR<GuildUserCreateWithoutDiscordUserInput, GuildUserUncheckedCreateWithoutDiscordUserInput>
  }

  export type GuildUserUpdateWithWhereUniqueWithoutDiscordUserInput = {
    where: GuildUserWhereUniqueInput
    data: XOR<GuildUserUpdateWithoutDiscordUserInput, GuildUserUncheckedUpdateWithoutDiscordUserInput>
  }

  export type GuildUserUpdateManyWithWhereWithoutDiscordUserInput = {
    where: GuildUserScalarWhereInput
    data: XOR<GuildUserUpdateManyMutationInput, GuildUserUncheckedUpdateManyWithoutDiscordUserInput>
  }

  export type DiscordUniversityUpsertWithWhereUniqueWithoutDiscordUserInput = {
    where: DiscordUniversityWhereUniqueInput
    update: XOR<DiscordUniversityUpdateWithoutDiscordUserInput, DiscordUniversityUncheckedUpdateWithoutDiscordUserInput>
    create: XOR<DiscordUniversityCreateWithoutDiscordUserInput, DiscordUniversityUncheckedCreateWithoutDiscordUserInput>
  }

  export type DiscordUniversityUpdateWithWhereUniqueWithoutDiscordUserInput = {
    where: DiscordUniversityWhereUniqueInput
    data: XOR<DiscordUniversityUpdateWithoutDiscordUserInput, DiscordUniversityUncheckedUpdateWithoutDiscordUserInput>
  }

  export type DiscordUniversityUpdateManyWithWhereWithoutDiscordUserInput = {
    where: DiscordUniversityScalarWhereInput
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyWithoutDiscordUserInput>
  }

  export type DiscordUniversityScalarWhereInput = {
    AND?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
    OR?: DiscordUniversityScalarWhereInput[]
    NOT?: DiscordUniversityScalarWhereInput | DiscordUniversityScalarWhereInput[]
    id?: StringFilter<"DiscordUniversity"> | string
    discordUserId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailVerificationId?: StringNullableFilter<"DiscordUniversity"> | string | null
    emailCode?: StringNullableFilter<"DiscordUniversity"> | string | null
    biometricEntryId?: StringNullableFilter<"DiscordUniversity"> | string | null
    fullName?: StringNullableFilter<"DiscordUniversity"> | string | null
    isExternal?: BoolFilter<"DiscordUniversity"> | boolean
    helperId?: StringNullableFilter<"DiscordUniversity"> | string | null
    helperCode?: StringNullableFilter<"DiscordUniversity"> | string | null
    studentId?: StringNullableFilter<"DiscordUniversity"> | string | null
    isVerified?: BoolFilter<"DiscordUniversity"> | boolean
  }

  export type DiscordUserCreateWithoutTokensInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    guilds?: GuildUserCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserUncheckedCreateWithoutTokensInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    guilds?: GuildUserUncheckedCreateNestedManyWithoutDiscordUserInput
    link?: DiscordUniversityUncheckedCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserCreateOrConnectWithoutTokensInput = {
    where: DiscordUserWhereUniqueInput
    create: XOR<DiscordUserCreateWithoutTokensInput, DiscordUserUncheckedCreateWithoutTokensInput>
  }

  export type DiscordUserUpsertWithoutTokensInput = {
    update: XOR<DiscordUserUpdateWithoutTokensInput, DiscordUserUncheckedUpdateWithoutTokensInput>
    create: XOR<DiscordUserCreateWithoutTokensInput, DiscordUserUncheckedCreateWithoutTokensInput>
    where?: DiscordUserWhereInput
  }

  export type DiscordUserUpdateToOneWithWhereWithoutTokensInput = {
    where?: DiscordUserWhereInput
    data: XOR<DiscordUserUpdateWithoutTokensInput, DiscordUserUncheckedUpdateWithoutTokensInput>
  }

  export type DiscordUserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guilds?: GuildUserUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guilds?: GuildUserUncheckedUpdateManyWithoutDiscordUserNestedInput
    link?: DiscordUniversityUncheckedUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserCreateWithoutLinkInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutDiscordUserInput
    guilds?: GuildUserCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserUncheckedCreateWithoutLinkInput = {
    id?: string
    discordId: string
    avatar?: string | null
    username: string
    createdAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutDiscordUserInput
    guilds?: GuildUserUncheckedCreateNestedManyWithoutDiscordUserInput
  }

  export type DiscordUserCreateOrConnectWithoutLinkInput = {
    where: DiscordUserWhereUniqueInput
    create: XOR<DiscordUserCreateWithoutLinkInput, DiscordUserUncheckedCreateWithoutLinkInput>
  }

  export type EmailVerificationCreateWithoutLinkInput = {
    id?: string
    email: string
    isVerified?: boolean
  }

  export type EmailVerificationUncheckedCreateWithoutLinkInput = {
    id?: string
    email: string
    isVerified?: boolean
  }

  export type EmailVerificationCreateOrConnectWithoutLinkInput = {
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateWithoutLinkInput, EmailVerificationUncheckedCreateWithoutLinkInput>
  }

  export type BiometricEntryCreateWithoutLinkInput = {
    id?: string
    universityID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BiometricEntryUncheckedCreateWithoutLinkInput = {
    id?: string
    universityID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BiometricEntryCreateOrConnectWithoutLinkInput = {
    where: BiometricEntryWhereUniqueInput
    create: XOR<BiometricEntryCreateWithoutLinkInput, BiometricEntryUncheckedCreateWithoutLinkInput>
  }

  export type DiscordUniversityCreateWithoutHelperInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutHelperInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutHelperInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput>
  }

  export type DiscordUniversityCreateManyHelperInputEnvelope = {
    data: DiscordUniversityCreateManyHelperInput | DiscordUniversityCreateManyHelperInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUniversityCreateWithoutExternalsHelpedInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutExternalsHelpedInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutExternalsHelpedInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutExternalsHelpedInput, DiscordUniversityUncheckedCreateWithoutExternalsHelpedInput>
  }

  export type AuthorityHitCreateWithoutDiscordUniversityInput = {
    id?: string
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
    Guilds?: GuildsCreateNestedOneWithoutAuthorityHitsInput
  }

  export type AuthorityHitUncheckedCreateWithoutDiscordUniversityInput = {
    id?: string
    guildsId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type AuthorityHitCreateOrConnectWithoutDiscordUniversityInput = {
    where: AuthorityHitWhereUniqueInput
    create: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput>
  }

  export type AuthorityHitCreateManyDiscordUniversityInputEnvelope = {
    data: AuthorityHitCreateManyDiscordUniversityInput | AuthorityHitCreateManyDiscordUniversityInput[]
    skipDuplicates?: boolean
  }

  export type GuildsCreateWithoutDiscordUniversityInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogCreateNestedManyWithoutGuildsInput
  }

  export type GuildsUncheckedCreateWithoutDiscordUniversityInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserUncheckedCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsCreateOrConnectWithoutDiscordUniversityInput = {
    where: GuildsWhereUniqueInput
    create: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput>
  }

  export type GuildsCreateManyDiscordUniversityInputEnvelope = {
    data: GuildsCreateManyDiscordUniversityInput | GuildsCreateManyDiscordUniversityInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUserUpsertWithoutLinkInput = {
    update: XOR<DiscordUserUpdateWithoutLinkInput, DiscordUserUncheckedUpdateWithoutLinkInput>
    create: XOR<DiscordUserCreateWithoutLinkInput, DiscordUserUncheckedCreateWithoutLinkInput>
    where?: DiscordUserWhereInput
  }

  export type DiscordUserUpdateToOneWithWhereWithoutLinkInput = {
    where?: DiscordUserWhereInput
    data: XOR<DiscordUserUpdateWithoutLinkInput, DiscordUserUncheckedUpdateWithoutLinkInput>
  }

  export type DiscordUserUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutDiscordUserNestedInput
    guilds?: GuildUserUpdateManyWithoutDiscordUserNestedInput
  }

  export type DiscordUserUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutDiscordUserNestedInput
    guilds?: GuildUserUncheckedUpdateManyWithoutDiscordUserNestedInput
  }

  export type EmailVerificationUpsertWithoutLinkInput = {
    update: XOR<EmailVerificationUpdateWithoutLinkInput, EmailVerificationUncheckedUpdateWithoutLinkInput>
    create: XOR<EmailVerificationCreateWithoutLinkInput, EmailVerificationUncheckedCreateWithoutLinkInput>
    where?: EmailVerificationWhereInput
  }

  export type EmailVerificationUpdateToOneWithWhereWithoutLinkInput = {
    where?: EmailVerificationWhereInput
    data: XOR<EmailVerificationUpdateWithoutLinkInput, EmailVerificationUncheckedUpdateWithoutLinkInput>
  }

  export type EmailVerificationUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailVerificationUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BiometricEntryUpsertWithoutLinkInput = {
    update: XOR<BiometricEntryUpdateWithoutLinkInput, BiometricEntryUncheckedUpdateWithoutLinkInput>
    create: XOR<BiometricEntryCreateWithoutLinkInput, BiometricEntryUncheckedCreateWithoutLinkInput>
    where?: BiometricEntryWhereInput
  }

  export type BiometricEntryUpdateToOneWithWhereWithoutLinkInput = {
    where?: BiometricEntryWhereInput
    data: XOR<BiometricEntryUpdateWithoutLinkInput, BiometricEntryUncheckedUpdateWithoutLinkInput>
  }

  export type BiometricEntryUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricEntryUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordUniversityUpsertWithWhereUniqueWithoutHelperInput = {
    where: DiscordUniversityWhereUniqueInput
    update: XOR<DiscordUniversityUpdateWithoutHelperInput, DiscordUniversityUncheckedUpdateWithoutHelperInput>
    create: XOR<DiscordUniversityCreateWithoutHelperInput, DiscordUniversityUncheckedCreateWithoutHelperInput>
  }

  export type DiscordUniversityUpdateWithWhereUniqueWithoutHelperInput = {
    where: DiscordUniversityWhereUniqueInput
    data: XOR<DiscordUniversityUpdateWithoutHelperInput, DiscordUniversityUncheckedUpdateWithoutHelperInput>
  }

  export type DiscordUniversityUpdateManyWithWhereWithoutHelperInput = {
    where: DiscordUniversityScalarWhereInput
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyWithoutHelperInput>
  }

  export type DiscordUniversityUpsertWithoutExternalsHelpedInput = {
    update: XOR<DiscordUniversityUpdateWithoutExternalsHelpedInput, DiscordUniversityUncheckedUpdateWithoutExternalsHelpedInput>
    create: XOR<DiscordUniversityCreateWithoutExternalsHelpedInput, DiscordUniversityUncheckedCreateWithoutExternalsHelpedInput>
    where?: DiscordUniversityWhereInput
  }

  export type DiscordUniversityUpdateToOneWithWhereWithoutExternalsHelpedInput = {
    where?: DiscordUniversityWhereInput
    data: XOR<DiscordUniversityUpdateWithoutExternalsHelpedInput, DiscordUniversityUncheckedUpdateWithoutExternalsHelpedInput>
  }

  export type DiscordUniversityUpdateWithoutExternalsHelpedInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutExternalsHelpedInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type AuthorityHitUpsertWithWhereUniqueWithoutDiscordUniversityInput = {
    where: AuthorityHitWhereUniqueInput
    update: XOR<AuthorityHitUpdateWithoutDiscordUniversityInput, AuthorityHitUncheckedUpdateWithoutDiscordUniversityInput>
    create: XOR<AuthorityHitCreateWithoutDiscordUniversityInput, AuthorityHitUncheckedCreateWithoutDiscordUniversityInput>
  }

  export type AuthorityHitUpdateWithWhereUniqueWithoutDiscordUniversityInput = {
    where: AuthorityHitWhereUniqueInput
    data: XOR<AuthorityHitUpdateWithoutDiscordUniversityInput, AuthorityHitUncheckedUpdateWithoutDiscordUniversityInput>
  }

  export type AuthorityHitUpdateManyWithWhereWithoutDiscordUniversityInput = {
    where: AuthorityHitScalarWhereInput
    data: XOR<AuthorityHitUpdateManyMutationInput, AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityInput>
  }

  export type GuildsUpsertWithWhereUniqueWithoutDiscordUniversityInput = {
    where: GuildsWhereUniqueInput
    update: XOR<GuildsUpdateWithoutDiscordUniversityInput, GuildsUncheckedUpdateWithoutDiscordUniversityInput>
    create: XOR<GuildsCreateWithoutDiscordUniversityInput, GuildsUncheckedCreateWithoutDiscordUniversityInput>
  }

  export type GuildsUpdateWithWhereUniqueWithoutDiscordUniversityInput = {
    where: GuildsWhereUniqueInput
    data: XOR<GuildsUpdateWithoutDiscordUniversityInput, GuildsUncheckedUpdateWithoutDiscordUniversityInput>
  }

  export type GuildsUpdateManyWithWhereWithoutDiscordUniversityInput = {
    where: GuildsScalarWhereInput
    data: XOR<GuildsUpdateManyMutationInput, GuildsUncheckedUpdateManyWithoutDiscordUniversityInput>
  }

  export type GuildsScalarWhereInput = {
    AND?: GuildsScalarWhereInput | GuildsScalarWhereInput[]
    OR?: GuildsScalarWhereInput[]
    NOT?: GuildsScalarWhereInput | GuildsScalarWhereInput[]
    id?: StringFilter<"Guilds"> | string
    guildId?: StringFilter<"Guilds"> | string
    guildName?: StringFilter<"Guilds"> | string
    guildIcon?: StringNullableFilter<"Guilds"> | string | null
    backgroundImage?: StringNullableFilter<"Guilds"> | string | null
    createdAt?: DateTimeFilter<"Guilds"> | Date | string
    updatedAt?: DateTimeFilter<"Guilds"> | Date | string
    discordUniversityId?: StringNullableFilter<"Guilds"> | string | null
  }

  export type DiscordUniversityCreateWithoutAuthorityHitsInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutAuthorityHitsInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutAuthorityHitsInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutAuthorityHitsInput, DiscordUniversityUncheckedCreateWithoutAuthorityHitsInput>
  }

  export type GuildsCreateWithoutAuthorityHitsInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GuildUserCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogCreateNestedManyWithoutGuildsInput
    DiscordUniversity?: DiscordUniversityCreateNestedOneWithoutGuildsInput
  }

  export type GuildsUncheckedCreateWithoutAuthorityHitsInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discordUniversityId?: string | null
    members?: GuildUserUncheckedCreateNestedManyWithoutGuildsInput
    settings?: GuildSettingsUncheckedCreateNestedManyWithoutGuildsInput
    GuildLog?: GuildLogUncheckedCreateNestedManyWithoutGuildsInput
  }

  export type GuildsCreateOrConnectWithoutAuthorityHitsInput = {
    where: GuildsWhereUniqueInput
    create: XOR<GuildsCreateWithoutAuthorityHitsInput, GuildsUncheckedCreateWithoutAuthorityHitsInput>
  }

  export type DiscordUniversityUpsertWithoutAuthorityHitsInput = {
    update: XOR<DiscordUniversityUpdateWithoutAuthorityHitsInput, DiscordUniversityUncheckedUpdateWithoutAuthorityHitsInput>
    create: XOR<DiscordUniversityCreateWithoutAuthorityHitsInput, DiscordUniversityUncheckedCreateWithoutAuthorityHitsInput>
    where?: DiscordUniversityWhereInput
  }

  export type DiscordUniversityUpdateToOneWithWhereWithoutAuthorityHitsInput = {
    where?: DiscordUniversityWhereInput
    data: XOR<DiscordUniversityUpdateWithoutAuthorityHitsInput, DiscordUniversityUncheckedUpdateWithoutAuthorityHitsInput>
  }

  export type DiscordUniversityUpdateWithoutAuthorityHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutAuthorityHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type GuildsUpsertWithoutAuthorityHitsInput = {
    update: XOR<GuildsUpdateWithoutAuthorityHitsInput, GuildsUncheckedUpdateWithoutAuthorityHitsInput>
    create: XOR<GuildsCreateWithoutAuthorityHitsInput, GuildsUncheckedCreateWithoutAuthorityHitsInput>
    where?: GuildsWhereInput
  }

  export type GuildsUpdateToOneWithWhereWithoutAuthorityHitsInput = {
    where?: GuildsWhereInput
    data: XOR<GuildsUpdateWithoutAuthorityHitsInput, GuildsUncheckedUpdateWithoutAuthorityHitsInput>
  }

  export type GuildsUpdateWithoutAuthorityHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUpdateManyWithoutGuildsNestedInput
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateWithoutAuthorityHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: GuildUserUncheckedUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type DiscordUniversityCreateWithoutEmailVerificationInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    BiometricEntry?: BiometricEntryCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutEmailVerificationInput = {
    id?: string
    discordUserId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutEmailVerificationInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput>
  }

  export type DiscordUniversityCreateManyEmailVerificationInputEnvelope = {
    data: DiscordUniversityCreateManyEmailVerificationInput | DiscordUniversityCreateManyEmailVerificationInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUniversityUpsertWithWhereUniqueWithoutEmailVerificationInput = {
    where: DiscordUniversityWhereUniqueInput
    update: XOR<DiscordUniversityUpdateWithoutEmailVerificationInput, DiscordUniversityUncheckedUpdateWithoutEmailVerificationInput>
    create: XOR<DiscordUniversityCreateWithoutEmailVerificationInput, DiscordUniversityUncheckedCreateWithoutEmailVerificationInput>
  }

  export type DiscordUniversityUpdateWithWhereUniqueWithoutEmailVerificationInput = {
    where: DiscordUniversityWhereUniqueInput
    data: XOR<DiscordUniversityUpdateWithoutEmailVerificationInput, DiscordUniversityUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type DiscordUniversityUpdateManyWithWhereWithoutEmailVerificationInput = {
    where: DiscordUniversityScalarWhereInput
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyWithoutEmailVerificationInput>
  }

  export type DiscordUniversityCreateWithoutBiometricEntryInput = {
    id?: string
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    DiscordUser?: DiscordUserCreateNestedOneWithoutLinkInput
    emailVerification?: EmailVerificationCreateNestedOneWithoutLinkInput
    externalsHelped?: DiscordUniversityCreateNestedManyWithoutHelperInput
    helper?: DiscordUniversityCreateNestedOneWithoutExternalsHelpedInput
    authorityHits?: AuthorityHitCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityUncheckedCreateWithoutBiometricEntryInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
    externalsHelped?: DiscordUniversityUncheckedCreateNestedManyWithoutHelperInput
    authorityHits?: AuthorityHitUncheckedCreateNestedManyWithoutDiscordUniversityInput
    Guilds?: GuildsUncheckedCreateNestedManyWithoutDiscordUniversityInput
  }

  export type DiscordUniversityCreateOrConnectWithoutBiometricEntryInput = {
    where: DiscordUniversityWhereUniqueInput
    create: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput>
  }

  export type DiscordUniversityCreateManyBiometricEntryInputEnvelope = {
    data: DiscordUniversityCreateManyBiometricEntryInput | DiscordUniversityCreateManyBiometricEntryInput[]
    skipDuplicates?: boolean
  }

  export type DiscordUniversityUpsertWithWhereUniqueWithoutBiometricEntryInput = {
    where: DiscordUniversityWhereUniqueInput
    update: XOR<DiscordUniversityUpdateWithoutBiometricEntryInput, DiscordUniversityUncheckedUpdateWithoutBiometricEntryInput>
    create: XOR<DiscordUniversityCreateWithoutBiometricEntryInput, DiscordUniversityUncheckedCreateWithoutBiometricEntryInput>
  }

  export type DiscordUniversityUpdateWithWhereUniqueWithoutBiometricEntryInput = {
    where: DiscordUniversityWhereUniqueInput
    data: XOR<DiscordUniversityUpdateWithoutBiometricEntryInput, DiscordUniversityUncheckedUpdateWithoutBiometricEntryInput>
  }

  export type DiscordUniversityUpdateManyWithWhereWithoutBiometricEntryInput = {
    where: DiscordUniversityScalarWhereInput
    data: XOR<DiscordUniversityUpdateManyMutationInput, DiscordUniversityUncheckedUpdateManyWithoutBiometricEntryInput>
  }

  export type GuildUserCreateManyGuildsInput = {
    id?: string
    discordUserId?: string | null
    isMod?: boolean
    isOwner?: boolean
  }

  export type GuildSettingsCreateManyGuildsInput = {
    id?: string
    allowsEmailEntry?: boolean
    allowsBiometricEntry?: boolean
    allowsExternalEntry?: boolean
    verifiedRoleId?: string | null
    moderatorRoleId?: string | null
    usesUowboNet?: boolean
  }

  export type AuthorityHitCreateManyGuildsInput = {
    id?: string
    discordUniversityId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type GuildLogCreateManyGuildsInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type GuildUserUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutGuildsNestedInput
    messages?: GuildMessageUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    messages?: GuildMessageUncheckedUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserUncheckedUpdateManyWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildSettingsUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildSettingsUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuildSettingsUncheckedUpdateManyWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowsEmailEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsBiometricEntry?: BoolFieldUpdateOperationsInput | boolean
    allowsExternalEntry?: BoolFieldUpdateOperationsInput | boolean
    verifiedRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    moderatorRoleId?: NullableStringFieldUpdateOperationsInput | string | null
    usesUowboNet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorityHitUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiscordUniversity?: DiscordUniversityUpdateOneWithoutAuthorityHitsNestedInput
  }

  export type AuthorityHitUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorityHitUncheckedUpdateManyWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUniversityId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildLogUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildLogUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildLogUncheckedUpdateManyWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMessageCreateManyGuildUserInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type GuildMessageUpdateWithoutGuildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUpdateManyWithoutParentMessageNestedInput
    parentMessage?: GuildMessageUpdateOneWithoutMentionsNestedInput
  }

  export type GuildMessageUncheckedUpdateWithoutGuildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type GuildMessageUncheckedUpdateManyWithoutGuildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildMessageCreateManyParentMessageInput = {
    id: string
    message?: string | null
    guildUserId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type GuildMessageUpdateWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUpdateManyWithoutParentMessageNestedInput
    GuildUser?: GuildUserUpdateOneWithoutMessagesNestedInput
  }

  export type GuildMessageUncheckedUpdateWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    guildUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: GuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type GuildMessageUncheckedUpdateManyWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    guildUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyDiscordUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type GuildUserCreateManyDiscordUserInput = {
    id?: string
    guildsId?: string | null
    isMod?: boolean
    isOwner?: boolean
  }

  export type DiscordUniversityCreateManyDiscordUserInput = {
    id?: string
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
  }

  export type TokenUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildUserUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    Guilds?: GuildsUpdateOneWithoutMembersNestedInput
    messages?: GuildMessageUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserUncheckedUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    messages?: GuildMessageUncheckedUpdateManyWithoutGuildUserNestedInput
  }

  export type GuildUserUncheckedUpdateManyWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    isMod?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordUniversityUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutDiscordUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordUniversityCreateManyHelperInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
  }

  export type AuthorityHitCreateManyDiscordUniversityInput = {
    id?: string
    guildsId?: string | null
    federated?: $Enums.Federated
    reason: string
    type?: $Enums.HitType
    createdAt?: Date | string
  }

  export type GuildsCreateManyDiscordUniversityInput = {
    id?: string
    guildId: string
    guildName: string
    guildIcon?: string | null
    backgroundImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscordUniversityUpdateWithoutHelperInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutHelperInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutHelperInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthorityHitUpdateWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Guilds?: GuildsUpdateOneWithoutAuthorityHitsNestedInput
  }

  export type AuthorityHitUncheckedUpdateWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildsId?: NullableStringFieldUpdateOperationsInput | string | null
    federated?: EnumFederatedFieldUpdateOperationsInput | $Enums.Federated
    reason?: StringFieldUpdateOperationsInput | string
    type?: EnumHitTypeFieldUpdateOperationsInput | $Enums.HitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildsUpdateWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUpdateManyWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GuildUserUncheckedUpdateManyWithoutGuildsNestedInput
    settings?: GuildSettingsUncheckedUpdateManyWithoutGuildsNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutGuildsNestedInput
    GuildLog?: GuildLogUncheckedUpdateManyWithoutGuildsNestedInput
  }

  export type GuildsUncheckedUpdateManyWithoutDiscordUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    guildName?: StringFieldUpdateOperationsInput | string
    guildIcon?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordUniversityCreateManyEmailVerificationInput = {
    id?: string
    discordUserId?: string | null
    emailCode?: string | null
    biometricEntryId?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
  }

  export type DiscordUniversityUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    BiometricEntry?: BiometricEntryUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    biometricEntryId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordUniversityCreateManyBiometricEntryInput = {
    id?: string
    discordUserId?: string | null
    emailVerificationId?: string | null
    emailCode?: string | null
    fullName?: string | null
    isExternal?: boolean
    helperId?: string | null
    helperCode?: string | null
    studentId?: string | null
    isVerified?: boolean
  }

  export type DiscordUniversityUpdateWithoutBiometricEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    DiscordUser?: DiscordUserUpdateOneWithoutLinkNestedInput
    emailVerification?: EmailVerificationUpdateOneWithoutLinkNestedInput
    externalsHelped?: DiscordUniversityUpdateManyWithoutHelperNestedInput
    helper?: DiscordUniversityUpdateOneWithoutExternalsHelpedNestedInput
    authorityHits?: AuthorityHitUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateWithoutBiometricEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    externalsHelped?: DiscordUniversityUncheckedUpdateManyWithoutHelperNestedInput
    authorityHits?: AuthorityHitUncheckedUpdateManyWithoutDiscordUniversityNestedInput
    Guilds?: GuildsUncheckedUpdateManyWithoutDiscordUniversityNestedInput
  }

  export type DiscordUniversityUncheckedUpdateManyWithoutBiometricEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordUserId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationId?: NullableStringFieldUpdateOperationsInput | string | null
    emailCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    helperId?: NullableStringFieldUpdateOperationsInput | string | null
    helperCode?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}