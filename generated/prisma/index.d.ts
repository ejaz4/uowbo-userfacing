
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model LinkedPlatforms
 * 
 */
export type LinkedPlatforms = $Result.DefaultSelection<Prisma.$LinkedPlatformsPayload>
/**
 * Model DiscordGuild
 * 
 */
export type DiscordGuild = $Result.DefaultSelection<Prisma.$DiscordGuildPayload>
/**
 * Model DiscordGuildMember
 * 
 */
export type DiscordGuildMember = $Result.DefaultSelection<Prisma.$DiscordGuildMemberPayload>
/**
 * Model DiscordGuildMessage
 * 
 */
export type DiscordGuildMessage = $Result.DefaultSelection<Prisma.$DiscordGuildMessagePayload>
/**
 * Model LinkedAccounts
 * 
 */
export type LinkedAccounts = $Result.DefaultSelection<Prisma.$LinkedAccountsPayload>
/**
 * Model DiscordAccountLink
 * 
 */
export type DiscordAccountLink = $Result.DefaultSelection<Prisma.$DiscordAccountLinkPayload>
/**
 * Model DiscordSession
 * 
 */
export type DiscordSession = $Result.DefaultSelection<Prisma.$DiscordSessionPayload>
/**
 * Model VerificationMethods
 * 
 */
export type VerificationMethods = $Result.DefaultSelection<Prisma.$VerificationMethodsPayload>
/**
 * Model EmailVerification
 * 
 */
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedPlatforms`: Exposes CRUD operations for the **LinkedPlatforms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedPlatforms
    * const linkedPlatforms = await prisma.linkedPlatforms.findMany()
    * ```
    */
  get linkedPlatforms(): Prisma.LinkedPlatformsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordGuild`: Exposes CRUD operations for the **DiscordGuild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordGuilds
    * const discordGuilds = await prisma.discordGuild.findMany()
    * ```
    */
  get discordGuild(): Prisma.DiscordGuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordGuildMember`: Exposes CRUD operations for the **DiscordGuildMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordGuildMembers
    * const discordGuildMembers = await prisma.discordGuildMember.findMany()
    * ```
    */
  get discordGuildMember(): Prisma.DiscordGuildMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordGuildMessage`: Exposes CRUD operations for the **DiscordGuildMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordGuildMessages
    * const discordGuildMessages = await prisma.discordGuildMessage.findMany()
    * ```
    */
  get discordGuildMessage(): Prisma.DiscordGuildMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedAccounts`: Exposes CRUD operations for the **LinkedAccounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedAccounts
    * const linkedAccounts = await prisma.linkedAccounts.findMany()
    * ```
    */
  get linkedAccounts(): Prisma.LinkedAccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordAccountLink`: Exposes CRUD operations for the **DiscordAccountLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordAccountLinks
    * const discordAccountLinks = await prisma.discordAccountLink.findMany()
    * ```
    */
  get discordAccountLink(): Prisma.DiscordAccountLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discordSession`: Exposes CRUD operations for the **DiscordSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordSessions
    * const discordSessions = await prisma.discordSession.findMany()
    * ```
    */
  get discordSession(): Prisma.DiscordSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationMethods`: Exposes CRUD operations for the **VerificationMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationMethods
    * const verificationMethods = await prisma.verificationMethods.findMany()
    * ```
    */
  get verificationMethods(): Prisma.VerificationMethodsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Tenant: 'Tenant',
    LinkedPlatforms: 'LinkedPlatforms',
    DiscordGuild: 'DiscordGuild',
    DiscordGuildMember: 'DiscordGuildMember',
    DiscordGuildMessage: 'DiscordGuildMessage',
    LinkedAccounts: 'LinkedAccounts',
    DiscordAccountLink: 'DiscordAccountLink',
    DiscordSession: 'DiscordSession',
    VerificationMethods: 'VerificationMethods',
    EmailVerification: 'EmailVerification',
    StudentProfile: 'StudentProfile',
    UserSettings: 'UserSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "linkedPlatforms" | "discordGuild" | "discordGuildMember" | "discordGuildMessage" | "linkedAccounts" | "discordAccountLink" | "discordSession" | "verificationMethods" | "emailVerification" | "studentProfile" | "userSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      LinkedPlatforms: {
        payload: Prisma.$LinkedPlatformsPayload<ExtArgs>
        fields: Prisma.LinkedPlatformsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedPlatformsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedPlatformsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          findFirst: {
            args: Prisma.LinkedPlatformsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedPlatformsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          findMany: {
            args: Prisma.LinkedPlatformsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>[]
          }
          create: {
            args: Prisma.LinkedPlatformsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          createMany: {
            args: Prisma.LinkedPlatformsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedPlatformsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>[]
          }
          delete: {
            args: Prisma.LinkedPlatformsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          update: {
            args: Prisma.LinkedPlatformsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          deleteMany: {
            args: Prisma.LinkedPlatformsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedPlatformsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedPlatformsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>[]
          }
          upsert: {
            args: Prisma.LinkedPlatformsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedPlatformsPayload>
          }
          aggregate: {
            args: Prisma.LinkedPlatformsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedPlatforms>
          }
          groupBy: {
            args: Prisma.LinkedPlatformsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedPlatformsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedPlatformsCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedPlatformsCountAggregateOutputType> | number
          }
        }
      }
      DiscordGuild: {
        payload: Prisma.$DiscordGuildPayload<ExtArgs>
        fields: Prisma.DiscordGuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordGuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordGuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          findFirst: {
            args: Prisma.DiscordGuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordGuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          findMany: {
            args: Prisma.DiscordGuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>[]
          }
          create: {
            args: Prisma.DiscordGuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          createMany: {
            args: Prisma.DiscordGuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordGuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>[]
          }
          delete: {
            args: Prisma.DiscordGuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          update: {
            args: Prisma.DiscordGuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          deleteMany: {
            args: Prisma.DiscordGuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordGuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordGuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>[]
          }
          upsert: {
            args: Prisma.DiscordGuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildPayload>
          }
          aggregate: {
            args: Prisma.DiscordGuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordGuild>
          }
          groupBy: {
            args: Prisma.DiscordGuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordGuildCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildCountAggregateOutputType> | number
          }
        }
      }
      DiscordGuildMember: {
        payload: Prisma.$DiscordGuildMemberPayload<ExtArgs>
        fields: Prisma.DiscordGuildMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordGuildMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordGuildMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          findFirst: {
            args: Prisma.DiscordGuildMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordGuildMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          findMany: {
            args: Prisma.DiscordGuildMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>[]
          }
          create: {
            args: Prisma.DiscordGuildMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          createMany: {
            args: Prisma.DiscordGuildMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordGuildMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>[]
          }
          delete: {
            args: Prisma.DiscordGuildMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          update: {
            args: Prisma.DiscordGuildMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          deleteMany: {
            args: Prisma.DiscordGuildMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordGuildMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordGuildMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>[]
          }
          upsert: {
            args: Prisma.DiscordGuildMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMemberPayload>
          }
          aggregate: {
            args: Prisma.DiscordGuildMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordGuildMember>
          }
          groupBy: {
            args: Prisma.DiscordGuildMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordGuildMemberCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildMemberCountAggregateOutputType> | number
          }
        }
      }
      DiscordGuildMessage: {
        payload: Prisma.$DiscordGuildMessagePayload<ExtArgs>
        fields: Prisma.DiscordGuildMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordGuildMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordGuildMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          findFirst: {
            args: Prisma.DiscordGuildMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordGuildMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          findMany: {
            args: Prisma.DiscordGuildMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>[]
          }
          create: {
            args: Prisma.DiscordGuildMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          createMany: {
            args: Prisma.DiscordGuildMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordGuildMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>[]
          }
          delete: {
            args: Prisma.DiscordGuildMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          update: {
            args: Prisma.DiscordGuildMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          deleteMany: {
            args: Prisma.DiscordGuildMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordGuildMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordGuildMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>[]
          }
          upsert: {
            args: Prisma.DiscordGuildMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordGuildMessagePayload>
          }
          aggregate: {
            args: Prisma.DiscordGuildMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordGuildMessage>
          }
          groupBy: {
            args: Prisma.DiscordGuildMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordGuildMessageCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordGuildMessageCountAggregateOutputType> | number
          }
        }
      }
      LinkedAccounts: {
        payload: Prisma.$LinkedAccountsPayload<ExtArgs>
        fields: Prisma.LinkedAccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedAccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedAccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          findFirst: {
            args: Prisma.LinkedAccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedAccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          findMany: {
            args: Prisma.LinkedAccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>[]
          }
          create: {
            args: Prisma.LinkedAccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          createMany: {
            args: Prisma.LinkedAccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedAccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>[]
          }
          delete: {
            args: Prisma.LinkedAccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          update: {
            args: Prisma.LinkedAccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          deleteMany: {
            args: Prisma.LinkedAccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedAccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedAccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>[]
          }
          upsert: {
            args: Prisma.LinkedAccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedAccountsPayload>
          }
          aggregate: {
            args: Prisma.LinkedAccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedAccounts>
          }
          groupBy: {
            args: Prisma.LinkedAccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedAccountsCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedAccountsCountAggregateOutputType> | number
          }
        }
      }
      DiscordAccountLink: {
        payload: Prisma.$DiscordAccountLinkPayload<ExtArgs>
        fields: Prisma.DiscordAccountLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordAccountLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordAccountLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          findFirst: {
            args: Prisma.DiscordAccountLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordAccountLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          findMany: {
            args: Prisma.DiscordAccountLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>[]
          }
          create: {
            args: Prisma.DiscordAccountLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          createMany: {
            args: Prisma.DiscordAccountLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordAccountLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>[]
          }
          delete: {
            args: Prisma.DiscordAccountLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          update: {
            args: Prisma.DiscordAccountLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          deleteMany: {
            args: Prisma.DiscordAccountLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordAccountLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordAccountLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>[]
          }
          upsert: {
            args: Prisma.DiscordAccountLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordAccountLinkPayload>
          }
          aggregate: {
            args: Prisma.DiscordAccountLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordAccountLink>
          }
          groupBy: {
            args: Prisma.DiscordAccountLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordAccountLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordAccountLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordAccountLinkCountAggregateOutputType> | number
          }
        }
      }
      DiscordSession: {
        payload: Prisma.$DiscordSessionPayload<ExtArgs>
        fields: Prisma.DiscordSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscordSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscordSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          findFirst: {
            args: Prisma.DiscordSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscordSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          findMany: {
            args: Prisma.DiscordSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>[]
          }
          create: {
            args: Prisma.DiscordSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          createMany: {
            args: Prisma.DiscordSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscordSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>[]
          }
          delete: {
            args: Prisma.DiscordSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          update: {
            args: Prisma.DiscordSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          deleteMany: {
            args: Prisma.DiscordSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscordSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscordSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>[]
          }
          upsert: {
            args: Prisma.DiscordSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscordSessionPayload>
          }
          aggregate: {
            args: Prisma.DiscordSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscordSession>
          }
          groupBy: {
            args: Prisma.DiscordSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscordSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscordSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscordSessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationMethods: {
        payload: Prisma.$VerificationMethodsPayload<ExtArgs>
        fields: Prisma.VerificationMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationMethodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationMethodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          findFirst: {
            args: Prisma.VerificationMethodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationMethodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          findMany: {
            args: Prisma.VerificationMethodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>[]
          }
          create: {
            args: Prisma.VerificationMethodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          createMany: {
            args: Prisma.VerificationMethodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationMethodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>[]
          }
          delete: {
            args: Prisma.VerificationMethodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          update: {
            args: Prisma.VerificationMethodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          deleteMany: {
            args: Prisma.VerificationMethodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationMethodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationMethodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>[]
          }
          upsert: {
            args: Prisma.VerificationMethodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationMethodsPayload>
          }
          aggregate: {
            args: Prisma.VerificationMethodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationMethods>
          }
          groupBy: {
            args: Prisma.VerificationMethodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationMethodsCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationMethodsCountAggregateOutputType> | number
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
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    linkedPlatforms?: LinkedPlatformsOmit
    discordGuild?: DiscordGuildOmit
    discordGuildMember?: DiscordGuildMemberOmit
    discordGuildMessage?: DiscordGuildMessageOmit
    linkedAccounts?: LinkedAccountsOmit
    discordAccountLink?: DiscordAccountLinkOmit
    discordSession?: DiscordSessionOmit
    verificationMethods?: VerificationMethodsOmit
    emailVerification?: EmailVerificationOmit
    studentProfile?: StudentProfileOmit
    userSettings?: UserSettingsOmit
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
   * Count Type DiscordGuildCountOutputType
   */

  export type DiscordGuildCountOutputType = {
    guildMembers: number
  }

  export type DiscordGuildCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guildMembers?: boolean | DiscordGuildCountOutputTypeCountGuildMembersArgs
  }

  // Custom InputTypes
  /**
   * DiscordGuildCountOutputType without action
   */
  export type DiscordGuildCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildCountOutputType
     */
    select?: DiscordGuildCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordGuildCountOutputType without action
   */
  export type DiscordGuildCountOutputTypeCountGuildMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMemberWhereInput
  }


  /**
   * Count Type DiscordGuildMemberCountOutputType
   */

  export type DiscordGuildMemberCountOutputType = {
    messages: number
  }

  export type DiscordGuildMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | DiscordGuildMemberCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * DiscordGuildMemberCountOutputType without action
   */
  export type DiscordGuildMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMemberCountOutputType
     */
    select?: DiscordGuildMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordGuildMemberCountOutputType without action
   */
  export type DiscordGuildMemberCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMessageWhereInput
  }


  /**
   * Count Type DiscordGuildMessageCountOutputType
   */

  export type DiscordGuildMessageCountOutputType = {
    mentions: number
  }

  export type DiscordGuildMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentions?: boolean | DiscordGuildMessageCountOutputTypeCountMentionsArgs
  }

  // Custom InputTypes
  /**
   * DiscordGuildMessageCountOutputType without action
   */
  export type DiscordGuildMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessageCountOutputType
     */
    select?: DiscordGuildMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordGuildMessageCountOutputType without action
   */
  export type DiscordGuildMessageCountOutputTypeCountMentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMessageWhereInput
  }


  /**
   * Count Type DiscordAccountLinkCountOutputType
   */

  export type DiscordAccountLinkCountOutputType = {
    sessions: number
    guilds: number
  }

  export type DiscordAccountLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | DiscordAccountLinkCountOutputTypeCountSessionsArgs
    guilds?: boolean | DiscordAccountLinkCountOutputTypeCountGuildsArgs
  }

  // Custom InputTypes
  /**
   * DiscordAccountLinkCountOutputType without action
   */
  export type DiscordAccountLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLinkCountOutputType
     */
    select?: DiscordAccountLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscordAccountLinkCountOutputType without action
   */
  export type DiscordAccountLinkCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordSessionWhereInput
  }

  /**
   * DiscordAccountLinkCountOutputType without action
   */
  export type DiscordAccountLinkCountOutputTypeCountGuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMemberWhereInput
  }


  /**
   * Count Type VerificationMethodsCountOutputType
   */

  export type VerificationMethodsCountOutputType = {
    emailVerification: number
  }

  export type VerificationMethodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerification?: boolean | VerificationMethodsCountOutputTypeCountEmailVerificationArgs
  }

  // Custom InputTypes
  /**
   * VerificationMethodsCountOutputType without action
   */
  export type VerificationMethodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethodsCountOutputType
     */
    select?: VerificationMethodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VerificationMethodsCountOutputType without action
   */
  export type VerificationMethodsCountOutputTypeCountEmailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
  }


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    verificationMethods: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationMethods?: boolean | StudentProfileCountOutputTypeCountVerificationMethodsArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountVerificationMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationMethodsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    linkedPlatforms?: boolean | Tenant$linkedPlatformsArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedPlatforms?: boolean | Tenant$linkedPlatformsArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      linkedPlatforms: Prisma.$LinkedPlatformsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linkedPlatforms<T extends Tenant$linkedPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$linkedPlatformsArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly icon: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.linkedPlatforms
   */
  export type Tenant$linkedPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    where?: LinkedPlatformsWhereInput
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model LinkedPlatforms
   */

  export type AggregateLinkedPlatforms = {
    _count: LinkedPlatformsCountAggregateOutputType | null
    _min: LinkedPlatformsMinAggregateOutputType | null
    _max: LinkedPlatformsMaxAggregateOutputType | null
  }

  export type LinkedPlatformsMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
  }

  export type LinkedPlatformsMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
  }

  export type LinkedPlatformsCountAggregateOutputType = {
    id: number
    tenantId: number
    _all: number
  }


  export type LinkedPlatformsMinAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type LinkedPlatformsMaxAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type LinkedPlatformsCountAggregateInputType = {
    id?: true
    tenantId?: true
    _all?: true
  }

  export type LinkedPlatformsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedPlatforms to aggregate.
     */
    where?: LinkedPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedPlatforms to fetch.
     */
    orderBy?: LinkedPlatformsOrderByWithRelationInput | LinkedPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedPlatforms
    **/
    _count?: true | LinkedPlatformsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedPlatformsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedPlatformsMaxAggregateInputType
  }

  export type GetLinkedPlatformsAggregateType<T extends LinkedPlatformsAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedPlatforms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedPlatforms[P]>
      : GetScalarType<T[P], AggregateLinkedPlatforms[P]>
  }




  export type LinkedPlatformsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedPlatformsWhereInput
    orderBy?: LinkedPlatformsOrderByWithAggregationInput | LinkedPlatformsOrderByWithAggregationInput[]
    by: LinkedPlatformsScalarFieldEnum[] | LinkedPlatformsScalarFieldEnum
    having?: LinkedPlatformsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedPlatformsCountAggregateInputType | true
    _min?: LinkedPlatformsMinAggregateInputType
    _max?: LinkedPlatformsMaxAggregateInputType
  }

  export type LinkedPlatformsGroupByOutputType = {
    id: string
    tenantId: string
    _count: LinkedPlatformsCountAggregateOutputType | null
    _min: LinkedPlatformsMinAggregateOutputType | null
    _max: LinkedPlatformsMaxAggregateOutputType | null
  }

  type GetLinkedPlatformsGroupByPayload<T extends LinkedPlatformsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedPlatformsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedPlatformsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedPlatformsGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedPlatformsGroupByOutputType[P]>
        }
      >
    >


  export type LinkedPlatformsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    discordGuild?: boolean | LinkedPlatforms$discordGuildArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedPlatforms"]>

  export type LinkedPlatformsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedPlatforms"]>

  export type LinkedPlatformsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedPlatforms"]>

  export type LinkedPlatformsSelectScalar = {
    id?: boolean
    tenantId?: boolean
  }

  export type LinkedPlatformsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId", ExtArgs["result"]["linkedPlatforms"]>
  export type LinkedPlatformsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordGuild?: boolean | LinkedPlatforms$discordGuildArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type LinkedPlatformsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type LinkedPlatformsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $LinkedPlatformsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedPlatforms"
    objects: {
      discordGuild: Prisma.$DiscordGuildPayload<ExtArgs> | null
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
    }, ExtArgs["result"]["linkedPlatforms"]>
    composites: {}
  }

  type LinkedPlatformsGetPayload<S extends boolean | null | undefined | LinkedPlatformsDefaultArgs> = $Result.GetResult<Prisma.$LinkedPlatformsPayload, S>

  type LinkedPlatformsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedPlatformsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedPlatformsCountAggregateInputType | true
    }

  export interface LinkedPlatformsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedPlatforms'], meta: { name: 'LinkedPlatforms' } }
    /**
     * Find zero or one LinkedPlatforms that matches the filter.
     * @param {LinkedPlatformsFindUniqueArgs} args - Arguments to find a LinkedPlatforms
     * @example
     * // Get one LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedPlatformsFindUniqueArgs>(args: SelectSubset<T, LinkedPlatformsFindUniqueArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedPlatforms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedPlatformsFindUniqueOrThrowArgs} args - Arguments to find a LinkedPlatforms
     * @example
     * // Get one LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedPlatformsFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedPlatformsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsFindFirstArgs} args - Arguments to find a LinkedPlatforms
     * @example
     * // Get one LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedPlatformsFindFirstArgs>(args?: SelectSubset<T, LinkedPlatformsFindFirstArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedPlatforms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsFindFirstOrThrowArgs} args - Arguments to find a LinkedPlatforms
     * @example
     * // Get one LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedPlatformsFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedPlatformsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findMany()
     * 
     * // Get first 10 LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedPlatformsWithIdOnly = await prisma.linkedPlatforms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedPlatformsFindManyArgs>(args?: SelectSubset<T, LinkedPlatformsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedPlatforms.
     * @param {LinkedPlatformsCreateArgs} args - Arguments to create a LinkedPlatforms.
     * @example
     * // Create one LinkedPlatforms
     * const LinkedPlatforms = await prisma.linkedPlatforms.create({
     *   data: {
     *     // ... data to create a LinkedPlatforms
     *   }
     * })
     * 
     */
    create<T extends LinkedPlatformsCreateArgs>(args: SelectSubset<T, LinkedPlatformsCreateArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedPlatforms.
     * @param {LinkedPlatformsCreateManyArgs} args - Arguments to create many LinkedPlatforms.
     * @example
     * // Create many LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedPlatformsCreateManyArgs>(args?: SelectSubset<T, LinkedPlatformsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedPlatforms and returns the data saved in the database.
     * @param {LinkedPlatformsCreateManyAndReturnArgs} args - Arguments to create many LinkedPlatforms.
     * @example
     * // Create many LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedPlatforms and only return the `id`
     * const linkedPlatformsWithIdOnly = await prisma.linkedPlatforms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedPlatformsCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedPlatformsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedPlatforms.
     * @param {LinkedPlatformsDeleteArgs} args - Arguments to delete one LinkedPlatforms.
     * @example
     * // Delete one LinkedPlatforms
     * const LinkedPlatforms = await prisma.linkedPlatforms.delete({
     *   where: {
     *     // ... filter to delete one LinkedPlatforms
     *   }
     * })
     * 
     */
    delete<T extends LinkedPlatformsDeleteArgs>(args: SelectSubset<T, LinkedPlatformsDeleteArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedPlatforms.
     * @param {LinkedPlatformsUpdateArgs} args - Arguments to update one LinkedPlatforms.
     * @example
     * // Update one LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedPlatformsUpdateArgs>(args: SelectSubset<T, LinkedPlatformsUpdateArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedPlatforms.
     * @param {LinkedPlatformsDeleteManyArgs} args - Arguments to filter LinkedPlatforms to delete.
     * @example
     * // Delete a few LinkedPlatforms
     * const { count } = await prisma.linkedPlatforms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedPlatformsDeleteManyArgs>(args?: SelectSubset<T, LinkedPlatformsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedPlatformsUpdateManyArgs>(args: SelectSubset<T, LinkedPlatformsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedPlatforms and returns the data updated in the database.
     * @param {LinkedPlatformsUpdateManyAndReturnArgs} args - Arguments to update many LinkedPlatforms.
     * @example
     * // Update many LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedPlatforms and only return the `id`
     * const linkedPlatformsWithIdOnly = await prisma.linkedPlatforms.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkedPlatformsUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedPlatformsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedPlatforms.
     * @param {LinkedPlatformsUpsertArgs} args - Arguments to update or create a LinkedPlatforms.
     * @example
     * // Update or create a LinkedPlatforms
     * const linkedPlatforms = await prisma.linkedPlatforms.upsert({
     *   create: {
     *     // ... data to create a LinkedPlatforms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedPlatforms we want to update
     *   }
     * })
     */
    upsert<T extends LinkedPlatformsUpsertArgs>(args: SelectSubset<T, LinkedPlatformsUpsertArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsCountArgs} args - Arguments to filter LinkedPlatforms to count.
     * @example
     * // Count the number of LinkedPlatforms
     * const count = await prisma.linkedPlatforms.count({
     *   where: {
     *     // ... the filter for the LinkedPlatforms we want to count
     *   }
     * })
    **/
    count<T extends LinkedPlatformsCountArgs>(
      args?: Subset<T, LinkedPlatformsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedPlatformsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedPlatformsAggregateArgs>(args: Subset<T, LinkedPlatformsAggregateArgs>): Prisma.PrismaPromise<GetLinkedPlatformsAggregateType<T>>

    /**
     * Group by LinkedPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedPlatformsGroupByArgs} args - Group by arguments.
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
      T extends LinkedPlatformsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedPlatformsGroupByArgs['orderBy'] }
        : { orderBy?: LinkedPlatformsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedPlatformsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedPlatformsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedPlatforms model
   */
  readonly fields: LinkedPlatformsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedPlatforms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedPlatformsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discordGuild<T extends LinkedPlatforms$discordGuildArgs<ExtArgs> = {}>(args?: Subset<T, LinkedPlatforms$discordGuildArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LinkedPlatforms model
   */
  interface LinkedPlatformsFieldRefs {
    readonly id: FieldRef<"LinkedPlatforms", 'String'>
    readonly tenantId: FieldRef<"LinkedPlatforms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkedPlatforms findUnique
   */
  export type LinkedPlatformsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedPlatforms to fetch.
     */
    where: LinkedPlatformsWhereUniqueInput
  }

  /**
   * LinkedPlatforms findUniqueOrThrow
   */
  export type LinkedPlatformsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedPlatforms to fetch.
     */
    where: LinkedPlatformsWhereUniqueInput
  }

  /**
   * LinkedPlatforms findFirst
   */
  export type LinkedPlatformsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedPlatforms to fetch.
     */
    where?: LinkedPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedPlatforms to fetch.
     */
    orderBy?: LinkedPlatformsOrderByWithRelationInput | LinkedPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedPlatforms.
     */
    cursor?: LinkedPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedPlatforms.
     */
    distinct?: LinkedPlatformsScalarFieldEnum | LinkedPlatformsScalarFieldEnum[]
  }

  /**
   * LinkedPlatforms findFirstOrThrow
   */
  export type LinkedPlatformsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedPlatforms to fetch.
     */
    where?: LinkedPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedPlatforms to fetch.
     */
    orderBy?: LinkedPlatformsOrderByWithRelationInput | LinkedPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedPlatforms.
     */
    cursor?: LinkedPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedPlatforms.
     */
    distinct?: LinkedPlatformsScalarFieldEnum | LinkedPlatformsScalarFieldEnum[]
  }

  /**
   * LinkedPlatforms findMany
   */
  export type LinkedPlatformsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedPlatforms to fetch.
     */
    where?: LinkedPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedPlatforms to fetch.
     */
    orderBy?: LinkedPlatformsOrderByWithRelationInput | LinkedPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedPlatforms.
     */
    cursor?: LinkedPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedPlatforms.
     */
    skip?: number
    distinct?: LinkedPlatformsScalarFieldEnum | LinkedPlatformsScalarFieldEnum[]
  }

  /**
   * LinkedPlatforms create
   */
  export type LinkedPlatformsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedPlatforms.
     */
    data: XOR<LinkedPlatformsCreateInput, LinkedPlatformsUncheckedCreateInput>
  }

  /**
   * LinkedPlatforms createMany
   */
  export type LinkedPlatformsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedPlatforms.
     */
    data: LinkedPlatformsCreateManyInput | LinkedPlatformsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedPlatforms createManyAndReturn
   */
  export type LinkedPlatformsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedPlatforms.
     */
    data: LinkedPlatformsCreateManyInput | LinkedPlatformsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedPlatforms update
   */
  export type LinkedPlatformsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedPlatforms.
     */
    data: XOR<LinkedPlatformsUpdateInput, LinkedPlatformsUncheckedUpdateInput>
    /**
     * Choose, which LinkedPlatforms to update.
     */
    where: LinkedPlatformsWhereUniqueInput
  }

  /**
   * LinkedPlatforms updateMany
   */
  export type LinkedPlatformsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedPlatforms.
     */
    data: XOR<LinkedPlatformsUpdateManyMutationInput, LinkedPlatformsUncheckedUpdateManyInput>
    /**
     * Filter which LinkedPlatforms to update
     */
    where?: LinkedPlatformsWhereInput
    /**
     * Limit how many LinkedPlatforms to update.
     */
    limit?: number
  }

  /**
   * LinkedPlatforms updateManyAndReturn
   */
  export type LinkedPlatformsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * The data used to update LinkedPlatforms.
     */
    data: XOR<LinkedPlatformsUpdateManyMutationInput, LinkedPlatformsUncheckedUpdateManyInput>
    /**
     * Filter which LinkedPlatforms to update
     */
    where?: LinkedPlatformsWhereInput
    /**
     * Limit how many LinkedPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedPlatforms upsert
   */
  export type LinkedPlatformsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedPlatforms to update in case it exists.
     */
    where: LinkedPlatformsWhereUniqueInput
    /**
     * In case the LinkedPlatforms found by the `where` argument doesn't exist, create a new LinkedPlatforms with this data.
     */
    create: XOR<LinkedPlatformsCreateInput, LinkedPlatformsUncheckedCreateInput>
    /**
     * In case the LinkedPlatforms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedPlatformsUpdateInput, LinkedPlatformsUncheckedUpdateInput>
  }

  /**
   * LinkedPlatforms delete
   */
  export type LinkedPlatformsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    /**
     * Filter which LinkedPlatforms to delete.
     */
    where: LinkedPlatformsWhereUniqueInput
  }

  /**
   * LinkedPlatforms deleteMany
   */
  export type LinkedPlatformsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedPlatforms to delete
     */
    where?: LinkedPlatformsWhereInput
    /**
     * Limit how many LinkedPlatforms to delete.
     */
    limit?: number
  }

  /**
   * LinkedPlatforms.discordGuild
   */
  export type LinkedPlatforms$discordGuildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    where?: DiscordGuildWhereInput
  }

  /**
   * LinkedPlatforms without action
   */
  export type LinkedPlatformsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
  }


  /**
   * Model DiscordGuild
   */

  export type AggregateDiscordGuild = {
    _count: DiscordGuildCountAggregateOutputType | null
    _min: DiscordGuildMinAggregateOutputType | null
    _max: DiscordGuildMaxAggregateOutputType | null
  }

  export type DiscordGuildMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    linkedToId: string | null
  }

  export type DiscordGuildMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    linkedToId: string | null
  }

  export type DiscordGuildCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    linkedToId: number
    _all: number
  }


  export type DiscordGuildMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    linkedToId?: true
  }

  export type DiscordGuildMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    linkedToId?: true
  }

  export type DiscordGuildCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    linkedToId?: true
    _all?: true
  }

  export type DiscordGuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuild to aggregate.
     */
    where?: DiscordGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuilds to fetch.
     */
    orderBy?: DiscordGuildOrderByWithRelationInput | DiscordGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordGuilds
    **/
    _count?: true | DiscordGuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordGuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordGuildMaxAggregateInputType
  }

  export type GetDiscordGuildAggregateType<T extends DiscordGuildAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordGuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordGuild[P]>
      : GetScalarType<T[P], AggregateDiscordGuild[P]>
  }




  export type DiscordGuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildWhereInput
    orderBy?: DiscordGuildOrderByWithAggregationInput | DiscordGuildOrderByWithAggregationInput[]
    by: DiscordGuildScalarFieldEnum[] | DiscordGuildScalarFieldEnum
    having?: DiscordGuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordGuildCountAggregateInputType | true
    _min?: DiscordGuildMinAggregateInputType
    _max?: DiscordGuildMaxAggregateInputType
  }

  export type DiscordGuildGroupByOutputType = {
    id: string
    name: string
    icon: string | null
    linkedToId: string | null
    _count: DiscordGuildCountAggregateOutputType | null
    _min: DiscordGuildMinAggregateOutputType | null
    _max: DiscordGuildMaxAggregateOutputType | null
  }

  type GetDiscordGuildGroupByPayload<T extends DiscordGuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordGuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordGuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordGuildGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordGuildGroupByOutputType[P]>
        }
      >
    >


  export type DiscordGuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    linkedToId?: boolean
    guildMembers?: boolean | DiscordGuild$guildMembersArgs<ExtArgs>
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
    _count?: boolean | DiscordGuildCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuild"]>

  export type DiscordGuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    linkedToId?: boolean
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuild"]>

  export type DiscordGuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    linkedToId?: boolean
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuild"]>

  export type DiscordGuildSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    linkedToId?: boolean
  }

  export type DiscordGuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "linkedToId", ExtArgs["result"]["discordGuild"]>
  export type DiscordGuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guildMembers?: boolean | DiscordGuild$guildMembersArgs<ExtArgs>
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
    _count?: boolean | DiscordGuildCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordGuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
  }
  export type DiscordGuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedTo?: boolean | DiscordGuild$linkedToArgs<ExtArgs>
  }

  export type $DiscordGuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordGuild"
    objects: {
      guildMembers: Prisma.$DiscordGuildMemberPayload<ExtArgs>[]
      linkedTo: Prisma.$LinkedPlatformsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string | null
      linkedToId: string | null
    }, ExtArgs["result"]["discordGuild"]>
    composites: {}
  }

  type DiscordGuildGetPayload<S extends boolean | null | undefined | DiscordGuildDefaultArgs> = $Result.GetResult<Prisma.$DiscordGuildPayload, S>

  type DiscordGuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordGuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordGuildCountAggregateInputType | true
    }

  export interface DiscordGuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordGuild'], meta: { name: 'DiscordGuild' } }
    /**
     * Find zero or one DiscordGuild that matches the filter.
     * @param {DiscordGuildFindUniqueArgs} args - Arguments to find a DiscordGuild
     * @example
     * // Get one DiscordGuild
     * const discordGuild = await prisma.discordGuild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordGuildFindUniqueArgs>(args: SelectSubset<T, DiscordGuildFindUniqueArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordGuild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordGuildFindUniqueOrThrowArgs} args - Arguments to find a DiscordGuild
     * @example
     * // Get one DiscordGuild
     * const discordGuild = await prisma.discordGuild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordGuildFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordGuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildFindFirstArgs} args - Arguments to find a DiscordGuild
     * @example
     * // Get one DiscordGuild
     * const discordGuild = await prisma.discordGuild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordGuildFindFirstArgs>(args?: SelectSubset<T, DiscordGuildFindFirstArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildFindFirstOrThrowArgs} args - Arguments to find a DiscordGuild
     * @example
     * // Get one DiscordGuild
     * const discordGuild = await prisma.discordGuild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordGuildFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordGuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordGuilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordGuilds
     * const discordGuilds = await prisma.discordGuild.findMany()
     * 
     * // Get first 10 DiscordGuilds
     * const discordGuilds = await prisma.discordGuild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordGuildWithIdOnly = await prisma.discordGuild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordGuildFindManyArgs>(args?: SelectSubset<T, DiscordGuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordGuild.
     * @param {DiscordGuildCreateArgs} args - Arguments to create a DiscordGuild.
     * @example
     * // Create one DiscordGuild
     * const DiscordGuild = await prisma.discordGuild.create({
     *   data: {
     *     // ... data to create a DiscordGuild
     *   }
     * })
     * 
     */
    create<T extends DiscordGuildCreateArgs>(args: SelectSubset<T, DiscordGuildCreateArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordGuilds.
     * @param {DiscordGuildCreateManyArgs} args - Arguments to create many DiscordGuilds.
     * @example
     * // Create many DiscordGuilds
     * const discordGuild = await prisma.discordGuild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordGuildCreateManyArgs>(args?: SelectSubset<T, DiscordGuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordGuilds and returns the data saved in the database.
     * @param {DiscordGuildCreateManyAndReturnArgs} args - Arguments to create many DiscordGuilds.
     * @example
     * // Create many DiscordGuilds
     * const discordGuild = await prisma.discordGuild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordGuilds and only return the `id`
     * const discordGuildWithIdOnly = await prisma.discordGuild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordGuildCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordGuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordGuild.
     * @param {DiscordGuildDeleteArgs} args - Arguments to delete one DiscordGuild.
     * @example
     * // Delete one DiscordGuild
     * const DiscordGuild = await prisma.discordGuild.delete({
     *   where: {
     *     // ... filter to delete one DiscordGuild
     *   }
     * })
     * 
     */
    delete<T extends DiscordGuildDeleteArgs>(args: SelectSubset<T, DiscordGuildDeleteArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordGuild.
     * @param {DiscordGuildUpdateArgs} args - Arguments to update one DiscordGuild.
     * @example
     * // Update one DiscordGuild
     * const discordGuild = await prisma.discordGuild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordGuildUpdateArgs>(args: SelectSubset<T, DiscordGuildUpdateArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordGuilds.
     * @param {DiscordGuildDeleteManyArgs} args - Arguments to filter DiscordGuilds to delete.
     * @example
     * // Delete a few DiscordGuilds
     * const { count } = await prisma.discordGuild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordGuildDeleteManyArgs>(args?: SelectSubset<T, DiscordGuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordGuilds
     * const discordGuild = await prisma.discordGuild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordGuildUpdateManyArgs>(args: SelectSubset<T, DiscordGuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuilds and returns the data updated in the database.
     * @param {DiscordGuildUpdateManyAndReturnArgs} args - Arguments to update many DiscordGuilds.
     * @example
     * // Update many DiscordGuilds
     * const discordGuild = await prisma.discordGuild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordGuilds and only return the `id`
     * const discordGuildWithIdOnly = await prisma.discordGuild.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordGuildUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordGuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordGuild.
     * @param {DiscordGuildUpsertArgs} args - Arguments to update or create a DiscordGuild.
     * @example
     * // Update or create a DiscordGuild
     * const discordGuild = await prisma.discordGuild.upsert({
     *   create: {
     *     // ... data to create a DiscordGuild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordGuild we want to update
     *   }
     * })
     */
    upsert<T extends DiscordGuildUpsertArgs>(args: SelectSubset<T, DiscordGuildUpsertArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordGuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildCountArgs} args - Arguments to filter DiscordGuilds to count.
     * @example
     * // Count the number of DiscordGuilds
     * const count = await prisma.discordGuild.count({
     *   where: {
     *     // ... the filter for the DiscordGuilds we want to count
     *   }
     * })
    **/
    count<T extends DiscordGuildCountArgs>(
      args?: Subset<T, DiscordGuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordGuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordGuildAggregateArgs>(args: Subset<T, DiscordGuildAggregateArgs>): Prisma.PrismaPromise<GetDiscordGuildAggregateType<T>>

    /**
     * Group by DiscordGuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildGroupByArgs} args - Group by arguments.
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
      T extends DiscordGuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordGuildGroupByArgs['orderBy'] }
        : { orderBy?: DiscordGuildGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordGuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordGuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordGuild model
   */
  readonly fields: DiscordGuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordGuild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordGuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guildMembers<T extends DiscordGuild$guildMembersArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuild$guildMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedTo<T extends DiscordGuild$linkedToArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuild$linkedToArgs<ExtArgs>>): Prisma__LinkedPlatformsClient<$Result.GetResult<Prisma.$LinkedPlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiscordGuild model
   */
  interface DiscordGuildFieldRefs {
    readonly id: FieldRef<"DiscordGuild", 'String'>
    readonly name: FieldRef<"DiscordGuild", 'String'>
    readonly icon: FieldRef<"DiscordGuild", 'String'>
    readonly linkedToId: FieldRef<"DiscordGuild", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscordGuild findUnique
   */
  export type DiscordGuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuild to fetch.
     */
    where: DiscordGuildWhereUniqueInput
  }

  /**
   * DiscordGuild findUniqueOrThrow
   */
  export type DiscordGuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuild to fetch.
     */
    where: DiscordGuildWhereUniqueInput
  }

  /**
   * DiscordGuild findFirst
   */
  export type DiscordGuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuild to fetch.
     */
    where?: DiscordGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuilds to fetch.
     */
    orderBy?: DiscordGuildOrderByWithRelationInput | DiscordGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuilds.
     */
    cursor?: DiscordGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuilds.
     */
    distinct?: DiscordGuildScalarFieldEnum | DiscordGuildScalarFieldEnum[]
  }

  /**
   * DiscordGuild findFirstOrThrow
   */
  export type DiscordGuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuild to fetch.
     */
    where?: DiscordGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuilds to fetch.
     */
    orderBy?: DiscordGuildOrderByWithRelationInput | DiscordGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuilds.
     */
    cursor?: DiscordGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuilds.
     */
    distinct?: DiscordGuildScalarFieldEnum | DiscordGuildScalarFieldEnum[]
  }

  /**
   * DiscordGuild findMany
   */
  export type DiscordGuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuilds to fetch.
     */
    where?: DiscordGuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuilds to fetch.
     */
    orderBy?: DiscordGuildOrderByWithRelationInput | DiscordGuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordGuilds.
     */
    cursor?: DiscordGuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuilds.
     */
    skip?: number
    distinct?: DiscordGuildScalarFieldEnum | DiscordGuildScalarFieldEnum[]
  }

  /**
   * DiscordGuild create
   */
  export type DiscordGuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordGuild.
     */
    data: XOR<DiscordGuildCreateInput, DiscordGuildUncheckedCreateInput>
  }

  /**
   * DiscordGuild createMany
   */
  export type DiscordGuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordGuilds.
     */
    data: DiscordGuildCreateManyInput | DiscordGuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordGuild createManyAndReturn
   */
  export type DiscordGuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordGuilds.
     */
    data: DiscordGuildCreateManyInput | DiscordGuildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuild update
   */
  export type DiscordGuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordGuild.
     */
    data: XOR<DiscordGuildUpdateInput, DiscordGuildUncheckedUpdateInput>
    /**
     * Choose, which DiscordGuild to update.
     */
    where: DiscordGuildWhereUniqueInput
  }

  /**
   * DiscordGuild updateMany
   */
  export type DiscordGuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordGuilds.
     */
    data: XOR<DiscordGuildUpdateManyMutationInput, DiscordGuildUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuilds to update
     */
    where?: DiscordGuildWhereInput
    /**
     * Limit how many DiscordGuilds to update.
     */
    limit?: number
  }

  /**
   * DiscordGuild updateManyAndReturn
   */
  export type DiscordGuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * The data used to update DiscordGuilds.
     */
    data: XOR<DiscordGuildUpdateManyMutationInput, DiscordGuildUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuilds to update
     */
    where?: DiscordGuildWhereInput
    /**
     * Limit how many DiscordGuilds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuild upsert
   */
  export type DiscordGuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordGuild to update in case it exists.
     */
    where: DiscordGuildWhereUniqueInput
    /**
     * In case the DiscordGuild found by the `where` argument doesn't exist, create a new DiscordGuild with this data.
     */
    create: XOR<DiscordGuildCreateInput, DiscordGuildUncheckedCreateInput>
    /**
     * In case the DiscordGuild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordGuildUpdateInput, DiscordGuildUncheckedUpdateInput>
  }

  /**
   * DiscordGuild delete
   */
  export type DiscordGuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
    /**
     * Filter which DiscordGuild to delete.
     */
    where: DiscordGuildWhereUniqueInput
  }

  /**
   * DiscordGuild deleteMany
   */
  export type DiscordGuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuilds to delete
     */
    where?: DiscordGuildWhereInput
    /**
     * Limit how many DiscordGuilds to delete.
     */
    limit?: number
  }

  /**
   * DiscordGuild.guildMembers
   */
  export type DiscordGuild$guildMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    where?: DiscordGuildMemberWhereInput
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    cursor?: DiscordGuildMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordGuildMemberScalarFieldEnum | DiscordGuildMemberScalarFieldEnum[]
  }

  /**
   * DiscordGuild.linkedTo
   */
  export type DiscordGuild$linkedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedPlatforms
     */
    select?: LinkedPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedPlatforms
     */
    omit?: LinkedPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedPlatformsInclude<ExtArgs> | null
    where?: LinkedPlatformsWhereInput
  }

  /**
   * DiscordGuild without action
   */
  export type DiscordGuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuild
     */
    select?: DiscordGuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuild
     */
    omit?: DiscordGuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildInclude<ExtArgs> | null
  }


  /**
   * Model DiscordGuildMember
   */

  export type AggregateDiscordGuildMember = {
    _count: DiscordGuildMemberCountAggregateOutputType | null
    _min: DiscordGuildMemberMinAggregateOutputType | null
    _max: DiscordGuildMemberMaxAggregateOutputType | null
  }

  export type DiscordGuildMemberMinAggregateOutputType = {
    id: string | null
    discordGuildId: string | null
    discordAccountLinkId: string | null
    isOwner: boolean | null
    joinedAt: Date | null
  }

  export type DiscordGuildMemberMaxAggregateOutputType = {
    id: string | null
    discordGuildId: string | null
    discordAccountLinkId: string | null
    isOwner: boolean | null
    joinedAt: Date | null
  }

  export type DiscordGuildMemberCountAggregateOutputType = {
    id: number
    discordGuildId: number
    discordAccountLinkId: number
    isOwner: number
    joinedAt: number
    _all: number
  }


  export type DiscordGuildMemberMinAggregateInputType = {
    id?: true
    discordGuildId?: true
    discordAccountLinkId?: true
    isOwner?: true
    joinedAt?: true
  }

  export type DiscordGuildMemberMaxAggregateInputType = {
    id?: true
    discordGuildId?: true
    discordAccountLinkId?: true
    isOwner?: true
    joinedAt?: true
  }

  export type DiscordGuildMemberCountAggregateInputType = {
    id?: true
    discordGuildId?: true
    discordAccountLinkId?: true
    isOwner?: true
    joinedAt?: true
    _all?: true
  }

  export type DiscordGuildMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuildMember to aggregate.
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMembers to fetch.
     */
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordGuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordGuildMembers
    **/
    _count?: true | DiscordGuildMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordGuildMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordGuildMemberMaxAggregateInputType
  }

  export type GetDiscordGuildMemberAggregateType<T extends DiscordGuildMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordGuildMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordGuildMember[P]>
      : GetScalarType<T[P], AggregateDiscordGuildMember[P]>
  }




  export type DiscordGuildMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMemberWhereInput
    orderBy?: DiscordGuildMemberOrderByWithAggregationInput | DiscordGuildMemberOrderByWithAggregationInput[]
    by: DiscordGuildMemberScalarFieldEnum[] | DiscordGuildMemberScalarFieldEnum
    having?: DiscordGuildMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordGuildMemberCountAggregateInputType | true
    _min?: DiscordGuildMemberMinAggregateInputType
    _max?: DiscordGuildMemberMaxAggregateInputType
  }

  export type DiscordGuildMemberGroupByOutputType = {
    id: string
    discordGuildId: string
    discordAccountLinkId: string
    isOwner: boolean
    joinedAt: Date
    _count: DiscordGuildMemberCountAggregateOutputType | null
    _min: DiscordGuildMemberMinAggregateOutputType | null
    _max: DiscordGuildMemberMaxAggregateOutputType | null
  }

  type GetDiscordGuildMemberGroupByPayload<T extends DiscordGuildMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordGuildMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordGuildMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordGuildMemberGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordGuildMemberGroupByOutputType[P]>
        }
      >
    >


  export type DiscordGuildMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordGuildId?: boolean
    discordAccountLinkId?: boolean
    isOwner?: boolean
    joinedAt?: boolean
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
    messages?: boolean | DiscordGuildMember$messagesArgs<ExtArgs>
    _count?: boolean | DiscordGuildMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMember"]>

  export type DiscordGuildMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordGuildId?: boolean
    discordAccountLinkId?: boolean
    isOwner?: boolean
    joinedAt?: boolean
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMember"]>

  export type DiscordGuildMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordGuildId?: boolean
    discordAccountLinkId?: boolean
    isOwner?: boolean
    joinedAt?: boolean
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMember"]>

  export type DiscordGuildMemberSelectScalar = {
    id?: boolean
    discordGuildId?: boolean
    discordAccountLinkId?: boolean
    isOwner?: boolean
    joinedAt?: boolean
  }

  export type DiscordGuildMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordGuildId" | "discordAccountLinkId" | "isOwner" | "joinedAt", ExtArgs["result"]["discordGuildMember"]>
  export type DiscordGuildMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
    messages?: boolean | DiscordGuildMember$messagesArgs<ExtArgs>
    _count?: boolean | DiscordGuildMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordGuildMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
  }
  export type DiscordGuildMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordGuild?: boolean | DiscordGuildDefaultArgs<ExtArgs>
    discord?: boolean | DiscordAccountLinkDefaultArgs<ExtArgs>
  }

  export type $DiscordGuildMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordGuildMember"
    objects: {
      discordGuild: Prisma.$DiscordGuildPayload<ExtArgs>
      discord: Prisma.$DiscordAccountLinkPayload<ExtArgs>
      messages: Prisma.$DiscordGuildMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordGuildId: string
      discordAccountLinkId: string
      isOwner: boolean
      joinedAt: Date
    }, ExtArgs["result"]["discordGuildMember"]>
    composites: {}
  }

  type DiscordGuildMemberGetPayload<S extends boolean | null | undefined | DiscordGuildMemberDefaultArgs> = $Result.GetResult<Prisma.$DiscordGuildMemberPayload, S>

  type DiscordGuildMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordGuildMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordGuildMemberCountAggregateInputType | true
    }

  export interface DiscordGuildMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordGuildMember'], meta: { name: 'DiscordGuildMember' } }
    /**
     * Find zero or one DiscordGuildMember that matches the filter.
     * @param {DiscordGuildMemberFindUniqueArgs} args - Arguments to find a DiscordGuildMember
     * @example
     * // Get one DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordGuildMemberFindUniqueArgs>(args: SelectSubset<T, DiscordGuildMemberFindUniqueArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordGuildMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordGuildMemberFindUniqueOrThrowArgs} args - Arguments to find a DiscordGuildMember
     * @example
     * // Get one DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordGuildMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordGuildMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuildMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberFindFirstArgs} args - Arguments to find a DiscordGuildMember
     * @example
     * // Get one DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordGuildMemberFindFirstArgs>(args?: SelectSubset<T, DiscordGuildMemberFindFirstArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuildMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberFindFirstOrThrowArgs} args - Arguments to find a DiscordGuildMember
     * @example
     * // Get one DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordGuildMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordGuildMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordGuildMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordGuildMembers
     * const discordGuildMembers = await prisma.discordGuildMember.findMany()
     * 
     * // Get first 10 DiscordGuildMembers
     * const discordGuildMembers = await prisma.discordGuildMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordGuildMemberWithIdOnly = await prisma.discordGuildMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordGuildMemberFindManyArgs>(args?: SelectSubset<T, DiscordGuildMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordGuildMember.
     * @param {DiscordGuildMemberCreateArgs} args - Arguments to create a DiscordGuildMember.
     * @example
     * // Create one DiscordGuildMember
     * const DiscordGuildMember = await prisma.discordGuildMember.create({
     *   data: {
     *     // ... data to create a DiscordGuildMember
     *   }
     * })
     * 
     */
    create<T extends DiscordGuildMemberCreateArgs>(args: SelectSubset<T, DiscordGuildMemberCreateArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordGuildMembers.
     * @param {DiscordGuildMemberCreateManyArgs} args - Arguments to create many DiscordGuildMembers.
     * @example
     * // Create many DiscordGuildMembers
     * const discordGuildMember = await prisma.discordGuildMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordGuildMemberCreateManyArgs>(args?: SelectSubset<T, DiscordGuildMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordGuildMembers and returns the data saved in the database.
     * @param {DiscordGuildMemberCreateManyAndReturnArgs} args - Arguments to create many DiscordGuildMembers.
     * @example
     * // Create many DiscordGuildMembers
     * const discordGuildMember = await prisma.discordGuildMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordGuildMembers and only return the `id`
     * const discordGuildMemberWithIdOnly = await prisma.discordGuildMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordGuildMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordGuildMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordGuildMember.
     * @param {DiscordGuildMemberDeleteArgs} args - Arguments to delete one DiscordGuildMember.
     * @example
     * // Delete one DiscordGuildMember
     * const DiscordGuildMember = await prisma.discordGuildMember.delete({
     *   where: {
     *     // ... filter to delete one DiscordGuildMember
     *   }
     * })
     * 
     */
    delete<T extends DiscordGuildMemberDeleteArgs>(args: SelectSubset<T, DiscordGuildMemberDeleteArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordGuildMember.
     * @param {DiscordGuildMemberUpdateArgs} args - Arguments to update one DiscordGuildMember.
     * @example
     * // Update one DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordGuildMemberUpdateArgs>(args: SelectSubset<T, DiscordGuildMemberUpdateArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordGuildMembers.
     * @param {DiscordGuildMemberDeleteManyArgs} args - Arguments to filter DiscordGuildMembers to delete.
     * @example
     * // Delete a few DiscordGuildMembers
     * const { count } = await prisma.discordGuildMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordGuildMemberDeleteManyArgs>(args?: SelectSubset<T, DiscordGuildMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuildMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordGuildMembers
     * const discordGuildMember = await prisma.discordGuildMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordGuildMemberUpdateManyArgs>(args: SelectSubset<T, DiscordGuildMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuildMembers and returns the data updated in the database.
     * @param {DiscordGuildMemberUpdateManyAndReturnArgs} args - Arguments to update many DiscordGuildMembers.
     * @example
     * // Update many DiscordGuildMembers
     * const discordGuildMember = await prisma.discordGuildMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordGuildMembers and only return the `id`
     * const discordGuildMemberWithIdOnly = await prisma.discordGuildMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordGuildMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordGuildMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordGuildMember.
     * @param {DiscordGuildMemberUpsertArgs} args - Arguments to update or create a DiscordGuildMember.
     * @example
     * // Update or create a DiscordGuildMember
     * const discordGuildMember = await prisma.discordGuildMember.upsert({
     *   create: {
     *     // ... data to create a DiscordGuildMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordGuildMember we want to update
     *   }
     * })
     */
    upsert<T extends DiscordGuildMemberUpsertArgs>(args: SelectSubset<T, DiscordGuildMemberUpsertArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordGuildMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberCountArgs} args - Arguments to filter DiscordGuildMembers to count.
     * @example
     * // Count the number of DiscordGuildMembers
     * const count = await prisma.discordGuildMember.count({
     *   where: {
     *     // ... the filter for the DiscordGuildMembers we want to count
     *   }
     * })
    **/
    count<T extends DiscordGuildMemberCountArgs>(
      args?: Subset<T, DiscordGuildMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordGuildMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordGuildMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordGuildMemberAggregateArgs>(args: Subset<T, DiscordGuildMemberAggregateArgs>): Prisma.PrismaPromise<GetDiscordGuildMemberAggregateType<T>>

    /**
     * Group by DiscordGuildMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMemberGroupByArgs} args - Group by arguments.
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
      T extends DiscordGuildMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordGuildMemberGroupByArgs['orderBy'] }
        : { orderBy?: DiscordGuildMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordGuildMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordGuildMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordGuildMember model
   */
  readonly fields: DiscordGuildMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordGuildMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordGuildMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discordGuild<T extends DiscordGuildDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuildDefaultArgs<ExtArgs>>): Prisma__DiscordGuildClient<$Result.GetResult<Prisma.$DiscordGuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discord<T extends DiscordAccountLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscordAccountLinkDefaultArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends DiscordGuildMember$messagesArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuildMember$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiscordGuildMember model
   */
  interface DiscordGuildMemberFieldRefs {
    readonly id: FieldRef<"DiscordGuildMember", 'String'>
    readonly discordGuildId: FieldRef<"DiscordGuildMember", 'String'>
    readonly discordAccountLinkId: FieldRef<"DiscordGuildMember", 'String'>
    readonly isOwner: FieldRef<"DiscordGuildMember", 'Boolean'>
    readonly joinedAt: FieldRef<"DiscordGuildMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscordGuildMember findUnique
   */
  export type DiscordGuildMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMember to fetch.
     */
    where: DiscordGuildMemberWhereUniqueInput
  }

  /**
   * DiscordGuildMember findUniqueOrThrow
   */
  export type DiscordGuildMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMember to fetch.
     */
    where: DiscordGuildMemberWhereUniqueInput
  }

  /**
   * DiscordGuildMember findFirst
   */
  export type DiscordGuildMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMember to fetch.
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMembers to fetch.
     */
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuildMembers.
     */
    cursor?: DiscordGuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuildMembers.
     */
    distinct?: DiscordGuildMemberScalarFieldEnum | DiscordGuildMemberScalarFieldEnum[]
  }

  /**
   * DiscordGuildMember findFirstOrThrow
   */
  export type DiscordGuildMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMember to fetch.
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMembers to fetch.
     */
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuildMembers.
     */
    cursor?: DiscordGuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuildMembers.
     */
    distinct?: DiscordGuildMemberScalarFieldEnum | DiscordGuildMemberScalarFieldEnum[]
  }

  /**
   * DiscordGuildMember findMany
   */
  export type DiscordGuildMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMembers to fetch.
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMembers to fetch.
     */
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordGuildMembers.
     */
    cursor?: DiscordGuildMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMembers.
     */
    skip?: number
    distinct?: DiscordGuildMemberScalarFieldEnum | DiscordGuildMemberScalarFieldEnum[]
  }

  /**
   * DiscordGuildMember create
   */
  export type DiscordGuildMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordGuildMember.
     */
    data: XOR<DiscordGuildMemberCreateInput, DiscordGuildMemberUncheckedCreateInput>
  }

  /**
   * DiscordGuildMember createMany
   */
  export type DiscordGuildMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordGuildMembers.
     */
    data: DiscordGuildMemberCreateManyInput | DiscordGuildMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordGuildMember createManyAndReturn
   */
  export type DiscordGuildMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordGuildMembers.
     */
    data: DiscordGuildMemberCreateManyInput | DiscordGuildMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuildMember update
   */
  export type DiscordGuildMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordGuildMember.
     */
    data: XOR<DiscordGuildMemberUpdateInput, DiscordGuildMemberUncheckedUpdateInput>
    /**
     * Choose, which DiscordGuildMember to update.
     */
    where: DiscordGuildMemberWhereUniqueInput
  }

  /**
   * DiscordGuildMember updateMany
   */
  export type DiscordGuildMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordGuildMembers.
     */
    data: XOR<DiscordGuildMemberUpdateManyMutationInput, DiscordGuildMemberUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuildMembers to update
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * Limit how many DiscordGuildMembers to update.
     */
    limit?: number
  }

  /**
   * DiscordGuildMember updateManyAndReturn
   */
  export type DiscordGuildMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * The data used to update DiscordGuildMembers.
     */
    data: XOR<DiscordGuildMemberUpdateManyMutationInput, DiscordGuildMemberUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuildMembers to update
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * Limit how many DiscordGuildMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuildMember upsert
   */
  export type DiscordGuildMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordGuildMember to update in case it exists.
     */
    where: DiscordGuildMemberWhereUniqueInput
    /**
     * In case the DiscordGuildMember found by the `where` argument doesn't exist, create a new DiscordGuildMember with this data.
     */
    create: XOR<DiscordGuildMemberCreateInput, DiscordGuildMemberUncheckedCreateInput>
    /**
     * In case the DiscordGuildMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordGuildMemberUpdateInput, DiscordGuildMemberUncheckedUpdateInput>
  }

  /**
   * DiscordGuildMember delete
   */
  export type DiscordGuildMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    /**
     * Filter which DiscordGuildMember to delete.
     */
    where: DiscordGuildMemberWhereUniqueInput
  }

  /**
   * DiscordGuildMember deleteMany
   */
  export type DiscordGuildMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuildMembers to delete
     */
    where?: DiscordGuildMemberWhereInput
    /**
     * Limit how many DiscordGuildMembers to delete.
     */
    limit?: number
  }

  /**
   * DiscordGuildMember.messages
   */
  export type DiscordGuildMember$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    where?: DiscordGuildMessageWhereInput
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    cursor?: DiscordGuildMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordGuildMessageScalarFieldEnum | DiscordGuildMessageScalarFieldEnum[]
  }

  /**
   * DiscordGuildMember without action
   */
  export type DiscordGuildMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
  }


  /**
   * Model DiscordGuildMessage
   */

  export type AggregateDiscordGuildMessage = {
    _count: DiscordGuildMessageCountAggregateOutputType | null
    _min: DiscordGuildMessageMinAggregateOutputType | null
    _max: DiscordGuildMessageMaxAggregateOutputType | null
  }

  export type DiscordGuildMessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    parentMessageId: string | null
    userId: string | null
    attachmentUrl: string | null
    createdAt: Date | null
  }

  export type DiscordGuildMessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    parentMessageId: string | null
    userId: string | null
    attachmentUrl: string | null
    createdAt: Date | null
  }

  export type DiscordGuildMessageCountAggregateOutputType = {
    id: number
    message: number
    parentMessageId: number
    userId: number
    attachmentUrl: number
    createdAt: number
    _all: number
  }


  export type DiscordGuildMessageMinAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    userId?: true
    attachmentUrl?: true
    createdAt?: true
  }

  export type DiscordGuildMessageMaxAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    userId?: true
    attachmentUrl?: true
    createdAt?: true
  }

  export type DiscordGuildMessageCountAggregateInputType = {
    id?: true
    message?: true
    parentMessageId?: true
    userId?: true
    attachmentUrl?: true
    createdAt?: true
    _all?: true
  }

  export type DiscordGuildMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuildMessage to aggregate.
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMessages to fetch.
     */
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordGuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordGuildMessages
    **/
    _count?: true | DiscordGuildMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordGuildMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordGuildMessageMaxAggregateInputType
  }

  export type GetDiscordGuildMessageAggregateType<T extends DiscordGuildMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordGuildMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordGuildMessage[P]>
      : GetScalarType<T[P], AggregateDiscordGuildMessage[P]>
  }




  export type DiscordGuildMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordGuildMessageWhereInput
    orderBy?: DiscordGuildMessageOrderByWithAggregationInput | DiscordGuildMessageOrderByWithAggregationInput[]
    by: DiscordGuildMessageScalarFieldEnum[] | DiscordGuildMessageScalarFieldEnum
    having?: DiscordGuildMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordGuildMessageCountAggregateInputType | true
    _min?: DiscordGuildMessageMinAggregateInputType
    _max?: DiscordGuildMessageMaxAggregateInputType
  }

  export type DiscordGuildMessageGroupByOutputType = {
    id: string
    message: string | null
    parentMessageId: string | null
    userId: string | null
    attachmentUrl: string | null
    createdAt: Date
    _count: DiscordGuildMessageCountAggregateOutputType | null
    _min: DiscordGuildMessageMinAggregateOutputType | null
    _max: DiscordGuildMessageMaxAggregateOutputType | null
  }

  type GetDiscordGuildMessageGroupByPayload<T extends DiscordGuildMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordGuildMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordGuildMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordGuildMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordGuildMessageGroupByOutputType[P]>
        }
      >
    >


  export type DiscordGuildMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    userId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    mentions?: boolean | DiscordGuildMessage$mentionsArgs<ExtArgs>
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
    _count?: boolean | DiscordGuildMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMessage"]>

  export type DiscordGuildMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    userId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMessage"]>

  export type DiscordGuildMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    userId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
  }, ExtArgs["result"]["discordGuildMessage"]>

  export type DiscordGuildMessageSelectScalar = {
    id?: boolean
    message?: boolean
    parentMessageId?: boolean
    userId?: boolean
    attachmentUrl?: boolean
    createdAt?: boolean
  }

  export type DiscordGuildMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "parentMessageId" | "userId" | "attachmentUrl" | "createdAt", ExtArgs["result"]["discordGuildMessage"]>
  export type DiscordGuildMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentions?: boolean | DiscordGuildMessage$mentionsArgs<ExtArgs>
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
    _count?: boolean | DiscordGuildMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordGuildMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
  }
  export type DiscordGuildMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentMessage?: boolean | DiscordGuildMessage$parentMessageArgs<ExtArgs>
    user?: boolean | DiscordGuildMessage$userArgs<ExtArgs>
  }

  export type $DiscordGuildMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordGuildMessage"
    objects: {
      mentions: Prisma.$DiscordGuildMessagePayload<ExtArgs>[]
      parentMessage: Prisma.$DiscordGuildMessagePayload<ExtArgs> | null
      user: Prisma.$DiscordGuildMemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string | null
      parentMessageId: string | null
      userId: string | null
      attachmentUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["discordGuildMessage"]>
    composites: {}
  }

  type DiscordGuildMessageGetPayload<S extends boolean | null | undefined | DiscordGuildMessageDefaultArgs> = $Result.GetResult<Prisma.$DiscordGuildMessagePayload, S>

  type DiscordGuildMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordGuildMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordGuildMessageCountAggregateInputType | true
    }

  export interface DiscordGuildMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordGuildMessage'], meta: { name: 'DiscordGuildMessage' } }
    /**
     * Find zero or one DiscordGuildMessage that matches the filter.
     * @param {DiscordGuildMessageFindUniqueArgs} args - Arguments to find a DiscordGuildMessage
     * @example
     * // Get one DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordGuildMessageFindUniqueArgs>(args: SelectSubset<T, DiscordGuildMessageFindUniqueArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordGuildMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordGuildMessageFindUniqueOrThrowArgs} args - Arguments to find a DiscordGuildMessage
     * @example
     * // Get one DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordGuildMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordGuildMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuildMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageFindFirstArgs} args - Arguments to find a DiscordGuildMessage
     * @example
     * // Get one DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordGuildMessageFindFirstArgs>(args?: SelectSubset<T, DiscordGuildMessageFindFirstArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordGuildMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageFindFirstOrThrowArgs} args - Arguments to find a DiscordGuildMessage
     * @example
     * // Get one DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordGuildMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordGuildMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordGuildMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordGuildMessages
     * const discordGuildMessages = await prisma.discordGuildMessage.findMany()
     * 
     * // Get first 10 DiscordGuildMessages
     * const discordGuildMessages = await prisma.discordGuildMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordGuildMessageWithIdOnly = await prisma.discordGuildMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordGuildMessageFindManyArgs>(args?: SelectSubset<T, DiscordGuildMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordGuildMessage.
     * @param {DiscordGuildMessageCreateArgs} args - Arguments to create a DiscordGuildMessage.
     * @example
     * // Create one DiscordGuildMessage
     * const DiscordGuildMessage = await prisma.discordGuildMessage.create({
     *   data: {
     *     // ... data to create a DiscordGuildMessage
     *   }
     * })
     * 
     */
    create<T extends DiscordGuildMessageCreateArgs>(args: SelectSubset<T, DiscordGuildMessageCreateArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordGuildMessages.
     * @param {DiscordGuildMessageCreateManyArgs} args - Arguments to create many DiscordGuildMessages.
     * @example
     * // Create many DiscordGuildMessages
     * const discordGuildMessage = await prisma.discordGuildMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordGuildMessageCreateManyArgs>(args?: SelectSubset<T, DiscordGuildMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordGuildMessages and returns the data saved in the database.
     * @param {DiscordGuildMessageCreateManyAndReturnArgs} args - Arguments to create many DiscordGuildMessages.
     * @example
     * // Create many DiscordGuildMessages
     * const discordGuildMessage = await prisma.discordGuildMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordGuildMessages and only return the `id`
     * const discordGuildMessageWithIdOnly = await prisma.discordGuildMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordGuildMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordGuildMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordGuildMessage.
     * @param {DiscordGuildMessageDeleteArgs} args - Arguments to delete one DiscordGuildMessage.
     * @example
     * // Delete one DiscordGuildMessage
     * const DiscordGuildMessage = await prisma.discordGuildMessage.delete({
     *   where: {
     *     // ... filter to delete one DiscordGuildMessage
     *   }
     * })
     * 
     */
    delete<T extends DiscordGuildMessageDeleteArgs>(args: SelectSubset<T, DiscordGuildMessageDeleteArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordGuildMessage.
     * @param {DiscordGuildMessageUpdateArgs} args - Arguments to update one DiscordGuildMessage.
     * @example
     * // Update one DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordGuildMessageUpdateArgs>(args: SelectSubset<T, DiscordGuildMessageUpdateArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordGuildMessages.
     * @param {DiscordGuildMessageDeleteManyArgs} args - Arguments to filter DiscordGuildMessages to delete.
     * @example
     * // Delete a few DiscordGuildMessages
     * const { count } = await prisma.discordGuildMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordGuildMessageDeleteManyArgs>(args?: SelectSubset<T, DiscordGuildMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuildMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordGuildMessages
     * const discordGuildMessage = await prisma.discordGuildMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordGuildMessageUpdateManyArgs>(args: SelectSubset<T, DiscordGuildMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordGuildMessages and returns the data updated in the database.
     * @param {DiscordGuildMessageUpdateManyAndReturnArgs} args - Arguments to update many DiscordGuildMessages.
     * @example
     * // Update many DiscordGuildMessages
     * const discordGuildMessage = await prisma.discordGuildMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordGuildMessages and only return the `id`
     * const discordGuildMessageWithIdOnly = await prisma.discordGuildMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordGuildMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordGuildMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordGuildMessage.
     * @param {DiscordGuildMessageUpsertArgs} args - Arguments to update or create a DiscordGuildMessage.
     * @example
     * // Update or create a DiscordGuildMessage
     * const discordGuildMessage = await prisma.discordGuildMessage.upsert({
     *   create: {
     *     // ... data to create a DiscordGuildMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordGuildMessage we want to update
     *   }
     * })
     */
    upsert<T extends DiscordGuildMessageUpsertArgs>(args: SelectSubset<T, DiscordGuildMessageUpsertArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordGuildMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageCountArgs} args - Arguments to filter DiscordGuildMessages to count.
     * @example
     * // Count the number of DiscordGuildMessages
     * const count = await prisma.discordGuildMessage.count({
     *   where: {
     *     // ... the filter for the DiscordGuildMessages we want to count
     *   }
     * })
    **/
    count<T extends DiscordGuildMessageCountArgs>(
      args?: Subset<T, DiscordGuildMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordGuildMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordGuildMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordGuildMessageAggregateArgs>(args: Subset<T, DiscordGuildMessageAggregateArgs>): Prisma.PrismaPromise<GetDiscordGuildMessageAggregateType<T>>

    /**
     * Group by DiscordGuildMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordGuildMessageGroupByArgs} args - Group by arguments.
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
      T extends DiscordGuildMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordGuildMessageGroupByArgs['orderBy'] }
        : { orderBy?: DiscordGuildMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordGuildMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordGuildMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordGuildMessage model
   */
  readonly fields: DiscordGuildMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordGuildMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordGuildMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentions<T extends DiscordGuildMessage$mentionsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuildMessage$mentionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentMessage<T extends DiscordGuildMessage$parentMessageArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuildMessage$parentMessageArgs<ExtArgs>>): Prisma__DiscordGuildMessageClient<$Result.GetResult<Prisma.$DiscordGuildMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends DiscordGuildMessage$userArgs<ExtArgs> = {}>(args?: Subset<T, DiscordGuildMessage$userArgs<ExtArgs>>): Prisma__DiscordGuildMemberClient<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiscordGuildMessage model
   */
  interface DiscordGuildMessageFieldRefs {
    readonly id: FieldRef<"DiscordGuildMessage", 'String'>
    readonly message: FieldRef<"DiscordGuildMessage", 'String'>
    readonly parentMessageId: FieldRef<"DiscordGuildMessage", 'String'>
    readonly userId: FieldRef<"DiscordGuildMessage", 'String'>
    readonly attachmentUrl: FieldRef<"DiscordGuildMessage", 'String'>
    readonly createdAt: FieldRef<"DiscordGuildMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscordGuildMessage findUnique
   */
  export type DiscordGuildMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMessage to fetch.
     */
    where: DiscordGuildMessageWhereUniqueInput
  }

  /**
   * DiscordGuildMessage findUniqueOrThrow
   */
  export type DiscordGuildMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMessage to fetch.
     */
    where: DiscordGuildMessageWhereUniqueInput
  }

  /**
   * DiscordGuildMessage findFirst
   */
  export type DiscordGuildMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMessage to fetch.
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMessages to fetch.
     */
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuildMessages.
     */
    cursor?: DiscordGuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuildMessages.
     */
    distinct?: DiscordGuildMessageScalarFieldEnum | DiscordGuildMessageScalarFieldEnum[]
  }

  /**
   * DiscordGuildMessage findFirstOrThrow
   */
  export type DiscordGuildMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMessage to fetch.
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMessages to fetch.
     */
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordGuildMessages.
     */
    cursor?: DiscordGuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordGuildMessages.
     */
    distinct?: DiscordGuildMessageScalarFieldEnum | DiscordGuildMessageScalarFieldEnum[]
  }

  /**
   * DiscordGuildMessage findMany
   */
  export type DiscordGuildMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscordGuildMessages to fetch.
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordGuildMessages to fetch.
     */
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordGuildMessages.
     */
    cursor?: DiscordGuildMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordGuildMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordGuildMessages.
     */
    skip?: number
    distinct?: DiscordGuildMessageScalarFieldEnum | DiscordGuildMessageScalarFieldEnum[]
  }

  /**
   * DiscordGuildMessage create
   */
  export type DiscordGuildMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordGuildMessage.
     */
    data: XOR<DiscordGuildMessageCreateInput, DiscordGuildMessageUncheckedCreateInput>
  }

  /**
   * DiscordGuildMessage createMany
   */
  export type DiscordGuildMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordGuildMessages.
     */
    data: DiscordGuildMessageCreateManyInput | DiscordGuildMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordGuildMessage createManyAndReturn
   */
  export type DiscordGuildMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordGuildMessages.
     */
    data: DiscordGuildMessageCreateManyInput | DiscordGuildMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuildMessage update
   */
  export type DiscordGuildMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordGuildMessage.
     */
    data: XOR<DiscordGuildMessageUpdateInput, DiscordGuildMessageUncheckedUpdateInput>
    /**
     * Choose, which DiscordGuildMessage to update.
     */
    where: DiscordGuildMessageWhereUniqueInput
  }

  /**
   * DiscordGuildMessage updateMany
   */
  export type DiscordGuildMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordGuildMessages.
     */
    data: XOR<DiscordGuildMessageUpdateManyMutationInput, DiscordGuildMessageUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuildMessages to update
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * Limit how many DiscordGuildMessages to update.
     */
    limit?: number
  }

  /**
   * DiscordGuildMessage updateManyAndReturn
   */
  export type DiscordGuildMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * The data used to update DiscordGuildMessages.
     */
    data: XOR<DiscordGuildMessageUpdateManyMutationInput, DiscordGuildMessageUncheckedUpdateManyInput>
    /**
     * Filter which DiscordGuildMessages to update
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * Limit how many DiscordGuildMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordGuildMessage upsert
   */
  export type DiscordGuildMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordGuildMessage to update in case it exists.
     */
    where: DiscordGuildMessageWhereUniqueInput
    /**
     * In case the DiscordGuildMessage found by the `where` argument doesn't exist, create a new DiscordGuildMessage with this data.
     */
    create: XOR<DiscordGuildMessageCreateInput, DiscordGuildMessageUncheckedCreateInput>
    /**
     * In case the DiscordGuildMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordGuildMessageUpdateInput, DiscordGuildMessageUncheckedUpdateInput>
  }

  /**
   * DiscordGuildMessage delete
   */
  export type DiscordGuildMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    /**
     * Filter which DiscordGuildMessage to delete.
     */
    where: DiscordGuildMessageWhereUniqueInput
  }

  /**
   * DiscordGuildMessage deleteMany
   */
  export type DiscordGuildMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordGuildMessages to delete
     */
    where?: DiscordGuildMessageWhereInput
    /**
     * Limit how many DiscordGuildMessages to delete.
     */
    limit?: number
  }

  /**
   * DiscordGuildMessage.mentions
   */
  export type DiscordGuildMessage$mentionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    where?: DiscordGuildMessageWhereInput
    orderBy?: DiscordGuildMessageOrderByWithRelationInput | DiscordGuildMessageOrderByWithRelationInput[]
    cursor?: DiscordGuildMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordGuildMessageScalarFieldEnum | DiscordGuildMessageScalarFieldEnum[]
  }

  /**
   * DiscordGuildMessage.parentMessage
   */
  export type DiscordGuildMessage$parentMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
    where?: DiscordGuildMessageWhereInput
  }

  /**
   * DiscordGuildMessage.user
   */
  export type DiscordGuildMessage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    where?: DiscordGuildMemberWhereInput
  }

  /**
   * DiscordGuildMessage without action
   */
  export type DiscordGuildMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMessage
     */
    select?: DiscordGuildMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMessage
     */
    omit?: DiscordGuildMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMessageInclude<ExtArgs> | null
  }


  /**
   * Model LinkedAccounts
   */

  export type AggregateLinkedAccounts = {
    _count: LinkedAccountsCountAggregateOutputType | null
    _min: LinkedAccountsMinAggregateOutputType | null
    _max: LinkedAccountsMaxAggregateOutputType | null
  }

  export type LinkedAccountsMinAggregateOutputType = {
    id: string | null
    studentProfileId: string | null
  }

  export type LinkedAccountsMaxAggregateOutputType = {
    id: string | null
    studentProfileId: string | null
  }

  export type LinkedAccountsCountAggregateOutputType = {
    id: number
    studentProfileId: number
    _all: number
  }


  export type LinkedAccountsMinAggregateInputType = {
    id?: true
    studentProfileId?: true
  }

  export type LinkedAccountsMaxAggregateInputType = {
    id?: true
    studentProfileId?: true
  }

  export type LinkedAccountsCountAggregateInputType = {
    id?: true
    studentProfileId?: true
    _all?: true
  }

  export type LinkedAccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to aggregate.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedAccounts
    **/
    _count?: true | LinkedAccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedAccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedAccountsMaxAggregateInputType
  }

  export type GetLinkedAccountsAggregateType<T extends LinkedAccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedAccounts[P]>
      : GetScalarType<T[P], AggregateLinkedAccounts[P]>
  }




  export type LinkedAccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedAccountsWhereInput
    orderBy?: LinkedAccountsOrderByWithAggregationInput | LinkedAccountsOrderByWithAggregationInput[]
    by: LinkedAccountsScalarFieldEnum[] | LinkedAccountsScalarFieldEnum
    having?: LinkedAccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedAccountsCountAggregateInputType | true
    _min?: LinkedAccountsMinAggregateInputType
    _max?: LinkedAccountsMaxAggregateInputType
  }

  export type LinkedAccountsGroupByOutputType = {
    id: string
    studentProfileId: string
    _count: LinkedAccountsCountAggregateOutputType | null
    _min: LinkedAccountsMinAggregateOutputType | null
    _max: LinkedAccountsMaxAggregateOutputType | null
  }

  type GetLinkedAccountsGroupByPayload<T extends LinkedAccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedAccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedAccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedAccountsGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedAccountsGroupByOutputType[P]>
        }
      >
    >


  export type LinkedAccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    discord?: boolean | LinkedAccounts$discordArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccounts"]>

  export type LinkedAccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccounts"]>

  export type LinkedAccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedAccounts"]>

  export type LinkedAccountsSelectScalar = {
    id?: boolean
    studentProfileId?: boolean
  }

  export type LinkedAccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentProfileId", ExtArgs["result"]["linkedAccounts"]>
  export type LinkedAccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    discord?: boolean | LinkedAccounts$discordArgs<ExtArgs>
  }
  export type LinkedAccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type LinkedAccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $LinkedAccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedAccounts"
    objects: {
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs>
      discord: Prisma.$DiscordAccountLinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentProfileId: string
    }, ExtArgs["result"]["linkedAccounts"]>
    composites: {}
  }

  type LinkedAccountsGetPayload<S extends boolean | null | undefined | LinkedAccountsDefaultArgs> = $Result.GetResult<Prisma.$LinkedAccountsPayload, S>

  type LinkedAccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedAccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedAccountsCountAggregateInputType | true
    }

  export interface LinkedAccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedAccounts'], meta: { name: 'LinkedAccounts' } }
    /**
     * Find zero or one LinkedAccounts that matches the filter.
     * @param {LinkedAccountsFindUniqueArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedAccountsFindUniqueArgs>(args: SelectSubset<T, LinkedAccountsFindUniqueArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedAccounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedAccountsFindUniqueOrThrowArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedAccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedAccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindFirstArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedAccountsFindFirstArgs>(args?: SelectSubset<T, LinkedAccountsFindFirstArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedAccounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindFirstOrThrowArgs} args - Arguments to find a LinkedAccounts
     * @example
     * // Get one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedAccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedAccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findMany()
     * 
     * // Get first 10 LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedAccountsWithIdOnly = await prisma.linkedAccounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedAccountsFindManyArgs>(args?: SelectSubset<T, LinkedAccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedAccounts.
     * @param {LinkedAccountsCreateArgs} args - Arguments to create a LinkedAccounts.
     * @example
     * // Create one LinkedAccounts
     * const LinkedAccounts = await prisma.linkedAccounts.create({
     *   data: {
     *     // ... data to create a LinkedAccounts
     *   }
     * })
     * 
     */
    create<T extends LinkedAccountsCreateArgs>(args: SelectSubset<T, LinkedAccountsCreateArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedAccounts.
     * @param {LinkedAccountsCreateManyArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedAccountsCreateManyArgs>(args?: SelectSubset<T, LinkedAccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedAccounts and returns the data saved in the database.
     * @param {LinkedAccountsCreateManyAndReturnArgs} args - Arguments to create many LinkedAccounts.
     * @example
     * // Create many LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedAccounts and only return the `id`
     * const linkedAccountsWithIdOnly = await prisma.linkedAccounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedAccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedAccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedAccounts.
     * @param {LinkedAccountsDeleteArgs} args - Arguments to delete one LinkedAccounts.
     * @example
     * // Delete one LinkedAccounts
     * const LinkedAccounts = await prisma.linkedAccounts.delete({
     *   where: {
     *     // ... filter to delete one LinkedAccounts
     *   }
     * })
     * 
     */
    delete<T extends LinkedAccountsDeleteArgs>(args: SelectSubset<T, LinkedAccountsDeleteArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedAccounts.
     * @param {LinkedAccountsUpdateArgs} args - Arguments to update one LinkedAccounts.
     * @example
     * // Update one LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedAccountsUpdateArgs>(args: SelectSubset<T, LinkedAccountsUpdateArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedAccounts.
     * @param {LinkedAccountsDeleteManyArgs} args - Arguments to filter LinkedAccounts to delete.
     * @example
     * // Delete a few LinkedAccounts
     * const { count } = await prisma.linkedAccounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedAccountsDeleteManyArgs>(args?: SelectSubset<T, LinkedAccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedAccountsUpdateManyArgs>(args: SelectSubset<T, LinkedAccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedAccounts and returns the data updated in the database.
     * @param {LinkedAccountsUpdateManyAndReturnArgs} args - Arguments to update many LinkedAccounts.
     * @example
     * // Update many LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedAccounts and only return the `id`
     * const linkedAccountsWithIdOnly = await prisma.linkedAccounts.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkedAccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedAccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedAccounts.
     * @param {LinkedAccountsUpsertArgs} args - Arguments to update or create a LinkedAccounts.
     * @example
     * // Update or create a LinkedAccounts
     * const linkedAccounts = await prisma.linkedAccounts.upsert({
     *   create: {
     *     // ... data to create a LinkedAccounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to update
     *   }
     * })
     */
    upsert<T extends LinkedAccountsUpsertArgs>(args: SelectSubset<T, LinkedAccountsUpsertArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsCountArgs} args - Arguments to filter LinkedAccounts to count.
     * @example
     * // Count the number of LinkedAccounts
     * const count = await prisma.linkedAccounts.count({
     *   where: {
     *     // ... the filter for the LinkedAccounts we want to count
     *   }
     * })
    **/
    count<T extends LinkedAccountsCountArgs>(
      args?: Subset<T, LinkedAccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedAccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedAccountsAggregateArgs>(args: Subset<T, LinkedAccountsAggregateArgs>): Prisma.PrismaPromise<GetLinkedAccountsAggregateType<T>>

    /**
     * Group by LinkedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedAccountsGroupByArgs} args - Group by arguments.
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
      T extends LinkedAccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedAccountsGroupByArgs['orderBy'] }
        : { orderBy?: LinkedAccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkedAccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedAccounts model
   */
  readonly fields: LinkedAccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedAccounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedAccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discord<T extends LinkedAccounts$discordArgs<ExtArgs> = {}>(args?: Subset<T, LinkedAccounts$discordArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LinkedAccounts model
   */
  interface LinkedAccountsFieldRefs {
    readonly id: FieldRef<"LinkedAccounts", 'String'>
    readonly studentProfileId: FieldRef<"LinkedAccounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkedAccounts findUnique
   */
  export type LinkedAccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where: LinkedAccountsWhereUniqueInput
  }

  /**
   * LinkedAccounts findUniqueOrThrow
   */
  export type LinkedAccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where: LinkedAccountsWhereUniqueInput
  }

  /**
   * LinkedAccounts findFirst
   */
  export type LinkedAccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }

  /**
   * LinkedAccounts findFirstOrThrow
   */
  export type LinkedAccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedAccounts.
     */
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }

  /**
   * LinkedAccounts findMany
   */
  export type LinkedAccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter, which LinkedAccounts to fetch.
     */
    where?: LinkedAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedAccounts to fetch.
     */
    orderBy?: LinkedAccountsOrderByWithRelationInput | LinkedAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedAccounts.
     */
    cursor?: LinkedAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedAccounts.
     */
    skip?: number
    distinct?: LinkedAccountsScalarFieldEnum | LinkedAccountsScalarFieldEnum[]
  }

  /**
   * LinkedAccounts create
   */
  export type LinkedAccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedAccounts.
     */
    data: XOR<LinkedAccountsCreateInput, LinkedAccountsUncheckedCreateInput>
  }

  /**
   * LinkedAccounts createMany
   */
  export type LinkedAccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountsCreateManyInput | LinkedAccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedAccounts createManyAndReturn
   */
  export type LinkedAccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedAccounts.
     */
    data: LinkedAccountsCreateManyInput | LinkedAccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccounts update
   */
  export type LinkedAccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedAccounts.
     */
    data: XOR<LinkedAccountsUpdateInput, LinkedAccountsUncheckedUpdateInput>
    /**
     * Choose, which LinkedAccounts to update.
     */
    where: LinkedAccountsWhereUniqueInput
  }

  /**
   * LinkedAccounts updateMany
   */
  export type LinkedAccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountsUpdateManyMutationInput, LinkedAccountsUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountsWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
  }

  /**
   * LinkedAccounts updateManyAndReturn
   */
  export type LinkedAccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * The data used to update LinkedAccounts.
     */
    data: XOR<LinkedAccountsUpdateManyMutationInput, LinkedAccountsUncheckedUpdateManyInput>
    /**
     * Filter which LinkedAccounts to update
     */
    where?: LinkedAccountsWhereInput
    /**
     * Limit how many LinkedAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedAccounts upsert
   */
  export type LinkedAccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedAccounts to update in case it exists.
     */
    where: LinkedAccountsWhereUniqueInput
    /**
     * In case the LinkedAccounts found by the `where` argument doesn't exist, create a new LinkedAccounts with this data.
     */
    create: XOR<LinkedAccountsCreateInput, LinkedAccountsUncheckedCreateInput>
    /**
     * In case the LinkedAccounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedAccountsUpdateInput, LinkedAccountsUncheckedUpdateInput>
  }

  /**
   * LinkedAccounts delete
   */
  export type LinkedAccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    /**
     * Filter which LinkedAccounts to delete.
     */
    where: LinkedAccountsWhereUniqueInput
  }

  /**
   * LinkedAccounts deleteMany
   */
  export type LinkedAccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedAccounts to delete
     */
    where?: LinkedAccountsWhereInput
    /**
     * Limit how many LinkedAccounts to delete.
     */
    limit?: number
  }

  /**
   * LinkedAccounts.discord
   */
  export type LinkedAccounts$discordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    where?: DiscordAccountLinkWhereInput
  }

  /**
   * LinkedAccounts without action
   */
  export type LinkedAccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
  }


  /**
   * Model DiscordAccountLink
   */

  export type AggregateDiscordAccountLink = {
    _count: DiscordAccountLinkCountAggregateOutputType | null
    _min: DiscordAccountLinkMinAggregateOutputType | null
    _max: DiscordAccountLinkMaxAggregateOutputType | null
  }

  export type DiscordAccountLinkMinAggregateOutputType = {
    id: string | null
    username: string | null
    avatarUrl: string | null
    linkedAccountsId: string | null
  }

  export type DiscordAccountLinkMaxAggregateOutputType = {
    id: string | null
    username: string | null
    avatarUrl: string | null
    linkedAccountsId: string | null
  }

  export type DiscordAccountLinkCountAggregateOutputType = {
    id: number
    username: number
    avatarUrl: number
    linkedAccountsId: number
    _all: number
  }


  export type DiscordAccountLinkMinAggregateInputType = {
    id?: true
    username?: true
    avatarUrl?: true
    linkedAccountsId?: true
  }

  export type DiscordAccountLinkMaxAggregateInputType = {
    id?: true
    username?: true
    avatarUrl?: true
    linkedAccountsId?: true
  }

  export type DiscordAccountLinkCountAggregateInputType = {
    id?: true
    username?: true
    avatarUrl?: true
    linkedAccountsId?: true
    _all?: true
  }

  export type DiscordAccountLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordAccountLink to aggregate.
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordAccountLinks to fetch.
     */
    orderBy?: DiscordAccountLinkOrderByWithRelationInput | DiscordAccountLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordAccountLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordAccountLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordAccountLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordAccountLinks
    **/
    _count?: true | DiscordAccountLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordAccountLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordAccountLinkMaxAggregateInputType
  }

  export type GetDiscordAccountLinkAggregateType<T extends DiscordAccountLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordAccountLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordAccountLink[P]>
      : GetScalarType<T[P], AggregateDiscordAccountLink[P]>
  }




  export type DiscordAccountLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordAccountLinkWhereInput
    orderBy?: DiscordAccountLinkOrderByWithAggregationInput | DiscordAccountLinkOrderByWithAggregationInput[]
    by: DiscordAccountLinkScalarFieldEnum[] | DiscordAccountLinkScalarFieldEnum
    having?: DiscordAccountLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordAccountLinkCountAggregateInputType | true
    _min?: DiscordAccountLinkMinAggregateInputType
    _max?: DiscordAccountLinkMaxAggregateInputType
  }

  export type DiscordAccountLinkGroupByOutputType = {
    id: string
    username: string
    avatarUrl: string | null
    linkedAccountsId: string | null
    _count: DiscordAccountLinkCountAggregateOutputType | null
    _min: DiscordAccountLinkMinAggregateOutputType | null
    _max: DiscordAccountLinkMaxAggregateOutputType | null
  }

  type GetDiscordAccountLinkGroupByPayload<T extends DiscordAccountLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordAccountLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordAccountLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordAccountLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordAccountLinkGroupByOutputType[P]>
        }
      >
    >


  export type DiscordAccountLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarUrl?: boolean
    linkedAccountsId?: boolean
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
    sessions?: boolean | DiscordAccountLink$sessionsArgs<ExtArgs>
    guilds?: boolean | DiscordAccountLink$guildsArgs<ExtArgs>
    _count?: boolean | DiscordAccountLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discordAccountLink"]>

  export type DiscordAccountLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarUrl?: boolean
    linkedAccountsId?: boolean
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
  }, ExtArgs["result"]["discordAccountLink"]>

  export type DiscordAccountLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatarUrl?: boolean
    linkedAccountsId?: boolean
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
  }, ExtArgs["result"]["discordAccountLink"]>

  export type DiscordAccountLinkSelectScalar = {
    id?: boolean
    username?: boolean
    avatarUrl?: boolean
    linkedAccountsId?: boolean
  }

  export type DiscordAccountLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "avatarUrl" | "linkedAccountsId", ExtArgs["result"]["discordAccountLink"]>
  export type DiscordAccountLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
    sessions?: boolean | DiscordAccountLink$sessionsArgs<ExtArgs>
    guilds?: boolean | DiscordAccountLink$guildsArgs<ExtArgs>
    _count?: boolean | DiscordAccountLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscordAccountLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
  }
  export type DiscordAccountLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkedAccounts?: boolean | DiscordAccountLink$linkedAccountsArgs<ExtArgs>
  }

  export type $DiscordAccountLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordAccountLink"
    objects: {
      linkedAccounts: Prisma.$LinkedAccountsPayload<ExtArgs> | null
      sessions: Prisma.$DiscordSessionPayload<ExtArgs>[]
      guilds: Prisma.$DiscordGuildMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      avatarUrl: string | null
      linkedAccountsId: string | null
    }, ExtArgs["result"]["discordAccountLink"]>
    composites: {}
  }

  type DiscordAccountLinkGetPayload<S extends boolean | null | undefined | DiscordAccountLinkDefaultArgs> = $Result.GetResult<Prisma.$DiscordAccountLinkPayload, S>

  type DiscordAccountLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordAccountLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordAccountLinkCountAggregateInputType | true
    }

  export interface DiscordAccountLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordAccountLink'], meta: { name: 'DiscordAccountLink' } }
    /**
     * Find zero or one DiscordAccountLink that matches the filter.
     * @param {DiscordAccountLinkFindUniqueArgs} args - Arguments to find a DiscordAccountLink
     * @example
     * // Get one DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordAccountLinkFindUniqueArgs>(args: SelectSubset<T, DiscordAccountLinkFindUniqueArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordAccountLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordAccountLinkFindUniqueOrThrowArgs} args - Arguments to find a DiscordAccountLink
     * @example
     * // Get one DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordAccountLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordAccountLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordAccountLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkFindFirstArgs} args - Arguments to find a DiscordAccountLink
     * @example
     * // Get one DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordAccountLinkFindFirstArgs>(args?: SelectSubset<T, DiscordAccountLinkFindFirstArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordAccountLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkFindFirstOrThrowArgs} args - Arguments to find a DiscordAccountLink
     * @example
     * // Get one DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordAccountLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordAccountLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordAccountLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordAccountLinks
     * const discordAccountLinks = await prisma.discordAccountLink.findMany()
     * 
     * // Get first 10 DiscordAccountLinks
     * const discordAccountLinks = await prisma.discordAccountLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordAccountLinkWithIdOnly = await prisma.discordAccountLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordAccountLinkFindManyArgs>(args?: SelectSubset<T, DiscordAccountLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordAccountLink.
     * @param {DiscordAccountLinkCreateArgs} args - Arguments to create a DiscordAccountLink.
     * @example
     * // Create one DiscordAccountLink
     * const DiscordAccountLink = await prisma.discordAccountLink.create({
     *   data: {
     *     // ... data to create a DiscordAccountLink
     *   }
     * })
     * 
     */
    create<T extends DiscordAccountLinkCreateArgs>(args: SelectSubset<T, DiscordAccountLinkCreateArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordAccountLinks.
     * @param {DiscordAccountLinkCreateManyArgs} args - Arguments to create many DiscordAccountLinks.
     * @example
     * // Create many DiscordAccountLinks
     * const discordAccountLink = await prisma.discordAccountLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordAccountLinkCreateManyArgs>(args?: SelectSubset<T, DiscordAccountLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordAccountLinks and returns the data saved in the database.
     * @param {DiscordAccountLinkCreateManyAndReturnArgs} args - Arguments to create many DiscordAccountLinks.
     * @example
     * // Create many DiscordAccountLinks
     * const discordAccountLink = await prisma.discordAccountLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordAccountLinks and only return the `id`
     * const discordAccountLinkWithIdOnly = await prisma.discordAccountLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordAccountLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordAccountLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordAccountLink.
     * @param {DiscordAccountLinkDeleteArgs} args - Arguments to delete one DiscordAccountLink.
     * @example
     * // Delete one DiscordAccountLink
     * const DiscordAccountLink = await prisma.discordAccountLink.delete({
     *   where: {
     *     // ... filter to delete one DiscordAccountLink
     *   }
     * })
     * 
     */
    delete<T extends DiscordAccountLinkDeleteArgs>(args: SelectSubset<T, DiscordAccountLinkDeleteArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordAccountLink.
     * @param {DiscordAccountLinkUpdateArgs} args - Arguments to update one DiscordAccountLink.
     * @example
     * // Update one DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordAccountLinkUpdateArgs>(args: SelectSubset<T, DiscordAccountLinkUpdateArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordAccountLinks.
     * @param {DiscordAccountLinkDeleteManyArgs} args - Arguments to filter DiscordAccountLinks to delete.
     * @example
     * // Delete a few DiscordAccountLinks
     * const { count } = await prisma.discordAccountLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordAccountLinkDeleteManyArgs>(args?: SelectSubset<T, DiscordAccountLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordAccountLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordAccountLinks
     * const discordAccountLink = await prisma.discordAccountLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordAccountLinkUpdateManyArgs>(args: SelectSubset<T, DiscordAccountLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordAccountLinks and returns the data updated in the database.
     * @param {DiscordAccountLinkUpdateManyAndReturnArgs} args - Arguments to update many DiscordAccountLinks.
     * @example
     * // Update many DiscordAccountLinks
     * const discordAccountLink = await prisma.discordAccountLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordAccountLinks and only return the `id`
     * const discordAccountLinkWithIdOnly = await prisma.discordAccountLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordAccountLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordAccountLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordAccountLink.
     * @param {DiscordAccountLinkUpsertArgs} args - Arguments to update or create a DiscordAccountLink.
     * @example
     * // Update or create a DiscordAccountLink
     * const discordAccountLink = await prisma.discordAccountLink.upsert({
     *   create: {
     *     // ... data to create a DiscordAccountLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordAccountLink we want to update
     *   }
     * })
     */
    upsert<T extends DiscordAccountLinkUpsertArgs>(args: SelectSubset<T, DiscordAccountLinkUpsertArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordAccountLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkCountArgs} args - Arguments to filter DiscordAccountLinks to count.
     * @example
     * // Count the number of DiscordAccountLinks
     * const count = await prisma.discordAccountLink.count({
     *   where: {
     *     // ... the filter for the DiscordAccountLinks we want to count
     *   }
     * })
    **/
    count<T extends DiscordAccountLinkCountArgs>(
      args?: Subset<T, DiscordAccountLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordAccountLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordAccountLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordAccountLinkAggregateArgs>(args: Subset<T, DiscordAccountLinkAggregateArgs>): Prisma.PrismaPromise<GetDiscordAccountLinkAggregateType<T>>

    /**
     * Group by DiscordAccountLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordAccountLinkGroupByArgs} args - Group by arguments.
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
      T extends DiscordAccountLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordAccountLinkGroupByArgs['orderBy'] }
        : { orderBy?: DiscordAccountLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordAccountLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordAccountLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordAccountLink model
   */
  readonly fields: DiscordAccountLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordAccountLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordAccountLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linkedAccounts<T extends DiscordAccountLink$linkedAccountsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordAccountLink$linkedAccountsArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends DiscordAccountLink$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordAccountLink$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guilds<T extends DiscordAccountLink$guildsArgs<ExtArgs> = {}>(args?: Subset<T, DiscordAccountLink$guildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordGuildMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiscordAccountLink model
   */
  interface DiscordAccountLinkFieldRefs {
    readonly id: FieldRef<"DiscordAccountLink", 'String'>
    readonly username: FieldRef<"DiscordAccountLink", 'String'>
    readonly avatarUrl: FieldRef<"DiscordAccountLink", 'String'>
    readonly linkedAccountsId: FieldRef<"DiscordAccountLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscordAccountLink findUnique
   */
  export type DiscordAccountLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter, which DiscordAccountLink to fetch.
     */
    where: DiscordAccountLinkWhereUniqueInput
  }

  /**
   * DiscordAccountLink findUniqueOrThrow
   */
  export type DiscordAccountLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter, which DiscordAccountLink to fetch.
     */
    where: DiscordAccountLinkWhereUniqueInput
  }

  /**
   * DiscordAccountLink findFirst
   */
  export type DiscordAccountLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter, which DiscordAccountLink to fetch.
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordAccountLinks to fetch.
     */
    orderBy?: DiscordAccountLinkOrderByWithRelationInput | DiscordAccountLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordAccountLinks.
     */
    cursor?: DiscordAccountLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordAccountLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordAccountLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordAccountLinks.
     */
    distinct?: DiscordAccountLinkScalarFieldEnum | DiscordAccountLinkScalarFieldEnum[]
  }

  /**
   * DiscordAccountLink findFirstOrThrow
   */
  export type DiscordAccountLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter, which DiscordAccountLink to fetch.
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordAccountLinks to fetch.
     */
    orderBy?: DiscordAccountLinkOrderByWithRelationInput | DiscordAccountLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordAccountLinks.
     */
    cursor?: DiscordAccountLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordAccountLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordAccountLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordAccountLinks.
     */
    distinct?: DiscordAccountLinkScalarFieldEnum | DiscordAccountLinkScalarFieldEnum[]
  }

  /**
   * DiscordAccountLink findMany
   */
  export type DiscordAccountLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter, which DiscordAccountLinks to fetch.
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordAccountLinks to fetch.
     */
    orderBy?: DiscordAccountLinkOrderByWithRelationInput | DiscordAccountLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordAccountLinks.
     */
    cursor?: DiscordAccountLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordAccountLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordAccountLinks.
     */
    skip?: number
    distinct?: DiscordAccountLinkScalarFieldEnum | DiscordAccountLinkScalarFieldEnum[]
  }

  /**
   * DiscordAccountLink create
   */
  export type DiscordAccountLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordAccountLink.
     */
    data: XOR<DiscordAccountLinkCreateInput, DiscordAccountLinkUncheckedCreateInput>
  }

  /**
   * DiscordAccountLink createMany
   */
  export type DiscordAccountLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordAccountLinks.
     */
    data: DiscordAccountLinkCreateManyInput | DiscordAccountLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordAccountLink createManyAndReturn
   */
  export type DiscordAccountLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordAccountLinks.
     */
    data: DiscordAccountLinkCreateManyInput | DiscordAccountLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordAccountLink update
   */
  export type DiscordAccountLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordAccountLink.
     */
    data: XOR<DiscordAccountLinkUpdateInput, DiscordAccountLinkUncheckedUpdateInput>
    /**
     * Choose, which DiscordAccountLink to update.
     */
    where: DiscordAccountLinkWhereUniqueInput
  }

  /**
   * DiscordAccountLink updateMany
   */
  export type DiscordAccountLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordAccountLinks.
     */
    data: XOR<DiscordAccountLinkUpdateManyMutationInput, DiscordAccountLinkUncheckedUpdateManyInput>
    /**
     * Filter which DiscordAccountLinks to update
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * Limit how many DiscordAccountLinks to update.
     */
    limit?: number
  }

  /**
   * DiscordAccountLink updateManyAndReturn
   */
  export type DiscordAccountLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * The data used to update DiscordAccountLinks.
     */
    data: XOR<DiscordAccountLinkUpdateManyMutationInput, DiscordAccountLinkUncheckedUpdateManyInput>
    /**
     * Filter which DiscordAccountLinks to update
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * Limit how many DiscordAccountLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordAccountLink upsert
   */
  export type DiscordAccountLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordAccountLink to update in case it exists.
     */
    where: DiscordAccountLinkWhereUniqueInput
    /**
     * In case the DiscordAccountLink found by the `where` argument doesn't exist, create a new DiscordAccountLink with this data.
     */
    create: XOR<DiscordAccountLinkCreateInput, DiscordAccountLinkUncheckedCreateInput>
    /**
     * In case the DiscordAccountLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordAccountLinkUpdateInput, DiscordAccountLinkUncheckedUpdateInput>
  }

  /**
   * DiscordAccountLink delete
   */
  export type DiscordAccountLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    /**
     * Filter which DiscordAccountLink to delete.
     */
    where: DiscordAccountLinkWhereUniqueInput
  }

  /**
   * DiscordAccountLink deleteMany
   */
  export type DiscordAccountLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordAccountLinks to delete
     */
    where?: DiscordAccountLinkWhereInput
    /**
     * Limit how many DiscordAccountLinks to delete.
     */
    limit?: number
  }

  /**
   * DiscordAccountLink.linkedAccounts
   */
  export type DiscordAccountLink$linkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    where?: LinkedAccountsWhereInput
  }

  /**
   * DiscordAccountLink.sessions
   */
  export type DiscordAccountLink$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    where?: DiscordSessionWhereInput
    orderBy?: DiscordSessionOrderByWithRelationInput | DiscordSessionOrderByWithRelationInput[]
    cursor?: DiscordSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordSessionScalarFieldEnum | DiscordSessionScalarFieldEnum[]
  }

  /**
   * DiscordAccountLink.guilds
   */
  export type DiscordAccountLink$guildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordGuildMember
     */
    select?: DiscordGuildMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordGuildMember
     */
    omit?: DiscordGuildMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordGuildMemberInclude<ExtArgs> | null
    where?: DiscordGuildMemberWhereInput
    orderBy?: DiscordGuildMemberOrderByWithRelationInput | DiscordGuildMemberOrderByWithRelationInput[]
    cursor?: DiscordGuildMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscordGuildMemberScalarFieldEnum | DiscordGuildMemberScalarFieldEnum[]
  }

  /**
   * DiscordAccountLink without action
   */
  export type DiscordAccountLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
  }


  /**
   * Model DiscordSession
   */

  export type AggregateDiscordSession = {
    _count: DiscordSessionCountAggregateOutputType | null
    _min: DiscordSessionMinAggregateOutputType | null
    _max: DiscordSessionMaxAggregateOutputType | null
  }

  export type DiscordSessionMinAggregateOutputType = {
    id: string | null
    token: string | null
    accessToken: string | null
    accessTokenExpiry: Date | null
    escalationSecret: string | null
    isAuthenticated: boolean | null
    isRevoked: boolean | null
    discordAccountLinkId: string | null
  }

  export type DiscordSessionMaxAggregateOutputType = {
    id: string | null
    token: string | null
    accessToken: string | null
    accessTokenExpiry: Date | null
    escalationSecret: string | null
    isAuthenticated: boolean | null
    isRevoked: boolean | null
    discordAccountLinkId: string | null
  }

  export type DiscordSessionCountAggregateOutputType = {
    id: number
    token: number
    accessToken: number
    accessTokenExpiry: number
    escalationSecret: number
    isAuthenticated: number
    isRevoked: number
    discordAccountLinkId: number
    _all: number
  }


  export type DiscordSessionMinAggregateInputType = {
    id?: true
    token?: true
    accessToken?: true
    accessTokenExpiry?: true
    escalationSecret?: true
    isAuthenticated?: true
    isRevoked?: true
    discordAccountLinkId?: true
  }

  export type DiscordSessionMaxAggregateInputType = {
    id?: true
    token?: true
    accessToken?: true
    accessTokenExpiry?: true
    escalationSecret?: true
    isAuthenticated?: true
    isRevoked?: true
    discordAccountLinkId?: true
  }

  export type DiscordSessionCountAggregateInputType = {
    id?: true
    token?: true
    accessToken?: true
    accessTokenExpiry?: true
    escalationSecret?: true
    isAuthenticated?: true
    isRevoked?: true
    discordAccountLinkId?: true
    _all?: true
  }

  export type DiscordSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordSession to aggregate.
     */
    where?: DiscordSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordSessions to fetch.
     */
    orderBy?: DiscordSessionOrderByWithRelationInput | DiscordSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscordSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscordSessions
    **/
    _count?: true | DiscordSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordSessionMaxAggregateInputType
  }

  export type GetDiscordSessionAggregateType<T extends DiscordSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordSession[P]>
      : GetScalarType<T[P], AggregateDiscordSession[P]>
  }




  export type DiscordSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscordSessionWhereInput
    orderBy?: DiscordSessionOrderByWithAggregationInput | DiscordSessionOrderByWithAggregationInput[]
    by: DiscordSessionScalarFieldEnum[] | DiscordSessionScalarFieldEnum
    having?: DiscordSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordSessionCountAggregateInputType | true
    _min?: DiscordSessionMinAggregateInputType
    _max?: DiscordSessionMaxAggregateInputType
  }

  export type DiscordSessionGroupByOutputType = {
    id: string
    token: string
    accessToken: string | null
    accessTokenExpiry: Date | null
    escalationSecret: string
    isAuthenticated: boolean
    isRevoked: boolean
    discordAccountLinkId: string | null
    _count: DiscordSessionCountAggregateOutputType | null
    _min: DiscordSessionMinAggregateOutputType | null
    _max: DiscordSessionMaxAggregateOutputType | null
  }

  type GetDiscordSessionGroupByPayload<T extends DiscordSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordSessionGroupByOutputType[P]>
        }
      >
    >


  export type DiscordSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    escalationSecret?: boolean
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: boolean
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }, ExtArgs["result"]["discordSession"]>

  export type DiscordSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    escalationSecret?: boolean
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: boolean
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }, ExtArgs["result"]["discordSession"]>

  export type DiscordSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    escalationSecret?: boolean
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: boolean
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }, ExtArgs["result"]["discordSession"]>

  export type DiscordSessionSelectScalar = {
    id?: boolean
    token?: boolean
    accessToken?: boolean
    accessTokenExpiry?: boolean
    escalationSecret?: boolean
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: boolean
  }

  export type DiscordSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "accessToken" | "accessTokenExpiry" | "escalationSecret" | "isAuthenticated" | "isRevoked" | "discordAccountLinkId", ExtArgs["result"]["discordSession"]>
  export type DiscordSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }
  export type DiscordSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }
  export type DiscordSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discordAccountLink?: boolean | DiscordSession$discordAccountLinkArgs<ExtArgs>
  }

  export type $DiscordSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscordSession"
    objects: {
      discordAccountLink: Prisma.$DiscordAccountLinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      accessToken: string | null
      accessTokenExpiry: Date | null
      escalationSecret: string
      isAuthenticated: boolean
      isRevoked: boolean
      discordAccountLinkId: string | null
    }, ExtArgs["result"]["discordSession"]>
    composites: {}
  }

  type DiscordSessionGetPayload<S extends boolean | null | undefined | DiscordSessionDefaultArgs> = $Result.GetResult<Prisma.$DiscordSessionPayload, S>

  type DiscordSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscordSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscordSessionCountAggregateInputType | true
    }

  export interface DiscordSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscordSession'], meta: { name: 'DiscordSession' } }
    /**
     * Find zero or one DiscordSession that matches the filter.
     * @param {DiscordSessionFindUniqueArgs} args - Arguments to find a DiscordSession
     * @example
     * // Get one DiscordSession
     * const discordSession = await prisma.discordSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscordSessionFindUniqueArgs>(args: SelectSubset<T, DiscordSessionFindUniqueArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscordSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscordSessionFindUniqueOrThrowArgs} args - Arguments to find a DiscordSession
     * @example
     * // Get one DiscordSession
     * const discordSession = await prisma.discordSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscordSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscordSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionFindFirstArgs} args - Arguments to find a DiscordSession
     * @example
     * // Get one DiscordSession
     * const discordSession = await prisma.discordSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscordSessionFindFirstArgs>(args?: SelectSubset<T, DiscordSessionFindFirstArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscordSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionFindFirstOrThrowArgs} args - Arguments to find a DiscordSession
     * @example
     * // Get one DiscordSession
     * const discordSession = await prisma.discordSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscordSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscordSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscordSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordSessions
     * const discordSessions = await prisma.discordSession.findMany()
     * 
     * // Get first 10 DiscordSessions
     * const discordSessions = await prisma.discordSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordSessionWithIdOnly = await prisma.discordSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscordSessionFindManyArgs>(args?: SelectSubset<T, DiscordSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscordSession.
     * @param {DiscordSessionCreateArgs} args - Arguments to create a DiscordSession.
     * @example
     * // Create one DiscordSession
     * const DiscordSession = await prisma.discordSession.create({
     *   data: {
     *     // ... data to create a DiscordSession
     *   }
     * })
     * 
     */
    create<T extends DiscordSessionCreateArgs>(args: SelectSubset<T, DiscordSessionCreateArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscordSessions.
     * @param {DiscordSessionCreateManyArgs} args - Arguments to create many DiscordSessions.
     * @example
     * // Create many DiscordSessions
     * const discordSession = await prisma.discordSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscordSessionCreateManyArgs>(args?: SelectSubset<T, DiscordSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscordSessions and returns the data saved in the database.
     * @param {DiscordSessionCreateManyAndReturnArgs} args - Arguments to create many DiscordSessions.
     * @example
     * // Create many DiscordSessions
     * const discordSession = await prisma.discordSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscordSessions and only return the `id`
     * const discordSessionWithIdOnly = await prisma.discordSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscordSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscordSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscordSession.
     * @param {DiscordSessionDeleteArgs} args - Arguments to delete one DiscordSession.
     * @example
     * // Delete one DiscordSession
     * const DiscordSession = await prisma.discordSession.delete({
     *   where: {
     *     // ... filter to delete one DiscordSession
     *   }
     * })
     * 
     */
    delete<T extends DiscordSessionDeleteArgs>(args: SelectSubset<T, DiscordSessionDeleteArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscordSession.
     * @param {DiscordSessionUpdateArgs} args - Arguments to update one DiscordSession.
     * @example
     * // Update one DiscordSession
     * const discordSession = await prisma.discordSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscordSessionUpdateArgs>(args: SelectSubset<T, DiscordSessionUpdateArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscordSessions.
     * @param {DiscordSessionDeleteManyArgs} args - Arguments to filter DiscordSessions to delete.
     * @example
     * // Delete a few DiscordSessions
     * const { count } = await prisma.discordSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscordSessionDeleteManyArgs>(args?: SelectSubset<T, DiscordSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordSessions
     * const discordSession = await prisma.discordSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscordSessionUpdateManyArgs>(args: SelectSubset<T, DiscordSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordSessions and returns the data updated in the database.
     * @param {DiscordSessionUpdateManyAndReturnArgs} args - Arguments to update many DiscordSessions.
     * @example
     * // Update many DiscordSessions
     * const discordSession = await prisma.discordSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscordSessions and only return the `id`
     * const discordSessionWithIdOnly = await prisma.discordSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscordSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscordSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscordSession.
     * @param {DiscordSessionUpsertArgs} args - Arguments to update or create a DiscordSession.
     * @example
     * // Update or create a DiscordSession
     * const discordSession = await prisma.discordSession.upsert({
     *   create: {
     *     // ... data to create a DiscordSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordSession we want to update
     *   }
     * })
     */
    upsert<T extends DiscordSessionUpsertArgs>(args: SelectSubset<T, DiscordSessionUpsertArgs<ExtArgs>>): Prisma__DiscordSessionClient<$Result.GetResult<Prisma.$DiscordSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscordSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionCountArgs} args - Arguments to filter DiscordSessions to count.
     * @example
     * // Count the number of DiscordSessions
     * const count = await prisma.discordSession.count({
     *   where: {
     *     // ... the filter for the DiscordSessions we want to count
     *   }
     * })
    **/
    count<T extends DiscordSessionCountArgs>(
      args?: Subset<T, DiscordSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscordSessionAggregateArgs>(args: Subset<T, DiscordSessionAggregateArgs>): Prisma.PrismaPromise<GetDiscordSessionAggregateType<T>>

    /**
     * Group by DiscordSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSessionGroupByArgs} args - Group by arguments.
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
      T extends DiscordSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscordSessionGroupByArgs['orderBy'] }
        : { orderBy?: DiscordSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscordSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscordSession model
   */
  readonly fields: DiscordSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscordSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscordSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discordAccountLink<T extends DiscordSession$discordAccountLinkArgs<ExtArgs> = {}>(args?: Subset<T, DiscordSession$discordAccountLinkArgs<ExtArgs>>): Prisma__DiscordAccountLinkClient<$Result.GetResult<Prisma.$DiscordAccountLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiscordSession model
   */
  interface DiscordSessionFieldRefs {
    readonly id: FieldRef<"DiscordSession", 'String'>
    readonly token: FieldRef<"DiscordSession", 'String'>
    readonly accessToken: FieldRef<"DiscordSession", 'String'>
    readonly accessTokenExpiry: FieldRef<"DiscordSession", 'DateTime'>
    readonly escalationSecret: FieldRef<"DiscordSession", 'String'>
    readonly isAuthenticated: FieldRef<"DiscordSession", 'Boolean'>
    readonly isRevoked: FieldRef<"DiscordSession", 'Boolean'>
    readonly discordAccountLinkId: FieldRef<"DiscordSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscordSession findUnique
   */
  export type DiscordSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter, which DiscordSession to fetch.
     */
    where: DiscordSessionWhereUniqueInput
  }

  /**
   * DiscordSession findUniqueOrThrow
   */
  export type DiscordSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter, which DiscordSession to fetch.
     */
    where: DiscordSessionWhereUniqueInput
  }

  /**
   * DiscordSession findFirst
   */
  export type DiscordSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter, which DiscordSession to fetch.
     */
    where?: DiscordSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordSessions to fetch.
     */
    orderBy?: DiscordSessionOrderByWithRelationInput | DiscordSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordSessions.
     */
    cursor?: DiscordSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordSessions.
     */
    distinct?: DiscordSessionScalarFieldEnum | DiscordSessionScalarFieldEnum[]
  }

  /**
   * DiscordSession findFirstOrThrow
   */
  export type DiscordSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter, which DiscordSession to fetch.
     */
    where?: DiscordSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordSessions to fetch.
     */
    orderBy?: DiscordSessionOrderByWithRelationInput | DiscordSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscordSessions.
     */
    cursor?: DiscordSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscordSessions.
     */
    distinct?: DiscordSessionScalarFieldEnum | DiscordSessionScalarFieldEnum[]
  }

  /**
   * DiscordSession findMany
   */
  export type DiscordSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter, which DiscordSessions to fetch.
     */
    where?: DiscordSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscordSessions to fetch.
     */
    orderBy?: DiscordSessionOrderByWithRelationInput | DiscordSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscordSessions.
     */
    cursor?: DiscordSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscordSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscordSessions.
     */
    skip?: number
    distinct?: DiscordSessionScalarFieldEnum | DiscordSessionScalarFieldEnum[]
  }

  /**
   * DiscordSession create
   */
  export type DiscordSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscordSession.
     */
    data: XOR<DiscordSessionCreateInput, DiscordSessionUncheckedCreateInput>
  }

  /**
   * DiscordSession createMany
   */
  export type DiscordSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscordSessions.
     */
    data: DiscordSessionCreateManyInput | DiscordSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscordSession createManyAndReturn
   */
  export type DiscordSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * The data used to create many DiscordSessions.
     */
    data: DiscordSessionCreateManyInput | DiscordSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordSession update
   */
  export type DiscordSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscordSession.
     */
    data: XOR<DiscordSessionUpdateInput, DiscordSessionUncheckedUpdateInput>
    /**
     * Choose, which DiscordSession to update.
     */
    where: DiscordSessionWhereUniqueInput
  }

  /**
   * DiscordSession updateMany
   */
  export type DiscordSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscordSessions.
     */
    data: XOR<DiscordSessionUpdateManyMutationInput, DiscordSessionUncheckedUpdateManyInput>
    /**
     * Filter which DiscordSessions to update
     */
    where?: DiscordSessionWhereInput
    /**
     * Limit how many DiscordSessions to update.
     */
    limit?: number
  }

  /**
   * DiscordSession updateManyAndReturn
   */
  export type DiscordSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * The data used to update DiscordSessions.
     */
    data: XOR<DiscordSessionUpdateManyMutationInput, DiscordSessionUncheckedUpdateManyInput>
    /**
     * Filter which DiscordSessions to update
     */
    where?: DiscordSessionWhereInput
    /**
     * Limit how many DiscordSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscordSession upsert
   */
  export type DiscordSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscordSession to update in case it exists.
     */
    where: DiscordSessionWhereUniqueInput
    /**
     * In case the DiscordSession found by the `where` argument doesn't exist, create a new DiscordSession with this data.
     */
    create: XOR<DiscordSessionCreateInput, DiscordSessionUncheckedCreateInput>
    /**
     * In case the DiscordSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscordSessionUpdateInput, DiscordSessionUncheckedUpdateInput>
  }

  /**
   * DiscordSession delete
   */
  export type DiscordSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
    /**
     * Filter which DiscordSession to delete.
     */
    where: DiscordSessionWhereUniqueInput
  }

  /**
   * DiscordSession deleteMany
   */
  export type DiscordSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscordSessions to delete
     */
    where?: DiscordSessionWhereInput
    /**
     * Limit how many DiscordSessions to delete.
     */
    limit?: number
  }

  /**
   * DiscordSession.discordAccountLink
   */
  export type DiscordSession$discordAccountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordAccountLink
     */
    select?: DiscordAccountLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordAccountLink
     */
    omit?: DiscordAccountLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordAccountLinkInclude<ExtArgs> | null
    where?: DiscordAccountLinkWhereInput
  }

  /**
   * DiscordSession without action
   */
  export type DiscordSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscordSession
     */
    select?: DiscordSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscordSession
     */
    omit?: DiscordSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscordSessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationMethods
   */

  export type AggregateVerificationMethods = {
    _count: VerificationMethodsCountAggregateOutputType | null
    _min: VerificationMethodsMinAggregateOutputType | null
    _max: VerificationMethodsMaxAggregateOutputType | null
  }

  export type VerificationMethodsMinAggregateOutputType = {
    id: string | null
    studentProfileId: string | null
  }

  export type VerificationMethodsMaxAggregateOutputType = {
    id: string | null
    studentProfileId: string | null
  }

  export type VerificationMethodsCountAggregateOutputType = {
    id: number
    studentProfileId: number
    _all: number
  }


  export type VerificationMethodsMinAggregateInputType = {
    id?: true
    studentProfileId?: true
  }

  export type VerificationMethodsMaxAggregateInputType = {
    id?: true
    studentProfileId?: true
  }

  export type VerificationMethodsCountAggregateInputType = {
    id?: true
    studentProfileId?: true
    _all?: true
  }

  export type VerificationMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationMethods to aggregate.
     */
    where?: VerificationMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationMethods to fetch.
     */
    orderBy?: VerificationMethodsOrderByWithRelationInput | VerificationMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationMethods
    **/
    _count?: true | VerificationMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMethodsMaxAggregateInputType
  }

  export type GetVerificationMethodsAggregateType<T extends VerificationMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationMethods[P]>
      : GetScalarType<T[P], AggregateVerificationMethods[P]>
  }




  export type VerificationMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationMethodsWhereInput
    orderBy?: VerificationMethodsOrderByWithAggregationInput | VerificationMethodsOrderByWithAggregationInput[]
    by: VerificationMethodsScalarFieldEnum[] | VerificationMethodsScalarFieldEnum
    having?: VerificationMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationMethodsCountAggregateInputType | true
    _min?: VerificationMethodsMinAggregateInputType
    _max?: VerificationMethodsMaxAggregateInputType
  }

  export type VerificationMethodsGroupByOutputType = {
    id: string
    studentProfileId: string
    _count: VerificationMethodsCountAggregateOutputType | null
    _min: VerificationMethodsMinAggregateOutputType | null
    _max: VerificationMethodsMaxAggregateOutputType | null
  }

  type GetVerificationMethodsGroupByPayload<T extends VerificationMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationMethodsGroupByOutputType[P]>
        }
      >
    >


  export type VerificationMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    emailVerification?: boolean | VerificationMethods$emailVerificationArgs<ExtArgs>
    _count?: boolean | VerificationMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationMethods"]>

  export type VerificationMethodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationMethods"]>

  export type VerificationMethodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentProfileId?: boolean
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationMethods"]>

  export type VerificationMethodsSelectScalar = {
    id?: boolean
    studentProfileId?: boolean
  }

  export type VerificationMethodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentProfileId", ExtArgs["result"]["verificationMethods"]>
  export type VerificationMethodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
    emailVerification?: boolean | VerificationMethods$emailVerificationArgs<ExtArgs>
    _count?: boolean | VerificationMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VerificationMethodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type VerificationMethodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $VerificationMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationMethods"
    objects: {
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs>
      emailVerification: Prisma.$EmailVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentProfileId: string
    }, ExtArgs["result"]["verificationMethods"]>
    composites: {}
  }

  type VerificationMethodsGetPayload<S extends boolean | null | undefined | VerificationMethodsDefaultArgs> = $Result.GetResult<Prisma.$VerificationMethodsPayload, S>

  type VerificationMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationMethodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationMethodsCountAggregateInputType | true
    }

  export interface VerificationMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationMethods'], meta: { name: 'VerificationMethods' } }
    /**
     * Find zero or one VerificationMethods that matches the filter.
     * @param {VerificationMethodsFindUniqueArgs} args - Arguments to find a VerificationMethods
     * @example
     * // Get one VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationMethodsFindUniqueArgs>(args: SelectSubset<T, VerificationMethodsFindUniqueArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationMethods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationMethodsFindUniqueOrThrowArgs} args - Arguments to find a VerificationMethods
     * @example
     * // Get one VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationMethodsFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationMethodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsFindFirstArgs} args - Arguments to find a VerificationMethods
     * @example
     * // Get one VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationMethodsFindFirstArgs>(args?: SelectSubset<T, VerificationMethodsFindFirstArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsFindFirstOrThrowArgs} args - Arguments to find a VerificationMethods
     * @example
     * // Get one VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationMethodsFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationMethodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findMany()
     * 
     * // Get first 10 VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationMethodsWithIdOnly = await prisma.verificationMethods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationMethodsFindManyArgs>(args?: SelectSubset<T, VerificationMethodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationMethods.
     * @param {VerificationMethodsCreateArgs} args - Arguments to create a VerificationMethods.
     * @example
     * // Create one VerificationMethods
     * const VerificationMethods = await prisma.verificationMethods.create({
     *   data: {
     *     // ... data to create a VerificationMethods
     *   }
     * })
     * 
     */
    create<T extends VerificationMethodsCreateArgs>(args: SelectSubset<T, VerificationMethodsCreateArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationMethods.
     * @param {VerificationMethodsCreateManyArgs} args - Arguments to create many VerificationMethods.
     * @example
     * // Create many VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationMethodsCreateManyArgs>(args?: SelectSubset<T, VerificationMethodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationMethods and returns the data saved in the database.
     * @param {VerificationMethodsCreateManyAndReturnArgs} args - Arguments to create many VerificationMethods.
     * @example
     * // Create many VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationMethods and only return the `id`
     * const verificationMethodsWithIdOnly = await prisma.verificationMethods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationMethodsCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationMethodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationMethods.
     * @param {VerificationMethodsDeleteArgs} args - Arguments to delete one VerificationMethods.
     * @example
     * // Delete one VerificationMethods
     * const VerificationMethods = await prisma.verificationMethods.delete({
     *   where: {
     *     // ... filter to delete one VerificationMethods
     *   }
     * })
     * 
     */
    delete<T extends VerificationMethodsDeleteArgs>(args: SelectSubset<T, VerificationMethodsDeleteArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationMethods.
     * @param {VerificationMethodsUpdateArgs} args - Arguments to update one VerificationMethods.
     * @example
     * // Update one VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationMethodsUpdateArgs>(args: SelectSubset<T, VerificationMethodsUpdateArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationMethods.
     * @param {VerificationMethodsDeleteManyArgs} args - Arguments to filter VerificationMethods to delete.
     * @example
     * // Delete a few VerificationMethods
     * const { count } = await prisma.verificationMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationMethodsDeleteManyArgs>(args?: SelectSubset<T, VerificationMethodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationMethodsUpdateManyArgs>(args: SelectSubset<T, VerificationMethodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationMethods and returns the data updated in the database.
     * @param {VerificationMethodsUpdateManyAndReturnArgs} args - Arguments to update many VerificationMethods.
     * @example
     * // Update many VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationMethods and only return the `id`
     * const verificationMethodsWithIdOnly = await prisma.verificationMethods.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationMethodsUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationMethodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationMethods.
     * @param {VerificationMethodsUpsertArgs} args - Arguments to update or create a VerificationMethods.
     * @example
     * // Update or create a VerificationMethods
     * const verificationMethods = await prisma.verificationMethods.upsert({
     *   create: {
     *     // ... data to create a VerificationMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationMethods we want to update
     *   }
     * })
     */
    upsert<T extends VerificationMethodsUpsertArgs>(args: SelectSubset<T, VerificationMethodsUpsertArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsCountArgs} args - Arguments to filter VerificationMethods to count.
     * @example
     * // Count the number of VerificationMethods
     * const count = await prisma.verificationMethods.count({
     *   where: {
     *     // ... the filter for the VerificationMethods we want to count
     *   }
     * })
    **/
    count<T extends VerificationMethodsCountArgs>(
      args?: Subset<T, VerificationMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationMethodsAggregateArgs>(args: Subset<T, VerificationMethodsAggregateArgs>): Prisma.PrismaPromise<GetVerificationMethodsAggregateType<T>>

    /**
     * Group by VerificationMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationMethodsGroupByArgs} args - Group by arguments.
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
      T extends VerificationMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationMethodsGroupByArgs['orderBy'] }
        : { orderBy?: VerificationMethodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationMethods model
   */
  readonly fields: VerificationMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailVerification<T extends VerificationMethods$emailVerificationArgs<ExtArgs> = {}>(args?: Subset<T, VerificationMethods$emailVerificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VerificationMethods model
   */
  interface VerificationMethodsFieldRefs {
    readonly id: FieldRef<"VerificationMethods", 'String'>
    readonly studentProfileId: FieldRef<"VerificationMethods", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VerificationMethods findUnique
   */
  export type VerificationMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter, which VerificationMethods to fetch.
     */
    where: VerificationMethodsWhereUniqueInput
  }

  /**
   * VerificationMethods findUniqueOrThrow
   */
  export type VerificationMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter, which VerificationMethods to fetch.
     */
    where: VerificationMethodsWhereUniqueInput
  }

  /**
   * VerificationMethods findFirst
   */
  export type VerificationMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter, which VerificationMethods to fetch.
     */
    where?: VerificationMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationMethods to fetch.
     */
    orderBy?: VerificationMethodsOrderByWithRelationInput | VerificationMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationMethods.
     */
    cursor?: VerificationMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationMethods.
     */
    distinct?: VerificationMethodsScalarFieldEnum | VerificationMethodsScalarFieldEnum[]
  }

  /**
   * VerificationMethods findFirstOrThrow
   */
  export type VerificationMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter, which VerificationMethods to fetch.
     */
    where?: VerificationMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationMethods to fetch.
     */
    orderBy?: VerificationMethodsOrderByWithRelationInput | VerificationMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationMethods.
     */
    cursor?: VerificationMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationMethods.
     */
    distinct?: VerificationMethodsScalarFieldEnum | VerificationMethodsScalarFieldEnum[]
  }

  /**
   * VerificationMethods findMany
   */
  export type VerificationMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter, which VerificationMethods to fetch.
     */
    where?: VerificationMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationMethods to fetch.
     */
    orderBy?: VerificationMethodsOrderByWithRelationInput | VerificationMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationMethods.
     */
    cursor?: VerificationMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationMethods.
     */
    skip?: number
    distinct?: VerificationMethodsScalarFieldEnum | VerificationMethodsScalarFieldEnum[]
  }

  /**
   * VerificationMethods create
   */
  export type VerificationMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationMethods.
     */
    data: XOR<VerificationMethodsCreateInput, VerificationMethodsUncheckedCreateInput>
  }

  /**
   * VerificationMethods createMany
   */
  export type VerificationMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationMethods.
     */
    data: VerificationMethodsCreateManyInput | VerificationMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationMethods createManyAndReturn
   */
  export type VerificationMethodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationMethods.
     */
    data: VerificationMethodsCreateManyInput | VerificationMethodsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationMethods update
   */
  export type VerificationMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationMethods.
     */
    data: XOR<VerificationMethodsUpdateInput, VerificationMethodsUncheckedUpdateInput>
    /**
     * Choose, which VerificationMethods to update.
     */
    where: VerificationMethodsWhereUniqueInput
  }

  /**
   * VerificationMethods updateMany
   */
  export type VerificationMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationMethods.
     */
    data: XOR<VerificationMethodsUpdateManyMutationInput, VerificationMethodsUncheckedUpdateManyInput>
    /**
     * Filter which VerificationMethods to update
     */
    where?: VerificationMethodsWhereInput
    /**
     * Limit how many VerificationMethods to update.
     */
    limit?: number
  }

  /**
   * VerificationMethods updateManyAndReturn
   */
  export type VerificationMethodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * The data used to update VerificationMethods.
     */
    data: XOR<VerificationMethodsUpdateManyMutationInput, VerificationMethodsUncheckedUpdateManyInput>
    /**
     * Filter which VerificationMethods to update
     */
    where?: VerificationMethodsWhereInput
    /**
     * Limit how many VerificationMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationMethods upsert
   */
  export type VerificationMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationMethods to update in case it exists.
     */
    where: VerificationMethodsWhereUniqueInput
    /**
     * In case the VerificationMethods found by the `where` argument doesn't exist, create a new VerificationMethods with this data.
     */
    create: XOR<VerificationMethodsCreateInput, VerificationMethodsUncheckedCreateInput>
    /**
     * In case the VerificationMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationMethodsUpdateInput, VerificationMethodsUncheckedUpdateInput>
  }

  /**
   * VerificationMethods delete
   */
  export type VerificationMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    /**
     * Filter which VerificationMethods to delete.
     */
    where: VerificationMethodsWhereUniqueInput
  }

  /**
   * VerificationMethods deleteMany
   */
  export type VerificationMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationMethods to delete
     */
    where?: VerificationMethodsWhereInput
    /**
     * Limit how many VerificationMethods to delete.
     */
    limit?: number
  }

  /**
   * VerificationMethods.emailVerification
   */
  export type VerificationMethods$emailVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * VerificationMethods without action
   */
  export type VerificationMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
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
    emailAddress: string | null
    verificationCode: string | null
    isVerified: boolean | null
    expiresAt: Date | null
    verificationMethodsId: string | null
    createdAt: Date | null
  }

  export type EmailVerificationMaxAggregateOutputType = {
    id: string | null
    emailAddress: string | null
    verificationCode: string | null
    isVerified: boolean | null
    expiresAt: Date | null
    verificationMethodsId: string | null
    createdAt: Date | null
  }

  export type EmailVerificationCountAggregateOutputType = {
    id: number
    emailAddress: number
    verificationCode: number
    isVerified: number
    expiresAt: number
    verificationMethodsId: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationMinAggregateInputType = {
    id?: true
    emailAddress?: true
    verificationCode?: true
    isVerified?: true
    expiresAt?: true
    verificationMethodsId?: true
    createdAt?: true
  }

  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    emailAddress?: true
    verificationCode?: true
    isVerified?: true
    expiresAt?: true
    verificationMethodsId?: true
    createdAt?: true
  }

  export type EmailVerificationCountAggregateInputType = {
    id?: true
    emailAddress?: true
    verificationCode?: true
    isVerified?: true
    expiresAt?: true
    verificationMethodsId?: true
    createdAt?: true
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
    emailAddress: string
    verificationCode: string
    isVerified: boolean
    expiresAt: Date | null
    verificationMethodsId: string | null
    createdAt: Date
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
    emailAddress?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    expiresAt?: boolean
    verificationMethodsId?: boolean
    createdAt?: boolean
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailAddress?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    expiresAt?: boolean
    verificationMethodsId?: boolean
    createdAt?: boolean
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailAddress?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    expiresAt?: boolean
    verificationMethodsId?: boolean
    createdAt?: boolean
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectScalar = {
    id?: boolean
    emailAddress?: boolean
    verificationCode?: boolean
    isVerified?: boolean
    expiresAt?: boolean
    verificationMethodsId?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emailAddress" | "verificationCode" | "isVerified" | "expiresAt" | "verificationMethodsId" | "createdAt", ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }
  export type EmailVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }
  export type EmailVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationMethods?: boolean | EmailVerification$verificationMethodsArgs<ExtArgs>
  }

  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {
      verificationMethods: Prisma.$VerificationMethodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailAddress: string
      verificationCode: string
      isVerified: boolean
      expiresAt: Date | null
      verificationMethodsId: string | null
      createdAt: Date
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
    verificationMethods<T extends EmailVerification$verificationMethodsArgs<ExtArgs> = {}>(args?: Subset<T, EmailVerification$verificationMethodsArgs<ExtArgs>>): Prisma__VerificationMethodsClient<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly emailAddress: FieldRef<"EmailVerification", 'String'>
    readonly verificationCode: FieldRef<"EmailVerification", 'String'>
    readonly isVerified: FieldRef<"EmailVerification", 'Boolean'>
    readonly expiresAt: FieldRef<"EmailVerification", 'DateTime'>
    readonly verificationMethodsId: FieldRef<"EmailVerification", 'String'>
    readonly createdAt: FieldRef<"EmailVerification", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * EmailVerification.verificationMethods
   */
  export type EmailVerification$verificationMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    where?: VerificationMethodsWhereInput
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
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    studentId: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    studentId: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    fullName: number
    studentId: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentProfileMinAggregateInputType = {
    id?: true
    fullName?: true
    studentId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    fullName?: true
    studentId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    fullName?: true
    studentId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    fullName: string | null
    studentId: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    studentId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationMethods?: boolean | StudentProfile$verificationMethodsArgs<ExtArgs>
    linkedAccounts?: boolean | StudentProfile$linkedAccountsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    studentId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    studentId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    fullName?: boolean
    studentId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "studentId" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationMethods?: boolean | StudentProfile$verificationMethodsArgs<ExtArgs>
    linkedAccounts?: boolean | StudentProfile$linkedAccountsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      verificationMethods: Prisma.$VerificationMethodsPayload<ExtArgs>[]
      linkedAccounts: Prisma.$LinkedAccountsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string | null
      studentId: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verificationMethods<T extends StudentProfile$verificationMethodsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$verificationMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedAccounts<T extends StudentProfile$linkedAccountsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$linkedAccountsArgs<ExtArgs>>): Prisma__LinkedAccountsClient<$Result.GetResult<Prisma.$LinkedAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly fullName: FieldRef<"StudentProfile", 'String'>
    readonly studentId: FieldRef<"StudentProfile", 'String'>
    readonly isVerified: FieldRef<"StudentProfile", 'Boolean'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.verificationMethods
   */
  export type StudentProfile$verificationMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationMethods
     */
    select?: VerificationMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationMethods
     */
    omit?: VerificationMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationMethodsInclude<ExtArgs> | null
    where?: VerificationMethodsWhereInput
    orderBy?: VerificationMethodsOrderByWithRelationInput | VerificationMethodsOrderByWithRelationInput[]
    cursor?: VerificationMethodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationMethodsScalarFieldEnum | VerificationMethodsScalarFieldEnum[]
  }

  /**
   * StudentProfile.linkedAccounts
   */
  export type StudentProfile$linkedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedAccounts
     */
    select?: LinkedAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedAccounts
     */
    omit?: LinkedAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedAccountsInclude<ExtArgs> | null
    where?: LinkedAccountsWhereInput
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    language: string | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    language: string | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    language: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    language?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    language?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    language?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    language: string
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    language?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language", ExtArgs["result"]["userSettings"]>

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      language: string
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data?: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LinkedPlatformsScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId'
  };

  export type LinkedPlatformsScalarFieldEnum = (typeof LinkedPlatformsScalarFieldEnum)[keyof typeof LinkedPlatformsScalarFieldEnum]


  export const DiscordGuildScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    linkedToId: 'linkedToId'
  };

  export type DiscordGuildScalarFieldEnum = (typeof DiscordGuildScalarFieldEnum)[keyof typeof DiscordGuildScalarFieldEnum]


  export const DiscordGuildMemberScalarFieldEnum: {
    id: 'id',
    discordGuildId: 'discordGuildId',
    discordAccountLinkId: 'discordAccountLinkId',
    isOwner: 'isOwner',
    joinedAt: 'joinedAt'
  };

  export type DiscordGuildMemberScalarFieldEnum = (typeof DiscordGuildMemberScalarFieldEnum)[keyof typeof DiscordGuildMemberScalarFieldEnum]


  export const DiscordGuildMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    parentMessageId: 'parentMessageId',
    userId: 'userId',
    attachmentUrl: 'attachmentUrl',
    createdAt: 'createdAt'
  };

  export type DiscordGuildMessageScalarFieldEnum = (typeof DiscordGuildMessageScalarFieldEnum)[keyof typeof DiscordGuildMessageScalarFieldEnum]


  export const LinkedAccountsScalarFieldEnum: {
    id: 'id',
    studentProfileId: 'studentProfileId'
  };

  export type LinkedAccountsScalarFieldEnum = (typeof LinkedAccountsScalarFieldEnum)[keyof typeof LinkedAccountsScalarFieldEnum]


  export const DiscordAccountLinkScalarFieldEnum: {
    id: 'id',
    username: 'username',
    avatarUrl: 'avatarUrl',
    linkedAccountsId: 'linkedAccountsId'
  };

  export type DiscordAccountLinkScalarFieldEnum = (typeof DiscordAccountLinkScalarFieldEnum)[keyof typeof DiscordAccountLinkScalarFieldEnum]


  export const DiscordSessionScalarFieldEnum: {
    id: 'id',
    token: 'token',
    accessToken: 'accessToken',
    accessTokenExpiry: 'accessTokenExpiry',
    escalationSecret: 'escalationSecret',
    isAuthenticated: 'isAuthenticated',
    isRevoked: 'isRevoked',
    discordAccountLinkId: 'discordAccountLinkId'
  };

  export type DiscordSessionScalarFieldEnum = (typeof DiscordSessionScalarFieldEnum)[keyof typeof DiscordSessionScalarFieldEnum]


  export const VerificationMethodsScalarFieldEnum: {
    id: 'id',
    studentProfileId: 'studentProfileId'
  };

  export type VerificationMethodsScalarFieldEnum = (typeof VerificationMethodsScalarFieldEnum)[keyof typeof VerificationMethodsScalarFieldEnum]


  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    emailAddress: 'emailAddress',
    verificationCode: 'verificationCode',
    isVerified: 'isVerified',
    expiresAt: 'expiresAt',
    verificationMethodsId: 'verificationMethodsId',
    createdAt: 'createdAt'
  };

  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    studentId: 'studentId',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    language: 'language'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


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


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    icon?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    linkedPlatforms?: XOR<LinkedPlatformsNullableScalarRelationFilter, LinkedPlatformsWhereInput> | null
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    linkedPlatforms?: LinkedPlatformsOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    icon?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    linkedPlatforms?: XOR<LinkedPlatformsNullableScalarRelationFilter, LinkedPlatformsWhereInput> | null
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    icon?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type LinkedPlatformsWhereInput = {
    AND?: LinkedPlatformsWhereInput | LinkedPlatformsWhereInput[]
    OR?: LinkedPlatformsWhereInput[]
    NOT?: LinkedPlatformsWhereInput | LinkedPlatformsWhereInput[]
    id?: StringFilter<"LinkedPlatforms"> | string
    tenantId?: StringFilter<"LinkedPlatforms"> | string
    discordGuild?: XOR<DiscordGuildNullableScalarRelationFilter, DiscordGuildWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type LinkedPlatformsOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    discordGuild?: DiscordGuildOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type LinkedPlatformsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: LinkedPlatformsWhereInput | LinkedPlatformsWhereInput[]
    OR?: LinkedPlatformsWhereInput[]
    NOT?: LinkedPlatformsWhereInput | LinkedPlatformsWhereInput[]
    discordGuild?: XOR<DiscordGuildNullableScalarRelationFilter, DiscordGuildWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "tenantId">

  export type LinkedPlatformsOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    _count?: LinkedPlatformsCountOrderByAggregateInput
    _max?: LinkedPlatformsMaxOrderByAggregateInput
    _min?: LinkedPlatformsMinOrderByAggregateInput
  }

  export type LinkedPlatformsScalarWhereWithAggregatesInput = {
    AND?: LinkedPlatformsScalarWhereWithAggregatesInput | LinkedPlatformsScalarWhereWithAggregatesInput[]
    OR?: LinkedPlatformsScalarWhereWithAggregatesInput[]
    NOT?: LinkedPlatformsScalarWhereWithAggregatesInput | LinkedPlatformsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedPlatforms"> | string
    tenantId?: StringWithAggregatesFilter<"LinkedPlatforms"> | string
  }

  export type DiscordGuildWhereInput = {
    AND?: DiscordGuildWhereInput | DiscordGuildWhereInput[]
    OR?: DiscordGuildWhereInput[]
    NOT?: DiscordGuildWhereInput | DiscordGuildWhereInput[]
    id?: StringFilter<"DiscordGuild"> | string
    name?: StringFilter<"DiscordGuild"> | string
    icon?: StringNullableFilter<"DiscordGuild"> | string | null
    linkedToId?: StringNullableFilter<"DiscordGuild"> | string | null
    guildMembers?: DiscordGuildMemberListRelationFilter
    linkedTo?: XOR<LinkedPlatformsNullableScalarRelationFilter, LinkedPlatformsWhereInput> | null
  }

  export type DiscordGuildOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    linkedToId?: SortOrderInput | SortOrder
    guildMembers?: DiscordGuildMemberOrderByRelationAggregateInput
    linkedTo?: LinkedPlatformsOrderByWithRelationInput
  }

  export type DiscordGuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkedToId?: string
    AND?: DiscordGuildWhereInput | DiscordGuildWhereInput[]
    OR?: DiscordGuildWhereInput[]
    NOT?: DiscordGuildWhereInput | DiscordGuildWhereInput[]
    name?: StringFilter<"DiscordGuild"> | string
    icon?: StringNullableFilter<"DiscordGuild"> | string | null
    guildMembers?: DiscordGuildMemberListRelationFilter
    linkedTo?: XOR<LinkedPlatformsNullableScalarRelationFilter, LinkedPlatformsWhereInput> | null
  }, "id" | "linkedToId">

  export type DiscordGuildOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    linkedToId?: SortOrderInput | SortOrder
    _count?: DiscordGuildCountOrderByAggregateInput
    _max?: DiscordGuildMaxOrderByAggregateInput
    _min?: DiscordGuildMinOrderByAggregateInput
  }

  export type DiscordGuildScalarWhereWithAggregatesInput = {
    AND?: DiscordGuildScalarWhereWithAggregatesInput | DiscordGuildScalarWhereWithAggregatesInput[]
    OR?: DiscordGuildScalarWhereWithAggregatesInput[]
    NOT?: DiscordGuildScalarWhereWithAggregatesInput | DiscordGuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordGuild"> | string
    name?: StringWithAggregatesFilter<"DiscordGuild"> | string
    icon?: StringNullableWithAggregatesFilter<"DiscordGuild"> | string | null
    linkedToId?: StringNullableWithAggregatesFilter<"DiscordGuild"> | string | null
  }

  export type DiscordGuildMemberWhereInput = {
    AND?: DiscordGuildMemberWhereInput | DiscordGuildMemberWhereInput[]
    OR?: DiscordGuildMemberWhereInput[]
    NOT?: DiscordGuildMemberWhereInput | DiscordGuildMemberWhereInput[]
    id?: StringFilter<"DiscordGuildMember"> | string
    discordGuildId?: StringFilter<"DiscordGuildMember"> | string
    discordAccountLinkId?: StringFilter<"DiscordGuildMember"> | string
    isOwner?: BoolFilter<"DiscordGuildMember"> | boolean
    joinedAt?: DateTimeFilter<"DiscordGuildMember"> | Date | string
    discordGuild?: XOR<DiscordGuildScalarRelationFilter, DiscordGuildWhereInput>
    discord?: XOR<DiscordAccountLinkScalarRelationFilter, DiscordAccountLinkWhereInput>
    messages?: DiscordGuildMessageListRelationFilter
  }

  export type DiscordGuildMemberOrderByWithRelationInput = {
    id?: SortOrder
    discordGuildId?: SortOrder
    discordAccountLinkId?: SortOrder
    isOwner?: SortOrder
    joinedAt?: SortOrder
    discordGuild?: DiscordGuildOrderByWithRelationInput
    discord?: DiscordAccountLinkOrderByWithRelationInput
    messages?: DiscordGuildMessageOrderByRelationAggregateInput
  }

  export type DiscordGuildMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordGuildId_discordAccountLinkId?: DiscordGuildMemberDiscordGuildIdDiscordAccountLinkIdCompoundUniqueInput
    AND?: DiscordGuildMemberWhereInput | DiscordGuildMemberWhereInput[]
    OR?: DiscordGuildMemberWhereInput[]
    NOT?: DiscordGuildMemberWhereInput | DiscordGuildMemberWhereInput[]
    discordGuildId?: StringFilter<"DiscordGuildMember"> | string
    discordAccountLinkId?: StringFilter<"DiscordGuildMember"> | string
    isOwner?: BoolFilter<"DiscordGuildMember"> | boolean
    joinedAt?: DateTimeFilter<"DiscordGuildMember"> | Date | string
    discordGuild?: XOR<DiscordGuildScalarRelationFilter, DiscordGuildWhereInput>
    discord?: XOR<DiscordAccountLinkScalarRelationFilter, DiscordAccountLinkWhereInput>
    messages?: DiscordGuildMessageListRelationFilter
  }, "id" | "discordGuildId_discordAccountLinkId">

  export type DiscordGuildMemberOrderByWithAggregationInput = {
    id?: SortOrder
    discordGuildId?: SortOrder
    discordAccountLinkId?: SortOrder
    isOwner?: SortOrder
    joinedAt?: SortOrder
    _count?: DiscordGuildMemberCountOrderByAggregateInput
    _max?: DiscordGuildMemberMaxOrderByAggregateInput
    _min?: DiscordGuildMemberMinOrderByAggregateInput
  }

  export type DiscordGuildMemberScalarWhereWithAggregatesInput = {
    AND?: DiscordGuildMemberScalarWhereWithAggregatesInput | DiscordGuildMemberScalarWhereWithAggregatesInput[]
    OR?: DiscordGuildMemberScalarWhereWithAggregatesInput[]
    NOT?: DiscordGuildMemberScalarWhereWithAggregatesInput | DiscordGuildMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordGuildMember"> | string
    discordGuildId?: StringWithAggregatesFilter<"DiscordGuildMember"> | string
    discordAccountLinkId?: StringWithAggregatesFilter<"DiscordGuildMember"> | string
    isOwner?: BoolWithAggregatesFilter<"DiscordGuildMember"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"DiscordGuildMember"> | Date | string
  }

  export type DiscordGuildMessageWhereInput = {
    AND?: DiscordGuildMessageWhereInput | DiscordGuildMessageWhereInput[]
    OR?: DiscordGuildMessageWhereInput[]
    NOT?: DiscordGuildMessageWhereInput | DiscordGuildMessageWhereInput[]
    id?: StringFilter<"DiscordGuildMessage"> | string
    message?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    userId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscordGuildMessage"> | Date | string
    mentions?: DiscordGuildMessageListRelationFilter
    parentMessage?: XOR<DiscordGuildMessageNullableScalarRelationFilter, DiscordGuildMessageWhereInput> | null
    user?: XOR<DiscordGuildMemberNullableScalarRelationFilter, DiscordGuildMemberWhereInput> | null
  }

  export type DiscordGuildMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    parentMessageId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    mentions?: DiscordGuildMessageOrderByRelationAggregateInput
    parentMessage?: DiscordGuildMessageOrderByWithRelationInput
    user?: DiscordGuildMemberOrderByWithRelationInput
  }

  export type DiscordGuildMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscordGuildMessageWhereInput | DiscordGuildMessageWhereInput[]
    OR?: DiscordGuildMessageWhereInput[]
    NOT?: DiscordGuildMessageWhereInput | DiscordGuildMessageWhereInput[]
    message?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    userId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscordGuildMessage"> | Date | string
    mentions?: DiscordGuildMessageListRelationFilter
    parentMessage?: XOR<DiscordGuildMessageNullableScalarRelationFilter, DiscordGuildMessageWhereInput> | null
    user?: XOR<DiscordGuildMemberNullableScalarRelationFilter, DiscordGuildMemberWhereInput> | null
  }, "id">

  export type DiscordGuildMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    parentMessageId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DiscordGuildMessageCountOrderByAggregateInput
    _max?: DiscordGuildMessageMaxOrderByAggregateInput
    _min?: DiscordGuildMessageMinOrderByAggregateInput
  }

  export type DiscordGuildMessageScalarWhereWithAggregatesInput = {
    AND?: DiscordGuildMessageScalarWhereWithAggregatesInput | DiscordGuildMessageScalarWhereWithAggregatesInput[]
    OR?: DiscordGuildMessageScalarWhereWithAggregatesInput[]
    NOT?: DiscordGuildMessageScalarWhereWithAggregatesInput | DiscordGuildMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordGuildMessage"> | string
    message?: StringNullableWithAggregatesFilter<"DiscordGuildMessage"> | string | null
    parentMessageId?: StringNullableWithAggregatesFilter<"DiscordGuildMessage"> | string | null
    userId?: StringNullableWithAggregatesFilter<"DiscordGuildMessage"> | string | null
    attachmentUrl?: StringNullableWithAggregatesFilter<"DiscordGuildMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DiscordGuildMessage"> | Date | string
  }

  export type LinkedAccountsWhereInput = {
    AND?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    OR?: LinkedAccountsWhereInput[]
    NOT?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    id?: StringFilter<"LinkedAccounts"> | string
    studentProfileId?: StringFilter<"LinkedAccounts"> | string
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    discord?: XOR<DiscordAccountLinkNullableScalarRelationFilter, DiscordAccountLinkWhereInput> | null
  }

  export type LinkedAccountsOrderByWithRelationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    studentProfile?: StudentProfileOrderByWithRelationInput
    discord?: DiscordAccountLinkOrderByWithRelationInput
  }

  export type LinkedAccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentProfileId?: string
    AND?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    OR?: LinkedAccountsWhereInput[]
    NOT?: LinkedAccountsWhereInput | LinkedAccountsWhereInput[]
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    discord?: XOR<DiscordAccountLinkNullableScalarRelationFilter, DiscordAccountLinkWhereInput> | null
  }, "id" | "studentProfileId">

  export type LinkedAccountsOrderByWithAggregationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    _count?: LinkedAccountsCountOrderByAggregateInput
    _max?: LinkedAccountsMaxOrderByAggregateInput
    _min?: LinkedAccountsMinOrderByAggregateInput
  }

  export type LinkedAccountsScalarWhereWithAggregatesInput = {
    AND?: LinkedAccountsScalarWhereWithAggregatesInput | LinkedAccountsScalarWhereWithAggregatesInput[]
    OR?: LinkedAccountsScalarWhereWithAggregatesInput[]
    NOT?: LinkedAccountsScalarWhereWithAggregatesInput | LinkedAccountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedAccounts"> | string
    studentProfileId?: StringWithAggregatesFilter<"LinkedAccounts"> | string
  }

  export type DiscordAccountLinkWhereInput = {
    AND?: DiscordAccountLinkWhereInput | DiscordAccountLinkWhereInput[]
    OR?: DiscordAccountLinkWhereInput[]
    NOT?: DiscordAccountLinkWhereInput | DiscordAccountLinkWhereInput[]
    id?: StringFilter<"DiscordAccountLink"> | string
    username?: StringFilter<"DiscordAccountLink"> | string
    avatarUrl?: StringNullableFilter<"DiscordAccountLink"> | string | null
    linkedAccountsId?: StringNullableFilter<"DiscordAccountLink"> | string | null
    linkedAccounts?: XOR<LinkedAccountsNullableScalarRelationFilter, LinkedAccountsWhereInput> | null
    sessions?: DiscordSessionListRelationFilter
    guilds?: DiscordGuildMemberListRelationFilter
  }

  export type DiscordAccountLinkOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    linkedAccountsId?: SortOrderInput | SortOrder
    linkedAccounts?: LinkedAccountsOrderByWithRelationInput
    sessions?: DiscordSessionOrderByRelationAggregateInput
    guilds?: DiscordGuildMemberOrderByRelationAggregateInput
  }

  export type DiscordAccountLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    linkedAccountsId?: string
    AND?: DiscordAccountLinkWhereInput | DiscordAccountLinkWhereInput[]
    OR?: DiscordAccountLinkWhereInput[]
    NOT?: DiscordAccountLinkWhereInput | DiscordAccountLinkWhereInput[]
    avatarUrl?: StringNullableFilter<"DiscordAccountLink"> | string | null
    linkedAccounts?: XOR<LinkedAccountsNullableScalarRelationFilter, LinkedAccountsWhereInput> | null
    sessions?: DiscordSessionListRelationFilter
    guilds?: DiscordGuildMemberListRelationFilter
  }, "id" | "username" | "linkedAccountsId">

  export type DiscordAccountLinkOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    linkedAccountsId?: SortOrderInput | SortOrder
    _count?: DiscordAccountLinkCountOrderByAggregateInput
    _max?: DiscordAccountLinkMaxOrderByAggregateInput
    _min?: DiscordAccountLinkMinOrderByAggregateInput
  }

  export type DiscordAccountLinkScalarWhereWithAggregatesInput = {
    AND?: DiscordAccountLinkScalarWhereWithAggregatesInput | DiscordAccountLinkScalarWhereWithAggregatesInput[]
    OR?: DiscordAccountLinkScalarWhereWithAggregatesInput[]
    NOT?: DiscordAccountLinkScalarWhereWithAggregatesInput | DiscordAccountLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordAccountLink"> | string
    username?: StringWithAggregatesFilter<"DiscordAccountLink"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"DiscordAccountLink"> | string | null
    linkedAccountsId?: StringNullableWithAggregatesFilter<"DiscordAccountLink"> | string | null
  }

  export type DiscordSessionWhereInput = {
    AND?: DiscordSessionWhereInput | DiscordSessionWhereInput[]
    OR?: DiscordSessionWhereInput[]
    NOT?: DiscordSessionWhereInput | DiscordSessionWhereInput[]
    id?: StringFilter<"DiscordSession"> | string
    token?: StringFilter<"DiscordSession"> | string
    accessToken?: StringNullableFilter<"DiscordSession"> | string | null
    accessTokenExpiry?: DateTimeNullableFilter<"DiscordSession"> | Date | string | null
    escalationSecret?: StringFilter<"DiscordSession"> | string
    isAuthenticated?: BoolFilter<"DiscordSession"> | boolean
    isRevoked?: BoolFilter<"DiscordSession"> | boolean
    discordAccountLinkId?: StringNullableFilter<"DiscordSession"> | string | null
    discordAccountLink?: XOR<DiscordAccountLinkNullableScalarRelationFilter, DiscordAccountLinkWhereInput> | null
  }

  export type DiscordSessionOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiry?: SortOrderInput | SortOrder
    escalationSecret?: SortOrder
    isAuthenticated?: SortOrder
    isRevoked?: SortOrder
    discordAccountLinkId?: SortOrderInput | SortOrder
    discordAccountLink?: DiscordAccountLinkOrderByWithRelationInput
  }

  export type DiscordSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    accessToken?: string
    AND?: DiscordSessionWhereInput | DiscordSessionWhereInput[]
    OR?: DiscordSessionWhereInput[]
    NOT?: DiscordSessionWhereInput | DiscordSessionWhereInput[]
    accessTokenExpiry?: DateTimeNullableFilter<"DiscordSession"> | Date | string | null
    escalationSecret?: StringFilter<"DiscordSession"> | string
    isAuthenticated?: BoolFilter<"DiscordSession"> | boolean
    isRevoked?: BoolFilter<"DiscordSession"> | boolean
    discordAccountLinkId?: StringNullableFilter<"DiscordSession"> | string | null
    discordAccountLink?: XOR<DiscordAccountLinkNullableScalarRelationFilter, DiscordAccountLinkWhereInput> | null
  }, "id" | "token" | "accessToken">

  export type DiscordSessionOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiry?: SortOrderInput | SortOrder
    escalationSecret?: SortOrder
    isAuthenticated?: SortOrder
    isRevoked?: SortOrder
    discordAccountLinkId?: SortOrderInput | SortOrder
    _count?: DiscordSessionCountOrderByAggregateInput
    _max?: DiscordSessionMaxOrderByAggregateInput
    _min?: DiscordSessionMinOrderByAggregateInput
  }

  export type DiscordSessionScalarWhereWithAggregatesInput = {
    AND?: DiscordSessionScalarWhereWithAggregatesInput | DiscordSessionScalarWhereWithAggregatesInput[]
    OR?: DiscordSessionScalarWhereWithAggregatesInput[]
    NOT?: DiscordSessionScalarWhereWithAggregatesInput | DiscordSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscordSession"> | string
    token?: StringWithAggregatesFilter<"DiscordSession"> | string
    accessToken?: StringNullableWithAggregatesFilter<"DiscordSession"> | string | null
    accessTokenExpiry?: DateTimeNullableWithAggregatesFilter<"DiscordSession"> | Date | string | null
    escalationSecret?: StringWithAggregatesFilter<"DiscordSession"> | string
    isAuthenticated?: BoolWithAggregatesFilter<"DiscordSession"> | boolean
    isRevoked?: BoolWithAggregatesFilter<"DiscordSession"> | boolean
    discordAccountLinkId?: StringNullableWithAggregatesFilter<"DiscordSession"> | string | null
  }

  export type VerificationMethodsWhereInput = {
    AND?: VerificationMethodsWhereInput | VerificationMethodsWhereInput[]
    OR?: VerificationMethodsWhereInput[]
    NOT?: VerificationMethodsWhereInput | VerificationMethodsWhereInput[]
    id?: StringFilter<"VerificationMethods"> | string
    studentProfileId?: StringFilter<"VerificationMethods"> | string
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    emailVerification?: EmailVerificationListRelationFilter
  }

  export type VerificationMethodsOrderByWithRelationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    studentProfile?: StudentProfileOrderByWithRelationInput
    emailVerification?: EmailVerificationOrderByRelationAggregateInput
  }

  export type VerificationMethodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationMethodsWhereInput | VerificationMethodsWhereInput[]
    OR?: VerificationMethodsWhereInput[]
    NOT?: VerificationMethodsWhereInput | VerificationMethodsWhereInput[]
    studentProfileId?: StringFilter<"VerificationMethods"> | string
    studentProfile?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    emailVerification?: EmailVerificationListRelationFilter
  }, "id">

  export type VerificationMethodsOrderByWithAggregationInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
    _count?: VerificationMethodsCountOrderByAggregateInput
    _max?: VerificationMethodsMaxOrderByAggregateInput
    _min?: VerificationMethodsMinOrderByAggregateInput
  }

  export type VerificationMethodsScalarWhereWithAggregatesInput = {
    AND?: VerificationMethodsScalarWhereWithAggregatesInput | VerificationMethodsScalarWhereWithAggregatesInput[]
    OR?: VerificationMethodsScalarWhereWithAggregatesInput[]
    NOT?: VerificationMethodsScalarWhereWithAggregatesInput | VerificationMethodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationMethods"> | string
    studentProfileId?: StringWithAggregatesFilter<"VerificationMethods"> | string
  }

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    emailAddress?: StringFilter<"EmailVerification"> | string
    verificationCode?: StringFilter<"EmailVerification"> | string
    isVerified?: BoolFilter<"EmailVerification"> | boolean
    expiresAt?: DateTimeNullableFilter<"EmailVerification"> | Date | string | null
    verificationMethodsId?: StringNullableFilter<"EmailVerification"> | string | null
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    verificationMethods?: XOR<VerificationMethodsNullableScalarRelationFilter, VerificationMethodsWhereInput> | null
  }

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    emailAddress?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    verificationMethodsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    verificationMethods?: VerificationMethodsOrderByWithRelationInput
  }

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    emailAddress?: StringFilter<"EmailVerification"> | string
    verificationCode?: StringFilter<"EmailVerification"> | string
    isVerified?: BoolFilter<"EmailVerification"> | boolean
    expiresAt?: DateTimeNullableFilter<"EmailVerification"> | Date | string | null
    verificationMethodsId?: StringNullableFilter<"EmailVerification"> | string | null
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    verificationMethods?: XOR<VerificationMethodsNullableScalarRelationFilter, VerificationMethodsWhereInput> | null
  }, "id">

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    emailAddress?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    verificationMethodsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
  }

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerification"> | string
    emailAddress?: StringWithAggregatesFilter<"EmailVerification"> | string
    verificationCode?: StringWithAggregatesFilter<"EmailVerification"> | string
    isVerified?: BoolWithAggregatesFilter<"EmailVerification"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"EmailVerification"> | Date | string | null
    verificationMethodsId?: StringNullableWithAggregatesFilter<"EmailVerification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    fullName?: StringNullableFilter<"StudentProfile"> | string | null
    studentId?: StringNullableFilter<"StudentProfile"> | string | null
    isVerified?: BoolFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    verificationMethods?: VerificationMethodsListRelationFilter
    linkedAccounts?: XOR<LinkedAccountsNullableScalarRelationFilter, LinkedAccountsWhereInput> | null
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationMethods?: VerificationMethodsOrderByRelationAggregateInput
    linkedAccounts?: LinkedAccountsOrderByWithRelationInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    fullName?: StringNullableFilter<"StudentProfile"> | string | null
    isVerified?: BoolFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    verificationMethods?: VerificationMethodsListRelationFilter
    linkedAccounts?: XOR<LinkedAccountsNullableScalarRelationFilter, LinkedAccountsWhereInput> | null
  }, "id" | "studentId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    fullName?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    studentId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    isVerified?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrder
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    language?: StringFilter<"UserSettings"> | string
  }, "id">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: StringWithAggregatesFilter<"UserSettings"> | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedPlatforms?: LinkedPlatformsCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedPlatforms?: LinkedPlatformsUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedPlatforms?: LinkedPlatformsUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedPlatforms?: LinkedPlatformsUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedPlatformsCreateInput = {
    id?: string
    discordGuild?: DiscordGuildCreateNestedOneWithoutLinkedToInput
    tenant: TenantCreateNestedOneWithoutLinkedPlatformsInput
  }

  export type LinkedPlatformsUncheckedCreateInput = {
    id?: string
    tenantId: string
    discordGuild?: DiscordGuildUncheckedCreateNestedOneWithoutLinkedToInput
  }

  export type LinkedPlatformsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuild?: DiscordGuildUpdateOneWithoutLinkedToNestedInput
    tenant?: TenantUpdateOneRequiredWithoutLinkedPlatformsNestedInput
  }

  export type LinkedPlatformsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    discordGuild?: DiscordGuildUncheckedUpdateOneWithoutLinkedToNestedInput
  }

  export type LinkedPlatformsCreateManyInput = {
    id?: string
    tenantId: string
  }

  export type LinkedPlatformsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedPlatformsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordGuildCreateInput = {
    id: string
    name: string
    icon?: string | null
    guildMembers?: DiscordGuildMemberCreateNestedManyWithoutDiscordGuildInput
    linkedTo?: LinkedPlatformsCreateNestedOneWithoutDiscordGuildInput
  }

  export type DiscordGuildUncheckedCreateInput = {
    id: string
    name: string
    icon?: string | null
    linkedToId?: string | null
    guildMembers?: DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordGuildInput
  }

  export type DiscordGuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    guildMembers?: DiscordGuildMemberUpdateManyWithoutDiscordGuildNestedInput
    linkedTo?: LinkedPlatformsUpdateOneWithoutDiscordGuildNestedInput
  }

  export type DiscordGuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    linkedToId?: NullableStringFieldUpdateOperationsInput | string | null
    guildMembers?: DiscordGuildMemberUncheckedUpdateManyWithoutDiscordGuildNestedInput
  }

  export type DiscordGuildCreateManyInput = {
    id: string
    name: string
    icon?: string | null
    linkedToId?: string | null
  }

  export type DiscordGuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordGuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    linkedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordGuildMemberCreateInput = {
    id?: string
    isOwner?: boolean
    joinedAt?: Date | string
    discordGuild: DiscordGuildCreateNestedOneWithoutGuildMembersInput
    discord: DiscordAccountLinkCreateNestedOneWithoutGuildsInput
    messages?: DiscordGuildMessageCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberUncheckedCreateInput = {
    id?: string
    discordGuildId: string
    discordAccountLinkId: string
    isOwner?: boolean
    joinedAt?: Date | string
    messages?: DiscordGuildMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordGuild?: DiscordGuildUpdateOneRequiredWithoutGuildMembersNestedInput
    discord?: DiscordAccountLinkUpdateOneRequiredWithoutGuildsNestedInput
    messages?: DiscordGuildMessageUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuildId?: StringFieldUpdateOperationsInput | string
    discordAccountLinkId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscordGuildMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberCreateManyInput = {
    id?: string
    discordGuildId: string
    discordAccountLinkId: string
    isOwner?: boolean
    joinedAt?: Date | string
  }

  export type DiscordGuildMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuildId?: StringFieldUpdateOperationsInput | string
    discordAccountLinkId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMessageCreateInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageCreateNestedManyWithoutParentMessageInput
    parentMessage?: DiscordGuildMessageCreateNestedOneWithoutMentionsInput
    user?: DiscordGuildMemberCreateNestedOneWithoutMessagesInput
  }

  export type DiscordGuildMessageUncheckedCreateInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    userId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type DiscordGuildMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUpdateManyWithoutParentMessageNestedInput
    parentMessage?: DiscordGuildMessageUpdateOneWithoutMentionsNestedInput
    user?: DiscordGuildMemberUpdateOneWithoutMessagesNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type DiscordGuildMessageCreateManyInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    userId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type DiscordGuildMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedAccountsCreateInput = {
    id?: string
    studentProfile: StudentProfileCreateNestedOneWithoutLinkedAccountsInput
    discord?: DiscordAccountLinkCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountsUncheckedCreateInput = {
    id?: string
    studentProfileId: string
    discord?: DiscordAccountLinkUncheckedCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutLinkedAccountsNestedInput
    discord?: DiscordAccountLinkUpdateOneWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    discord?: DiscordAccountLinkUncheckedUpdateOneWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountsCreateManyInput = {
    id?: string
    studentProfileId: string
  }

  export type LinkedAccountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedAccountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordAccountLinkCreateInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccounts?: LinkedAccountsCreateNestedOneWithoutDiscordInput
    sessions?: DiscordSessionCreateNestedManyWithoutDiscordAccountLinkInput
    guilds?: DiscordGuildMemberCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkUncheckedCreateInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccountsId?: string | null
    sessions?: DiscordSessionUncheckedCreateNestedManyWithoutDiscordAccountLinkInput
    guilds?: DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccounts?: LinkedAccountsUpdateOneWithoutDiscordNestedInput
    sessions?: DiscordSessionUpdateManyWithoutDiscordAccountLinkNestedInput
    guilds?: DiscordGuildMemberUpdateManyWithoutDiscordNestedInput
  }

  export type DiscordAccountLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccountsId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkNestedInput
    guilds?: DiscordGuildMemberUncheckedUpdateManyWithoutDiscordNestedInput
  }

  export type DiscordAccountLinkCreateManyInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccountsId?: string | null
  }

  export type DiscordAccountLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordAccountLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccountsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordSessionCreateInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLink?: DiscordAccountLinkCreateNestedOneWithoutSessionsInput
  }

  export type DiscordSessionUncheckedCreateInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: string | null
  }

  export type DiscordSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    discordAccountLink?: DiscordAccountLinkUpdateOneWithoutSessionsNestedInput
  }

  export type DiscordSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    discordAccountLinkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordSessionCreateManyInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
    discordAccountLinkId?: string | null
  }

  export type DiscordSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    discordAccountLinkId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationMethodsCreateInput = {
    id?: string
    studentProfile: StudentProfileCreateNestedOneWithoutVerificationMethodsInput
    emailVerification?: EmailVerificationCreateNestedManyWithoutVerificationMethodsInput
  }

  export type VerificationMethodsUncheckedCreateInput = {
    id?: string
    studentProfileId: string
    emailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutVerificationMethodsInput
  }

  export type VerificationMethodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutVerificationMethodsNestedInput
    emailVerification?: EmailVerificationUpdateManyWithoutVerificationMethodsNestedInput
  }

  export type VerificationMethodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
    emailVerification?: EmailVerificationUncheckedUpdateManyWithoutVerificationMethodsNestedInput
  }

  export type VerificationMethodsCreateManyInput = {
    id?: string
    studentProfileId: string
  }

  export type VerificationMethodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationMethodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationCreateInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    verificationMethods?: VerificationMethodsCreateNestedOneWithoutEmailVerificationInput
  }

  export type EmailVerificationUncheckedCreateInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    verificationMethodsId?: string | null
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationMethods?: VerificationMethodsUpdateOneWithoutEmailVerificationNestedInput
  }

  export type EmailVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationMethodsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    verificationMethodsId?: string | null
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationMethodsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationMethods?: VerificationMethodsCreateNestedManyWithoutStudentProfileInput
    linkedAccounts?: LinkedAccountsCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationMethods?: VerificationMethodsUncheckedCreateNestedManyWithoutStudentProfileInput
    linkedAccounts?: LinkedAccountsUncheckedCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationMethods?: VerificationMethodsUpdateManyWithoutStudentProfileNestedInput
    linkedAccounts?: LinkedAccountsUpdateOneWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationMethods?: VerificationMethodsUncheckedUpdateManyWithoutStudentProfileNestedInput
    linkedAccounts?: LinkedAccountsUncheckedUpdateOneWithoutStudentProfileNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    language?: string
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    language?: string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    language?: string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
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

  export type LinkedPlatformsNullableScalarRelationFilter = {
    is?: LinkedPlatformsWhereInput | null
    isNot?: LinkedPlatformsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DiscordGuildNullableScalarRelationFilter = {
    is?: DiscordGuildWhereInput | null
    isNot?: DiscordGuildWhereInput | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type LinkedPlatformsCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type LinkedPlatformsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type LinkedPlatformsMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type DiscordGuildMemberListRelationFilter = {
    every?: DiscordGuildMemberWhereInput
    some?: DiscordGuildMemberWhereInput
    none?: DiscordGuildMemberWhereInput
  }

  export type DiscordGuildMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordGuildCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    linkedToId?: SortOrder
  }

  export type DiscordGuildMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    linkedToId?: SortOrder
  }

  export type DiscordGuildMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    linkedToId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DiscordGuildScalarRelationFilter = {
    is?: DiscordGuildWhereInput
    isNot?: DiscordGuildWhereInput
  }

  export type DiscordAccountLinkScalarRelationFilter = {
    is?: DiscordAccountLinkWhereInput
    isNot?: DiscordAccountLinkWhereInput
  }

  export type DiscordGuildMessageListRelationFilter = {
    every?: DiscordGuildMessageWhereInput
    some?: DiscordGuildMessageWhereInput
    none?: DiscordGuildMessageWhereInput
  }

  export type DiscordGuildMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordGuildMemberDiscordGuildIdDiscordAccountLinkIdCompoundUniqueInput = {
    discordGuildId: string
    discordAccountLinkId: string
  }

  export type DiscordGuildMemberCountOrderByAggregateInput = {
    id?: SortOrder
    discordGuildId?: SortOrder
    discordAccountLinkId?: SortOrder
    isOwner?: SortOrder
    joinedAt?: SortOrder
  }

  export type DiscordGuildMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    discordGuildId?: SortOrder
    discordAccountLinkId?: SortOrder
    isOwner?: SortOrder
    joinedAt?: SortOrder
  }

  export type DiscordGuildMemberMinOrderByAggregateInput = {
    id?: SortOrder
    discordGuildId?: SortOrder
    discordAccountLinkId?: SortOrder
    isOwner?: SortOrder
    joinedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DiscordGuildMessageNullableScalarRelationFilter = {
    is?: DiscordGuildMessageWhereInput | null
    isNot?: DiscordGuildMessageWhereInput | null
  }

  export type DiscordGuildMemberNullableScalarRelationFilter = {
    is?: DiscordGuildMemberWhereInput | null
    isNot?: DiscordGuildMemberWhereInput | null
  }

  export type DiscordGuildMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscordGuildMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscordGuildMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    parentMessageId?: SortOrder
    userId?: SortOrder
    attachmentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type DiscordAccountLinkNullableScalarRelationFilter = {
    is?: DiscordAccountLinkWhereInput | null
    isNot?: DiscordAccountLinkWhereInput | null
  }

  export type LinkedAccountsCountOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type LinkedAccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type LinkedAccountsMinOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type LinkedAccountsNullableScalarRelationFilter = {
    is?: LinkedAccountsWhereInput | null
    isNot?: LinkedAccountsWhereInput | null
  }

  export type DiscordSessionListRelationFilter = {
    every?: DiscordSessionWhereInput
    some?: DiscordSessionWhereInput
    none?: DiscordSessionWhereInput
  }

  export type DiscordSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscordAccountLinkCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    linkedAccountsId?: SortOrder
  }

  export type DiscordAccountLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    linkedAccountsId?: SortOrder
  }

  export type DiscordAccountLinkMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    linkedAccountsId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DiscordSessionCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    escalationSecret?: SortOrder
    isAuthenticated?: SortOrder
    isRevoked?: SortOrder
    discordAccountLinkId?: SortOrder
  }

  export type DiscordSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    escalationSecret?: SortOrder
    isAuthenticated?: SortOrder
    isRevoked?: SortOrder
    discordAccountLinkId?: SortOrder
  }

  export type DiscordSessionMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiry?: SortOrder
    escalationSecret?: SortOrder
    isAuthenticated?: SortOrder
    isRevoked?: SortOrder
    discordAccountLinkId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmailVerificationListRelationFilter = {
    every?: EmailVerificationWhereInput
    some?: EmailVerificationWhereInput
    none?: EmailVerificationWhereInput
  }

  export type EmailVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationMethodsCountOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type VerificationMethodsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type VerificationMethodsMinOrderByAggregateInput = {
    id?: SortOrder
    studentProfileId?: SortOrder
  }

  export type VerificationMethodsNullableScalarRelationFilter = {
    is?: VerificationMethodsWhereInput | null
    isNot?: VerificationMethodsWhereInput | null
  }

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    emailAddress?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    expiresAt?: SortOrder
    verificationMethodsId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    emailAddress?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    expiresAt?: SortOrder
    verificationMethodsId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    emailAddress?: SortOrder
    verificationCode?: SortOrder
    isVerified?: SortOrder
    expiresAt?: SortOrder
    verificationMethodsId?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMethodsListRelationFilter = {
    every?: VerificationMethodsWhereInput
    some?: VerificationMethodsWhereInput
    none?: VerificationMethodsWhereInput
  }

  export type VerificationMethodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    studentId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
  }

  export type LinkedPlatformsCreateNestedOneWithoutTenantInput = {
    create?: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutTenantInput
    connect?: LinkedPlatformsWhereUniqueInput
  }

  export type LinkedPlatformsUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutTenantInput
    connect?: LinkedPlatformsWhereUniqueInput
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

  export type LinkedPlatformsUpdateOneWithoutTenantNestedInput = {
    create?: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutTenantInput
    upsert?: LinkedPlatformsUpsertWithoutTenantInput
    disconnect?: LinkedPlatformsWhereInput | boolean
    delete?: LinkedPlatformsWhereInput | boolean
    connect?: LinkedPlatformsWhereUniqueInput
    update?: XOR<XOR<LinkedPlatformsUpdateToOneWithWhereWithoutTenantInput, LinkedPlatformsUpdateWithoutTenantInput>, LinkedPlatformsUncheckedUpdateWithoutTenantInput>
  }

  export type LinkedPlatformsUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutTenantInput
    upsert?: LinkedPlatformsUpsertWithoutTenantInput
    disconnect?: LinkedPlatformsWhereInput | boolean
    delete?: LinkedPlatformsWhereInput | boolean
    connect?: LinkedPlatformsWhereUniqueInput
    update?: XOR<XOR<LinkedPlatformsUpdateToOneWithWhereWithoutTenantInput, LinkedPlatformsUpdateWithoutTenantInput>, LinkedPlatformsUncheckedUpdateWithoutTenantInput>
  }

  export type DiscordGuildCreateNestedOneWithoutLinkedToInput = {
    create?: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutLinkedToInput
    connect?: DiscordGuildWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLinkedPlatformsInput = {
    create?: XOR<TenantCreateWithoutLinkedPlatformsInput, TenantUncheckedCreateWithoutLinkedPlatformsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLinkedPlatformsInput
    connect?: TenantWhereUniqueInput
  }

  export type DiscordGuildUncheckedCreateNestedOneWithoutLinkedToInput = {
    create?: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutLinkedToInput
    connect?: DiscordGuildWhereUniqueInput
  }

  export type DiscordGuildUpdateOneWithoutLinkedToNestedInput = {
    create?: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutLinkedToInput
    upsert?: DiscordGuildUpsertWithoutLinkedToInput
    disconnect?: DiscordGuildWhereInput | boolean
    delete?: DiscordGuildWhereInput | boolean
    connect?: DiscordGuildWhereUniqueInput
    update?: XOR<XOR<DiscordGuildUpdateToOneWithWhereWithoutLinkedToInput, DiscordGuildUpdateWithoutLinkedToInput>, DiscordGuildUncheckedUpdateWithoutLinkedToInput>
  }

  export type TenantUpdateOneRequiredWithoutLinkedPlatformsNestedInput = {
    create?: XOR<TenantCreateWithoutLinkedPlatformsInput, TenantUncheckedCreateWithoutLinkedPlatformsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLinkedPlatformsInput
    upsert?: TenantUpsertWithoutLinkedPlatformsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLinkedPlatformsInput, TenantUpdateWithoutLinkedPlatformsInput>, TenantUncheckedUpdateWithoutLinkedPlatformsInput>
  }

  export type DiscordGuildUncheckedUpdateOneWithoutLinkedToNestedInput = {
    create?: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutLinkedToInput
    upsert?: DiscordGuildUpsertWithoutLinkedToInput
    disconnect?: DiscordGuildWhereInput | boolean
    delete?: DiscordGuildWhereInput | boolean
    connect?: DiscordGuildWhereUniqueInput
    update?: XOR<XOR<DiscordGuildUpdateToOneWithWhereWithoutLinkedToInput, DiscordGuildUpdateWithoutLinkedToInput>, DiscordGuildUncheckedUpdateWithoutLinkedToInput>
  }

  export type DiscordGuildMemberCreateNestedManyWithoutDiscordGuildInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput> | DiscordGuildMemberCreateWithoutDiscordGuildInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput | DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordGuildInputEnvelope
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
  }

  export type LinkedPlatformsCreateNestedOneWithoutDiscordGuildInput = {
    create?: XOR<LinkedPlatformsCreateWithoutDiscordGuildInput, LinkedPlatformsUncheckedCreateWithoutDiscordGuildInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutDiscordGuildInput
    connect?: LinkedPlatformsWhereUniqueInput
  }

  export type DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordGuildInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput> | DiscordGuildMemberCreateWithoutDiscordGuildInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput | DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordGuildInputEnvelope
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
  }

  export type DiscordGuildMemberUpdateManyWithoutDiscordGuildNestedInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput> | DiscordGuildMemberCreateWithoutDiscordGuildInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput | DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput[]
    upsert?: DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordGuildInput | DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordGuildInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordGuildInputEnvelope
    set?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    disconnect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    delete?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    update?: DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordGuildInput | DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordGuildInput[]
    updateMany?: DiscordGuildMemberUpdateManyWithWhereWithoutDiscordGuildInput | DiscordGuildMemberUpdateManyWithWhereWithoutDiscordGuildInput[]
    deleteMany?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
  }

  export type LinkedPlatformsUpdateOneWithoutDiscordGuildNestedInput = {
    create?: XOR<LinkedPlatformsCreateWithoutDiscordGuildInput, LinkedPlatformsUncheckedCreateWithoutDiscordGuildInput>
    connectOrCreate?: LinkedPlatformsCreateOrConnectWithoutDiscordGuildInput
    upsert?: LinkedPlatformsUpsertWithoutDiscordGuildInput
    disconnect?: LinkedPlatformsWhereInput | boolean
    delete?: LinkedPlatformsWhereInput | boolean
    connect?: LinkedPlatformsWhereUniqueInput
    update?: XOR<XOR<LinkedPlatformsUpdateToOneWithWhereWithoutDiscordGuildInput, LinkedPlatformsUpdateWithoutDiscordGuildInput>, LinkedPlatformsUncheckedUpdateWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberUncheckedUpdateManyWithoutDiscordGuildNestedInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput> | DiscordGuildMemberCreateWithoutDiscordGuildInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput | DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput[]
    upsert?: DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordGuildInput | DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordGuildInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordGuildInputEnvelope
    set?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    disconnect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    delete?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    update?: DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordGuildInput | DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordGuildInput[]
    updateMany?: DiscordGuildMemberUpdateManyWithWhereWithoutDiscordGuildInput | DiscordGuildMemberUpdateManyWithWhereWithoutDiscordGuildInput[]
    deleteMany?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
  }

  export type DiscordGuildCreateNestedOneWithoutGuildMembersInput = {
    create?: XOR<DiscordGuildCreateWithoutGuildMembersInput, DiscordGuildUncheckedCreateWithoutGuildMembersInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutGuildMembersInput
    connect?: DiscordGuildWhereUniqueInput
  }

  export type DiscordAccountLinkCreateNestedOneWithoutGuildsInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutGuildsInput, DiscordAccountLinkUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutGuildsInput
    connect?: DiscordAccountLinkWhereUniqueInput
  }

  export type DiscordGuildMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput> | DiscordGuildMessageCreateWithoutUserInput[] | DiscordGuildMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutUserInput | DiscordGuildMessageCreateOrConnectWithoutUserInput[]
    createMany?: DiscordGuildMessageCreateManyUserInputEnvelope
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
  }

  export type DiscordGuildMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput> | DiscordGuildMessageCreateWithoutUserInput[] | DiscordGuildMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutUserInput | DiscordGuildMessageCreateOrConnectWithoutUserInput[]
    createMany?: DiscordGuildMessageCreateManyUserInputEnvelope
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DiscordGuildUpdateOneRequiredWithoutGuildMembersNestedInput = {
    create?: XOR<DiscordGuildCreateWithoutGuildMembersInput, DiscordGuildUncheckedCreateWithoutGuildMembersInput>
    connectOrCreate?: DiscordGuildCreateOrConnectWithoutGuildMembersInput
    upsert?: DiscordGuildUpsertWithoutGuildMembersInput
    connect?: DiscordGuildWhereUniqueInput
    update?: XOR<XOR<DiscordGuildUpdateToOneWithWhereWithoutGuildMembersInput, DiscordGuildUpdateWithoutGuildMembersInput>, DiscordGuildUncheckedUpdateWithoutGuildMembersInput>
  }

  export type DiscordAccountLinkUpdateOneRequiredWithoutGuildsNestedInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutGuildsInput, DiscordAccountLinkUncheckedCreateWithoutGuildsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutGuildsInput
    upsert?: DiscordAccountLinkUpsertWithoutGuildsInput
    connect?: DiscordAccountLinkWhereUniqueInput
    update?: XOR<XOR<DiscordAccountLinkUpdateToOneWithWhereWithoutGuildsInput, DiscordAccountLinkUpdateWithoutGuildsInput>, DiscordAccountLinkUncheckedUpdateWithoutGuildsInput>
  }

  export type DiscordGuildMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput> | DiscordGuildMessageCreateWithoutUserInput[] | DiscordGuildMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutUserInput | DiscordGuildMessageCreateOrConnectWithoutUserInput[]
    upsert?: DiscordGuildMessageUpsertWithWhereUniqueWithoutUserInput | DiscordGuildMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscordGuildMessageCreateManyUserInputEnvelope
    set?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    disconnect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    delete?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    update?: DiscordGuildMessageUpdateWithWhereUniqueWithoutUserInput | DiscordGuildMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscordGuildMessageUpdateManyWithWhereWithoutUserInput | DiscordGuildMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
  }

  export type DiscordGuildMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput> | DiscordGuildMessageCreateWithoutUserInput[] | DiscordGuildMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutUserInput | DiscordGuildMessageCreateOrConnectWithoutUserInput[]
    upsert?: DiscordGuildMessageUpsertWithWhereUniqueWithoutUserInput | DiscordGuildMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscordGuildMessageCreateManyUserInputEnvelope
    set?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    disconnect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    delete?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    update?: DiscordGuildMessageUpdateWithWhereUniqueWithoutUserInput | DiscordGuildMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscordGuildMessageUpdateManyWithWhereWithoutUserInput | DiscordGuildMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
  }

  export type DiscordGuildMessageCreateNestedManyWithoutParentMessageInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput> | DiscordGuildMessageCreateWithoutParentMessageInput[] | DiscordGuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutParentMessageInput | DiscordGuildMessageCreateOrConnectWithoutParentMessageInput[]
    createMany?: DiscordGuildMessageCreateManyParentMessageInputEnvelope
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
  }

  export type DiscordGuildMessageCreateNestedOneWithoutMentionsInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutMentionsInput, DiscordGuildMessageUncheckedCreateWithoutMentionsInput>
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutMentionsInput
    connect?: DiscordGuildMessageWhereUniqueInput
  }

  export type DiscordGuildMemberCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutMessagesInput, DiscordGuildMemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutMessagesInput
    connect?: DiscordGuildMemberWhereUniqueInput
  }

  export type DiscordGuildMessageUncheckedCreateNestedManyWithoutParentMessageInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput> | DiscordGuildMessageCreateWithoutParentMessageInput[] | DiscordGuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutParentMessageInput | DiscordGuildMessageCreateOrConnectWithoutParentMessageInput[]
    createMany?: DiscordGuildMessageCreateManyParentMessageInputEnvelope
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
  }

  export type DiscordGuildMessageUpdateManyWithoutParentMessageNestedInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput> | DiscordGuildMessageCreateWithoutParentMessageInput[] | DiscordGuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutParentMessageInput | DiscordGuildMessageCreateOrConnectWithoutParentMessageInput[]
    upsert?: DiscordGuildMessageUpsertWithWhereUniqueWithoutParentMessageInput | DiscordGuildMessageUpsertWithWhereUniqueWithoutParentMessageInput[]
    createMany?: DiscordGuildMessageCreateManyParentMessageInputEnvelope
    set?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    disconnect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    delete?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    update?: DiscordGuildMessageUpdateWithWhereUniqueWithoutParentMessageInput | DiscordGuildMessageUpdateWithWhereUniqueWithoutParentMessageInput[]
    updateMany?: DiscordGuildMessageUpdateManyWithWhereWithoutParentMessageInput | DiscordGuildMessageUpdateManyWithWhereWithoutParentMessageInput[]
    deleteMany?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
  }

  export type DiscordGuildMessageUpdateOneWithoutMentionsNestedInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutMentionsInput, DiscordGuildMessageUncheckedCreateWithoutMentionsInput>
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutMentionsInput
    upsert?: DiscordGuildMessageUpsertWithoutMentionsInput
    disconnect?: DiscordGuildMessageWhereInput | boolean
    delete?: DiscordGuildMessageWhereInput | boolean
    connect?: DiscordGuildMessageWhereUniqueInput
    update?: XOR<XOR<DiscordGuildMessageUpdateToOneWithWhereWithoutMentionsInput, DiscordGuildMessageUpdateWithoutMentionsInput>, DiscordGuildMessageUncheckedUpdateWithoutMentionsInput>
  }

  export type DiscordGuildMemberUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutMessagesInput, DiscordGuildMemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutMessagesInput
    upsert?: DiscordGuildMemberUpsertWithoutMessagesInput
    disconnect?: DiscordGuildMemberWhereInput | boolean
    delete?: DiscordGuildMemberWhereInput | boolean
    connect?: DiscordGuildMemberWhereUniqueInput
    update?: XOR<XOR<DiscordGuildMemberUpdateToOneWithWhereWithoutMessagesInput, DiscordGuildMemberUpdateWithoutMessagesInput>, DiscordGuildMemberUncheckedUpdateWithoutMessagesInput>
  }

  export type DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput = {
    create?: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput> | DiscordGuildMessageCreateWithoutParentMessageInput[] | DiscordGuildMessageUncheckedCreateWithoutParentMessageInput[]
    connectOrCreate?: DiscordGuildMessageCreateOrConnectWithoutParentMessageInput | DiscordGuildMessageCreateOrConnectWithoutParentMessageInput[]
    upsert?: DiscordGuildMessageUpsertWithWhereUniqueWithoutParentMessageInput | DiscordGuildMessageUpsertWithWhereUniqueWithoutParentMessageInput[]
    createMany?: DiscordGuildMessageCreateManyParentMessageInputEnvelope
    set?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    disconnect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    delete?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    connect?: DiscordGuildMessageWhereUniqueInput | DiscordGuildMessageWhereUniqueInput[]
    update?: DiscordGuildMessageUpdateWithWhereUniqueWithoutParentMessageInput | DiscordGuildMessageUpdateWithWhereUniqueWithoutParentMessageInput[]
    updateMany?: DiscordGuildMessageUpdateManyWithWhereWithoutParentMessageInput | DiscordGuildMessageUpdateManyWithWhereWithoutParentMessageInput[]
    deleteMany?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
  }

  export type StudentProfileCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<StudentProfileCreateWithoutLinkedAccountsInput, StudentProfileUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutLinkedAccountsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type DiscordAccountLinkCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutLinkedAccountsInput
    connect?: DiscordAccountLinkWhereUniqueInput
  }

  export type DiscordAccountLinkUncheckedCreateNestedOneWithoutLinkedAccountsInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutLinkedAccountsInput
    connect?: DiscordAccountLinkWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutLinkedAccountsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutLinkedAccountsInput, StudentProfileUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutLinkedAccountsInput
    upsert?: StudentProfileUpsertWithoutLinkedAccountsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutLinkedAccountsInput, StudentProfileUpdateWithoutLinkedAccountsInput>, StudentProfileUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type DiscordAccountLinkUpdateOneWithoutLinkedAccountsNestedInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutLinkedAccountsInput
    upsert?: DiscordAccountLinkUpsertWithoutLinkedAccountsInput
    disconnect?: DiscordAccountLinkWhereInput | boolean
    delete?: DiscordAccountLinkWhereInput | boolean
    connect?: DiscordAccountLinkWhereUniqueInput
    update?: XOR<XOR<DiscordAccountLinkUpdateToOneWithWhereWithoutLinkedAccountsInput, DiscordAccountLinkUpdateWithoutLinkedAccountsInput>, DiscordAccountLinkUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type DiscordAccountLinkUncheckedUpdateOneWithoutLinkedAccountsNestedInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutLinkedAccountsInput
    upsert?: DiscordAccountLinkUpsertWithoutLinkedAccountsInput
    disconnect?: DiscordAccountLinkWhereInput | boolean
    delete?: DiscordAccountLinkWhereInput | boolean
    connect?: DiscordAccountLinkWhereUniqueInput
    update?: XOR<XOR<DiscordAccountLinkUpdateToOneWithWhereWithoutLinkedAccountsInput, DiscordAccountLinkUpdateWithoutLinkedAccountsInput>, DiscordAccountLinkUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type LinkedAccountsCreateNestedOneWithoutDiscordInput = {
    create?: XOR<LinkedAccountsCreateWithoutDiscordInput, LinkedAccountsUncheckedCreateWithoutDiscordInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutDiscordInput
    connect?: LinkedAccountsWhereUniqueInput
  }

  export type DiscordSessionCreateNestedManyWithoutDiscordAccountLinkInput = {
    create?: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput> | DiscordSessionCreateWithoutDiscordAccountLinkInput[] | DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput[]
    connectOrCreate?: DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput | DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput[]
    createMany?: DiscordSessionCreateManyDiscordAccountLinkInputEnvelope
    connect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
  }

  export type DiscordGuildMemberCreateNestedManyWithoutDiscordInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput> | DiscordGuildMemberCreateWithoutDiscordInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordInput | DiscordGuildMemberCreateOrConnectWithoutDiscordInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordInputEnvelope
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
  }

  export type DiscordSessionUncheckedCreateNestedManyWithoutDiscordAccountLinkInput = {
    create?: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput> | DiscordSessionCreateWithoutDiscordAccountLinkInput[] | DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput[]
    connectOrCreate?: DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput | DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput[]
    createMany?: DiscordSessionCreateManyDiscordAccountLinkInputEnvelope
    connect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
  }

  export type DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput> | DiscordGuildMemberCreateWithoutDiscordInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordInput | DiscordGuildMemberCreateOrConnectWithoutDiscordInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordInputEnvelope
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
  }

  export type LinkedAccountsUpdateOneWithoutDiscordNestedInput = {
    create?: XOR<LinkedAccountsCreateWithoutDiscordInput, LinkedAccountsUncheckedCreateWithoutDiscordInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutDiscordInput
    upsert?: LinkedAccountsUpsertWithoutDiscordInput
    disconnect?: LinkedAccountsWhereInput | boolean
    delete?: LinkedAccountsWhereInput | boolean
    connect?: LinkedAccountsWhereUniqueInput
    update?: XOR<XOR<LinkedAccountsUpdateToOneWithWhereWithoutDiscordInput, LinkedAccountsUpdateWithoutDiscordInput>, LinkedAccountsUncheckedUpdateWithoutDiscordInput>
  }

  export type DiscordSessionUpdateManyWithoutDiscordAccountLinkNestedInput = {
    create?: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput> | DiscordSessionCreateWithoutDiscordAccountLinkInput[] | DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput[]
    connectOrCreate?: DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput | DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput[]
    upsert?: DiscordSessionUpsertWithWhereUniqueWithoutDiscordAccountLinkInput | DiscordSessionUpsertWithWhereUniqueWithoutDiscordAccountLinkInput[]
    createMany?: DiscordSessionCreateManyDiscordAccountLinkInputEnvelope
    set?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    disconnect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    delete?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    connect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    update?: DiscordSessionUpdateWithWhereUniqueWithoutDiscordAccountLinkInput | DiscordSessionUpdateWithWhereUniqueWithoutDiscordAccountLinkInput[]
    updateMany?: DiscordSessionUpdateManyWithWhereWithoutDiscordAccountLinkInput | DiscordSessionUpdateManyWithWhereWithoutDiscordAccountLinkInput[]
    deleteMany?: DiscordSessionScalarWhereInput | DiscordSessionScalarWhereInput[]
  }

  export type DiscordGuildMemberUpdateManyWithoutDiscordNestedInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput> | DiscordGuildMemberCreateWithoutDiscordInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordInput | DiscordGuildMemberCreateOrConnectWithoutDiscordInput[]
    upsert?: DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordInput | DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordInputEnvelope
    set?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    disconnect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    delete?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    update?: DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordInput | DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordInput[]
    updateMany?: DiscordGuildMemberUpdateManyWithWhereWithoutDiscordInput | DiscordGuildMemberUpdateManyWithWhereWithoutDiscordInput[]
    deleteMany?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
  }

  export type DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkNestedInput = {
    create?: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput> | DiscordSessionCreateWithoutDiscordAccountLinkInput[] | DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput[]
    connectOrCreate?: DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput | DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput[]
    upsert?: DiscordSessionUpsertWithWhereUniqueWithoutDiscordAccountLinkInput | DiscordSessionUpsertWithWhereUniqueWithoutDiscordAccountLinkInput[]
    createMany?: DiscordSessionCreateManyDiscordAccountLinkInputEnvelope
    set?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    disconnect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    delete?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    connect?: DiscordSessionWhereUniqueInput | DiscordSessionWhereUniqueInput[]
    update?: DiscordSessionUpdateWithWhereUniqueWithoutDiscordAccountLinkInput | DiscordSessionUpdateWithWhereUniqueWithoutDiscordAccountLinkInput[]
    updateMany?: DiscordSessionUpdateManyWithWhereWithoutDiscordAccountLinkInput | DiscordSessionUpdateManyWithWhereWithoutDiscordAccountLinkInput[]
    deleteMany?: DiscordSessionScalarWhereInput | DiscordSessionScalarWhereInput[]
  }

  export type DiscordGuildMemberUncheckedUpdateManyWithoutDiscordNestedInput = {
    create?: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput> | DiscordGuildMemberCreateWithoutDiscordInput[] | DiscordGuildMemberUncheckedCreateWithoutDiscordInput[]
    connectOrCreate?: DiscordGuildMemberCreateOrConnectWithoutDiscordInput | DiscordGuildMemberCreateOrConnectWithoutDiscordInput[]
    upsert?: DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordInput | DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordInput[]
    createMany?: DiscordGuildMemberCreateManyDiscordInputEnvelope
    set?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    disconnect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    delete?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    connect?: DiscordGuildMemberWhereUniqueInput | DiscordGuildMemberWhereUniqueInput[]
    update?: DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordInput | DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordInput[]
    updateMany?: DiscordGuildMemberUpdateManyWithWhereWithoutDiscordInput | DiscordGuildMemberUpdateManyWithWhereWithoutDiscordInput[]
    deleteMany?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
  }

  export type DiscordAccountLinkCreateNestedOneWithoutSessionsInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutSessionsInput, DiscordAccountLinkUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutSessionsInput
    connect?: DiscordAccountLinkWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DiscordAccountLinkUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<DiscordAccountLinkCreateWithoutSessionsInput, DiscordAccountLinkUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DiscordAccountLinkCreateOrConnectWithoutSessionsInput
    upsert?: DiscordAccountLinkUpsertWithoutSessionsInput
    disconnect?: DiscordAccountLinkWhereInput | boolean
    delete?: DiscordAccountLinkWhereInput | boolean
    connect?: DiscordAccountLinkWhereUniqueInput
    update?: XOR<XOR<DiscordAccountLinkUpdateToOneWithWhereWithoutSessionsInput, DiscordAccountLinkUpdateWithoutSessionsInput>, DiscordAccountLinkUncheckedUpdateWithoutSessionsInput>
  }

  export type StudentProfileCreateNestedOneWithoutVerificationMethodsInput = {
    create?: XOR<StudentProfileCreateWithoutVerificationMethodsInput, StudentProfileUncheckedCreateWithoutVerificationMethodsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutVerificationMethodsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type EmailVerificationCreateNestedManyWithoutVerificationMethodsInput = {
    create?: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput> | EmailVerificationCreateWithoutVerificationMethodsInput[] | EmailVerificationUncheckedCreateWithoutVerificationMethodsInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutVerificationMethodsInput | EmailVerificationCreateOrConnectWithoutVerificationMethodsInput[]
    createMany?: EmailVerificationCreateManyVerificationMethodsInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }

  export type EmailVerificationUncheckedCreateNestedManyWithoutVerificationMethodsInput = {
    create?: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput> | EmailVerificationCreateWithoutVerificationMethodsInput[] | EmailVerificationUncheckedCreateWithoutVerificationMethodsInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutVerificationMethodsInput | EmailVerificationCreateOrConnectWithoutVerificationMethodsInput[]
    createMany?: EmailVerificationCreateManyVerificationMethodsInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }

  export type StudentProfileUpdateOneRequiredWithoutVerificationMethodsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutVerificationMethodsInput, StudentProfileUncheckedCreateWithoutVerificationMethodsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutVerificationMethodsInput
    upsert?: StudentProfileUpsertWithoutVerificationMethodsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutVerificationMethodsInput, StudentProfileUpdateWithoutVerificationMethodsInput>, StudentProfileUncheckedUpdateWithoutVerificationMethodsInput>
  }

  export type EmailVerificationUpdateManyWithoutVerificationMethodsNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput> | EmailVerificationCreateWithoutVerificationMethodsInput[] | EmailVerificationUncheckedCreateWithoutVerificationMethodsInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutVerificationMethodsInput | EmailVerificationCreateOrConnectWithoutVerificationMethodsInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutVerificationMethodsInput | EmailVerificationUpsertWithWhereUniqueWithoutVerificationMethodsInput[]
    createMany?: EmailVerificationCreateManyVerificationMethodsInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutVerificationMethodsInput | EmailVerificationUpdateWithWhereUniqueWithoutVerificationMethodsInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutVerificationMethodsInput | EmailVerificationUpdateManyWithWhereWithoutVerificationMethodsInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }

  export type EmailVerificationUncheckedUpdateManyWithoutVerificationMethodsNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput> | EmailVerificationCreateWithoutVerificationMethodsInput[] | EmailVerificationUncheckedCreateWithoutVerificationMethodsInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutVerificationMethodsInput | EmailVerificationCreateOrConnectWithoutVerificationMethodsInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutVerificationMethodsInput | EmailVerificationUpsertWithWhereUniqueWithoutVerificationMethodsInput[]
    createMany?: EmailVerificationCreateManyVerificationMethodsInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutVerificationMethodsInput | EmailVerificationUpdateWithWhereUniqueWithoutVerificationMethodsInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutVerificationMethodsInput | EmailVerificationUpdateManyWithWhereWithoutVerificationMethodsInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }

  export type VerificationMethodsCreateNestedOneWithoutEmailVerificationInput = {
    create?: XOR<VerificationMethodsCreateWithoutEmailVerificationInput, VerificationMethodsUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutEmailVerificationInput
    connect?: VerificationMethodsWhereUniqueInput
  }

  export type VerificationMethodsUpdateOneWithoutEmailVerificationNestedInput = {
    create?: XOR<VerificationMethodsCreateWithoutEmailVerificationInput, VerificationMethodsUncheckedCreateWithoutEmailVerificationInput>
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutEmailVerificationInput
    upsert?: VerificationMethodsUpsertWithoutEmailVerificationInput
    disconnect?: VerificationMethodsWhereInput | boolean
    delete?: VerificationMethodsWhereInput | boolean
    connect?: VerificationMethodsWhereUniqueInput
    update?: XOR<XOR<VerificationMethodsUpdateToOneWithWhereWithoutEmailVerificationInput, VerificationMethodsUpdateWithoutEmailVerificationInput>, VerificationMethodsUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type VerificationMethodsCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput> | VerificationMethodsCreateWithoutStudentProfileInput[] | VerificationMethodsUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutStudentProfileInput | VerificationMethodsCreateOrConnectWithoutStudentProfileInput[]
    createMany?: VerificationMethodsCreateManyStudentProfileInputEnvelope
    connect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
  }

  export type LinkedAccountsCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutStudentProfileInput
    connect?: LinkedAccountsWhereUniqueInput
  }

  export type VerificationMethodsUncheckedCreateNestedManyWithoutStudentProfileInput = {
    create?: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput> | VerificationMethodsCreateWithoutStudentProfileInput[] | VerificationMethodsUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutStudentProfileInput | VerificationMethodsCreateOrConnectWithoutStudentProfileInput[]
    createMany?: VerificationMethodsCreateManyStudentProfileInputEnvelope
    connect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
  }

  export type LinkedAccountsUncheckedCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutStudentProfileInput
    connect?: LinkedAccountsWhereUniqueInput
  }

  export type VerificationMethodsUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput> | VerificationMethodsCreateWithoutStudentProfileInput[] | VerificationMethodsUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutStudentProfileInput | VerificationMethodsCreateOrConnectWithoutStudentProfileInput[]
    upsert?: VerificationMethodsUpsertWithWhereUniqueWithoutStudentProfileInput | VerificationMethodsUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: VerificationMethodsCreateManyStudentProfileInputEnvelope
    set?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    disconnect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    delete?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    connect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    update?: VerificationMethodsUpdateWithWhereUniqueWithoutStudentProfileInput | VerificationMethodsUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: VerificationMethodsUpdateManyWithWhereWithoutStudentProfileInput | VerificationMethodsUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: VerificationMethodsScalarWhereInput | VerificationMethodsScalarWhereInput[]
  }

  export type LinkedAccountsUpdateOneWithoutStudentProfileNestedInput = {
    create?: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutStudentProfileInput
    upsert?: LinkedAccountsUpsertWithoutStudentProfileInput
    disconnect?: LinkedAccountsWhereInput | boolean
    delete?: LinkedAccountsWhereInput | boolean
    connect?: LinkedAccountsWhereUniqueInput
    update?: XOR<XOR<LinkedAccountsUpdateToOneWithWhereWithoutStudentProfileInput, LinkedAccountsUpdateWithoutStudentProfileInput>, LinkedAccountsUncheckedUpdateWithoutStudentProfileInput>
  }

  export type VerificationMethodsUncheckedUpdateManyWithoutStudentProfileNestedInput = {
    create?: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput> | VerificationMethodsCreateWithoutStudentProfileInput[] | VerificationMethodsUncheckedCreateWithoutStudentProfileInput[]
    connectOrCreate?: VerificationMethodsCreateOrConnectWithoutStudentProfileInput | VerificationMethodsCreateOrConnectWithoutStudentProfileInput[]
    upsert?: VerificationMethodsUpsertWithWhereUniqueWithoutStudentProfileInput | VerificationMethodsUpsertWithWhereUniqueWithoutStudentProfileInput[]
    createMany?: VerificationMethodsCreateManyStudentProfileInputEnvelope
    set?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    disconnect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    delete?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    connect?: VerificationMethodsWhereUniqueInput | VerificationMethodsWhereUniqueInput[]
    update?: VerificationMethodsUpdateWithWhereUniqueWithoutStudentProfileInput | VerificationMethodsUpdateWithWhereUniqueWithoutStudentProfileInput[]
    updateMany?: VerificationMethodsUpdateManyWithWhereWithoutStudentProfileInput | VerificationMethodsUpdateManyWithWhereWithoutStudentProfileInput[]
    deleteMany?: VerificationMethodsScalarWhereInput | VerificationMethodsScalarWhereInput[]
  }

  export type LinkedAccountsUncheckedUpdateOneWithoutStudentProfileNestedInput = {
    create?: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: LinkedAccountsCreateOrConnectWithoutStudentProfileInput
    upsert?: LinkedAccountsUpsertWithoutStudentProfileInput
    disconnect?: LinkedAccountsWhereInput | boolean
    delete?: LinkedAccountsWhereInput | boolean
    connect?: LinkedAccountsWhereUniqueInput
    update?: XOR<XOR<LinkedAccountsUpdateToOneWithWhereWithoutStudentProfileInput, LinkedAccountsUpdateWithoutStudentProfileInput>, LinkedAccountsUncheckedUpdateWithoutStudentProfileInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LinkedPlatformsCreateWithoutTenantInput = {
    id?: string
    discordGuild?: DiscordGuildCreateNestedOneWithoutLinkedToInput
  }

  export type LinkedPlatformsUncheckedCreateWithoutTenantInput = {
    id?: string
    discordGuild?: DiscordGuildUncheckedCreateNestedOneWithoutLinkedToInput
  }

  export type LinkedPlatformsCreateOrConnectWithoutTenantInput = {
    where: LinkedPlatformsWhereUniqueInput
    create: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
  }

  export type LinkedPlatformsUpsertWithoutTenantInput = {
    update: XOR<LinkedPlatformsUpdateWithoutTenantInput, LinkedPlatformsUncheckedUpdateWithoutTenantInput>
    create: XOR<LinkedPlatformsCreateWithoutTenantInput, LinkedPlatformsUncheckedCreateWithoutTenantInput>
    where?: LinkedPlatformsWhereInput
  }

  export type LinkedPlatformsUpdateToOneWithWhereWithoutTenantInput = {
    where?: LinkedPlatformsWhereInput
    data: XOR<LinkedPlatformsUpdateWithoutTenantInput, LinkedPlatformsUncheckedUpdateWithoutTenantInput>
  }

  export type LinkedPlatformsUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuild?: DiscordGuildUpdateOneWithoutLinkedToNestedInput
  }

  export type LinkedPlatformsUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuild?: DiscordGuildUncheckedUpdateOneWithoutLinkedToNestedInput
  }

  export type DiscordGuildCreateWithoutLinkedToInput = {
    id: string
    name: string
    icon?: string | null
    guildMembers?: DiscordGuildMemberCreateNestedManyWithoutDiscordGuildInput
  }

  export type DiscordGuildUncheckedCreateWithoutLinkedToInput = {
    id: string
    name: string
    icon?: string | null
    guildMembers?: DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordGuildInput
  }

  export type DiscordGuildCreateOrConnectWithoutLinkedToInput = {
    where: DiscordGuildWhereUniqueInput
    create: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
  }

  export type TenantCreateWithoutLinkedPlatformsInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUncheckedCreateWithoutLinkedPlatformsInput = {
    id?: string
    name: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutLinkedPlatformsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLinkedPlatformsInput, TenantUncheckedCreateWithoutLinkedPlatformsInput>
  }

  export type DiscordGuildUpsertWithoutLinkedToInput = {
    update: XOR<DiscordGuildUpdateWithoutLinkedToInput, DiscordGuildUncheckedUpdateWithoutLinkedToInput>
    create: XOR<DiscordGuildCreateWithoutLinkedToInput, DiscordGuildUncheckedCreateWithoutLinkedToInput>
    where?: DiscordGuildWhereInput
  }

  export type DiscordGuildUpdateToOneWithWhereWithoutLinkedToInput = {
    where?: DiscordGuildWhereInput
    data: XOR<DiscordGuildUpdateWithoutLinkedToInput, DiscordGuildUncheckedUpdateWithoutLinkedToInput>
  }

  export type DiscordGuildUpdateWithoutLinkedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    guildMembers?: DiscordGuildMemberUpdateManyWithoutDiscordGuildNestedInput
  }

  export type DiscordGuildUncheckedUpdateWithoutLinkedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    guildMembers?: DiscordGuildMemberUncheckedUpdateManyWithoutDiscordGuildNestedInput
  }

  export type TenantUpsertWithoutLinkedPlatformsInput = {
    update: XOR<TenantUpdateWithoutLinkedPlatformsInput, TenantUncheckedUpdateWithoutLinkedPlatformsInput>
    create: XOR<TenantCreateWithoutLinkedPlatformsInput, TenantUncheckedCreateWithoutLinkedPlatformsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLinkedPlatformsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLinkedPlatformsInput, TenantUncheckedUpdateWithoutLinkedPlatformsInput>
  }

  export type TenantUpdateWithoutLinkedPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateWithoutLinkedPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMemberCreateWithoutDiscordGuildInput = {
    id?: string
    isOwner?: boolean
    joinedAt?: Date | string
    discord: DiscordAccountLinkCreateNestedOneWithoutGuildsInput
    messages?: DiscordGuildMessageCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput = {
    id?: string
    discordAccountLinkId: string
    isOwner?: boolean
    joinedAt?: Date | string
    messages?: DiscordGuildMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberCreateOrConnectWithoutDiscordGuildInput = {
    where: DiscordGuildMemberWhereUniqueInput
    create: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberCreateManyDiscordGuildInputEnvelope = {
    data: DiscordGuildMemberCreateManyDiscordGuildInput | DiscordGuildMemberCreateManyDiscordGuildInput[]
    skipDuplicates?: boolean
  }

  export type LinkedPlatformsCreateWithoutDiscordGuildInput = {
    id?: string
    tenant: TenantCreateNestedOneWithoutLinkedPlatformsInput
  }

  export type LinkedPlatformsUncheckedCreateWithoutDiscordGuildInput = {
    id?: string
    tenantId: string
  }

  export type LinkedPlatformsCreateOrConnectWithoutDiscordGuildInput = {
    where: LinkedPlatformsWhereUniqueInput
    create: XOR<LinkedPlatformsCreateWithoutDiscordGuildInput, LinkedPlatformsUncheckedCreateWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordGuildInput = {
    where: DiscordGuildMemberWhereUniqueInput
    update: XOR<DiscordGuildMemberUpdateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedUpdateWithoutDiscordGuildInput>
    create: XOR<DiscordGuildMemberCreateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedCreateWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordGuildInput = {
    where: DiscordGuildMemberWhereUniqueInput
    data: XOR<DiscordGuildMemberUpdateWithoutDiscordGuildInput, DiscordGuildMemberUncheckedUpdateWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberUpdateManyWithWhereWithoutDiscordGuildInput = {
    where: DiscordGuildMemberScalarWhereInput
    data: XOR<DiscordGuildMemberUpdateManyMutationInput, DiscordGuildMemberUncheckedUpdateManyWithoutDiscordGuildInput>
  }

  export type DiscordGuildMemberScalarWhereInput = {
    AND?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
    OR?: DiscordGuildMemberScalarWhereInput[]
    NOT?: DiscordGuildMemberScalarWhereInput | DiscordGuildMemberScalarWhereInput[]
    id?: StringFilter<"DiscordGuildMember"> | string
    discordGuildId?: StringFilter<"DiscordGuildMember"> | string
    discordAccountLinkId?: StringFilter<"DiscordGuildMember"> | string
    isOwner?: BoolFilter<"DiscordGuildMember"> | boolean
    joinedAt?: DateTimeFilter<"DiscordGuildMember"> | Date | string
  }

  export type LinkedPlatformsUpsertWithoutDiscordGuildInput = {
    update: XOR<LinkedPlatformsUpdateWithoutDiscordGuildInput, LinkedPlatformsUncheckedUpdateWithoutDiscordGuildInput>
    create: XOR<LinkedPlatformsCreateWithoutDiscordGuildInput, LinkedPlatformsUncheckedCreateWithoutDiscordGuildInput>
    where?: LinkedPlatformsWhereInput
  }

  export type LinkedPlatformsUpdateToOneWithWhereWithoutDiscordGuildInput = {
    where?: LinkedPlatformsWhereInput
    data: XOR<LinkedPlatformsUpdateWithoutDiscordGuildInput, LinkedPlatformsUncheckedUpdateWithoutDiscordGuildInput>
  }

  export type LinkedPlatformsUpdateWithoutDiscordGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutLinkedPlatformsNestedInput
  }

  export type LinkedPlatformsUncheckedUpdateWithoutDiscordGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordGuildCreateWithoutGuildMembersInput = {
    id: string
    name: string
    icon?: string | null
    linkedTo?: LinkedPlatformsCreateNestedOneWithoutDiscordGuildInput
  }

  export type DiscordGuildUncheckedCreateWithoutGuildMembersInput = {
    id: string
    name: string
    icon?: string | null
    linkedToId?: string | null
  }

  export type DiscordGuildCreateOrConnectWithoutGuildMembersInput = {
    where: DiscordGuildWhereUniqueInput
    create: XOR<DiscordGuildCreateWithoutGuildMembersInput, DiscordGuildUncheckedCreateWithoutGuildMembersInput>
  }

  export type DiscordAccountLinkCreateWithoutGuildsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccounts?: LinkedAccountsCreateNestedOneWithoutDiscordInput
    sessions?: DiscordSessionCreateNestedManyWithoutDiscordAccountLinkInput
  }

  export type DiscordAccountLinkUncheckedCreateWithoutGuildsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccountsId?: string | null
    sessions?: DiscordSessionUncheckedCreateNestedManyWithoutDiscordAccountLinkInput
  }

  export type DiscordAccountLinkCreateOrConnectWithoutGuildsInput = {
    where: DiscordAccountLinkWhereUniqueInput
    create: XOR<DiscordAccountLinkCreateWithoutGuildsInput, DiscordAccountLinkUncheckedCreateWithoutGuildsInput>
  }

  export type DiscordGuildMessageCreateWithoutUserInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageCreateNestedManyWithoutParentMessageInput
    parentMessage?: DiscordGuildMessageCreateNestedOneWithoutMentionsInput
  }

  export type DiscordGuildMessageUncheckedCreateWithoutUserInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type DiscordGuildMessageCreateOrConnectWithoutUserInput = {
    where: DiscordGuildMessageWhereUniqueInput
    create: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput>
  }

  export type DiscordGuildMessageCreateManyUserInputEnvelope = {
    data: DiscordGuildMessageCreateManyUserInput | DiscordGuildMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscordGuildUpsertWithoutGuildMembersInput = {
    update: XOR<DiscordGuildUpdateWithoutGuildMembersInput, DiscordGuildUncheckedUpdateWithoutGuildMembersInput>
    create: XOR<DiscordGuildCreateWithoutGuildMembersInput, DiscordGuildUncheckedCreateWithoutGuildMembersInput>
    where?: DiscordGuildWhereInput
  }

  export type DiscordGuildUpdateToOneWithWhereWithoutGuildMembersInput = {
    where?: DiscordGuildWhereInput
    data: XOR<DiscordGuildUpdateWithoutGuildMembersInput, DiscordGuildUncheckedUpdateWithoutGuildMembersInput>
  }

  export type DiscordGuildUpdateWithoutGuildMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    linkedTo?: LinkedPlatformsUpdateOneWithoutDiscordGuildNestedInput
  }

  export type DiscordGuildUncheckedUpdateWithoutGuildMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    linkedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscordAccountLinkUpsertWithoutGuildsInput = {
    update: XOR<DiscordAccountLinkUpdateWithoutGuildsInput, DiscordAccountLinkUncheckedUpdateWithoutGuildsInput>
    create: XOR<DiscordAccountLinkCreateWithoutGuildsInput, DiscordAccountLinkUncheckedCreateWithoutGuildsInput>
    where?: DiscordAccountLinkWhereInput
  }

  export type DiscordAccountLinkUpdateToOneWithWhereWithoutGuildsInput = {
    where?: DiscordAccountLinkWhereInput
    data: XOR<DiscordAccountLinkUpdateWithoutGuildsInput, DiscordAccountLinkUncheckedUpdateWithoutGuildsInput>
  }

  export type DiscordAccountLinkUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccounts?: LinkedAccountsUpdateOneWithoutDiscordNestedInput
    sessions?: DiscordSessionUpdateManyWithoutDiscordAccountLinkNestedInput
  }

  export type DiscordAccountLinkUncheckedUpdateWithoutGuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccountsId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkNestedInput
  }

  export type DiscordGuildMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: DiscordGuildMessageWhereUniqueInput
    update: XOR<DiscordGuildMessageUpdateWithoutUserInput, DiscordGuildMessageUncheckedUpdateWithoutUserInput>
    create: XOR<DiscordGuildMessageCreateWithoutUserInput, DiscordGuildMessageUncheckedCreateWithoutUserInput>
  }

  export type DiscordGuildMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: DiscordGuildMessageWhereUniqueInput
    data: XOR<DiscordGuildMessageUpdateWithoutUserInput, DiscordGuildMessageUncheckedUpdateWithoutUserInput>
  }

  export type DiscordGuildMessageUpdateManyWithWhereWithoutUserInput = {
    where: DiscordGuildMessageScalarWhereInput
    data: XOR<DiscordGuildMessageUpdateManyMutationInput, DiscordGuildMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type DiscordGuildMessageScalarWhereInput = {
    AND?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
    OR?: DiscordGuildMessageScalarWhereInput[]
    NOT?: DiscordGuildMessageScalarWhereInput | DiscordGuildMessageScalarWhereInput[]
    id?: StringFilter<"DiscordGuildMessage"> | string
    message?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    parentMessageId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    userId?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    attachmentUrl?: StringNullableFilter<"DiscordGuildMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscordGuildMessage"> | Date | string
  }

  export type DiscordGuildMessageCreateWithoutParentMessageInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageCreateNestedManyWithoutParentMessageInput
    user?: DiscordGuildMemberCreateNestedOneWithoutMessagesInput
  }

  export type DiscordGuildMessageUncheckedCreateWithoutParentMessageInput = {
    id: string
    message?: string | null
    userId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    mentions?: DiscordGuildMessageUncheckedCreateNestedManyWithoutParentMessageInput
  }

  export type DiscordGuildMessageCreateOrConnectWithoutParentMessageInput = {
    where: DiscordGuildMessageWhereUniqueInput
    create: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput>
  }

  export type DiscordGuildMessageCreateManyParentMessageInputEnvelope = {
    data: DiscordGuildMessageCreateManyParentMessageInput | DiscordGuildMessageCreateManyParentMessageInput[]
    skipDuplicates?: boolean
  }

  export type DiscordGuildMessageCreateWithoutMentionsInput = {
    id: string
    message?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
    parentMessage?: DiscordGuildMessageCreateNestedOneWithoutMentionsInput
    user?: DiscordGuildMemberCreateNestedOneWithoutMessagesInput
  }

  export type DiscordGuildMessageUncheckedCreateWithoutMentionsInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    userId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type DiscordGuildMessageCreateOrConnectWithoutMentionsInput = {
    where: DiscordGuildMessageWhereUniqueInput
    create: XOR<DiscordGuildMessageCreateWithoutMentionsInput, DiscordGuildMessageUncheckedCreateWithoutMentionsInput>
  }

  export type DiscordGuildMemberCreateWithoutMessagesInput = {
    id?: string
    isOwner?: boolean
    joinedAt?: Date | string
    discordGuild: DiscordGuildCreateNestedOneWithoutGuildMembersInput
    discord: DiscordAccountLinkCreateNestedOneWithoutGuildsInput
  }

  export type DiscordGuildMemberUncheckedCreateWithoutMessagesInput = {
    id?: string
    discordGuildId: string
    discordAccountLinkId: string
    isOwner?: boolean
    joinedAt?: Date | string
  }

  export type DiscordGuildMemberCreateOrConnectWithoutMessagesInput = {
    where: DiscordGuildMemberWhereUniqueInput
    create: XOR<DiscordGuildMemberCreateWithoutMessagesInput, DiscordGuildMemberUncheckedCreateWithoutMessagesInput>
  }

  export type DiscordGuildMessageUpsertWithWhereUniqueWithoutParentMessageInput = {
    where: DiscordGuildMessageWhereUniqueInput
    update: XOR<DiscordGuildMessageUpdateWithoutParentMessageInput, DiscordGuildMessageUncheckedUpdateWithoutParentMessageInput>
    create: XOR<DiscordGuildMessageCreateWithoutParentMessageInput, DiscordGuildMessageUncheckedCreateWithoutParentMessageInput>
  }

  export type DiscordGuildMessageUpdateWithWhereUniqueWithoutParentMessageInput = {
    where: DiscordGuildMessageWhereUniqueInput
    data: XOR<DiscordGuildMessageUpdateWithoutParentMessageInput, DiscordGuildMessageUncheckedUpdateWithoutParentMessageInput>
  }

  export type DiscordGuildMessageUpdateManyWithWhereWithoutParentMessageInput = {
    where: DiscordGuildMessageScalarWhereInput
    data: XOR<DiscordGuildMessageUpdateManyMutationInput, DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageInput>
  }

  export type DiscordGuildMessageUpsertWithoutMentionsInput = {
    update: XOR<DiscordGuildMessageUpdateWithoutMentionsInput, DiscordGuildMessageUncheckedUpdateWithoutMentionsInput>
    create: XOR<DiscordGuildMessageCreateWithoutMentionsInput, DiscordGuildMessageUncheckedCreateWithoutMentionsInput>
    where?: DiscordGuildMessageWhereInput
  }

  export type DiscordGuildMessageUpdateToOneWithWhereWithoutMentionsInput = {
    where?: DiscordGuildMessageWhereInput
    data: XOR<DiscordGuildMessageUpdateWithoutMentionsInput, DiscordGuildMessageUncheckedUpdateWithoutMentionsInput>
  }

  export type DiscordGuildMessageUpdateWithoutMentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentMessage?: DiscordGuildMessageUpdateOneWithoutMentionsNestedInput
    user?: DiscordGuildMemberUpdateOneWithoutMessagesNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateWithoutMentionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMemberUpsertWithoutMessagesInput = {
    update: XOR<DiscordGuildMemberUpdateWithoutMessagesInput, DiscordGuildMemberUncheckedUpdateWithoutMessagesInput>
    create: XOR<DiscordGuildMemberCreateWithoutMessagesInput, DiscordGuildMemberUncheckedCreateWithoutMessagesInput>
    where?: DiscordGuildMemberWhereInput
  }

  export type DiscordGuildMemberUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DiscordGuildMemberWhereInput
    data: XOR<DiscordGuildMemberUpdateWithoutMessagesInput, DiscordGuildMemberUncheckedUpdateWithoutMessagesInput>
  }

  export type DiscordGuildMemberUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordGuild?: DiscordGuildUpdateOneRequiredWithoutGuildMembersNestedInput
    discord?: DiscordAccountLinkUpdateOneRequiredWithoutGuildsNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuildId?: StringFieldUpdateOperationsInput | string
    discordAccountLinkId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateWithoutLinkedAccountsInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationMethods?: VerificationMethodsCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutLinkedAccountsInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationMethods?: VerificationMethodsUncheckedCreateNestedManyWithoutStudentProfileInput
  }

  export type StudentProfileCreateOrConnectWithoutLinkedAccountsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutLinkedAccountsInput, StudentProfileUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type DiscordAccountLinkCreateWithoutLinkedAccountsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    sessions?: DiscordSessionCreateNestedManyWithoutDiscordAccountLinkInput
    guilds?: DiscordGuildMemberCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    sessions?: DiscordSessionUncheckedCreateNestedManyWithoutDiscordAccountLinkInput
    guilds?: DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkCreateOrConnectWithoutLinkedAccountsInput = {
    where: DiscordAccountLinkWhereUniqueInput
    create: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
  }

  export type StudentProfileUpsertWithoutLinkedAccountsInput = {
    update: XOR<StudentProfileUpdateWithoutLinkedAccountsInput, StudentProfileUncheckedUpdateWithoutLinkedAccountsInput>
    create: XOR<StudentProfileCreateWithoutLinkedAccountsInput, StudentProfileUncheckedCreateWithoutLinkedAccountsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutLinkedAccountsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutLinkedAccountsInput, StudentProfileUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type StudentProfileUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationMethods?: VerificationMethodsUpdateManyWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationMethods?: VerificationMethodsUncheckedUpdateManyWithoutStudentProfileNestedInput
  }

  export type DiscordAccountLinkUpsertWithoutLinkedAccountsInput = {
    update: XOR<DiscordAccountLinkUpdateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedUpdateWithoutLinkedAccountsInput>
    create: XOR<DiscordAccountLinkCreateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedCreateWithoutLinkedAccountsInput>
    where?: DiscordAccountLinkWhereInput
  }

  export type DiscordAccountLinkUpdateToOneWithWhereWithoutLinkedAccountsInput = {
    where?: DiscordAccountLinkWhereInput
    data: XOR<DiscordAccountLinkUpdateWithoutLinkedAccountsInput, DiscordAccountLinkUncheckedUpdateWithoutLinkedAccountsInput>
  }

  export type DiscordAccountLinkUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: DiscordSessionUpdateManyWithoutDiscordAccountLinkNestedInput
    guilds?: DiscordGuildMemberUpdateManyWithoutDiscordNestedInput
  }

  export type DiscordAccountLinkUncheckedUpdateWithoutLinkedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkNestedInput
    guilds?: DiscordGuildMemberUncheckedUpdateManyWithoutDiscordNestedInput
  }

  export type LinkedAccountsCreateWithoutDiscordInput = {
    id?: string
    studentProfile: StudentProfileCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountsUncheckedCreateWithoutDiscordInput = {
    id?: string
    studentProfileId: string
  }

  export type LinkedAccountsCreateOrConnectWithoutDiscordInput = {
    where: LinkedAccountsWhereUniqueInput
    create: XOR<LinkedAccountsCreateWithoutDiscordInput, LinkedAccountsUncheckedCreateWithoutDiscordInput>
  }

  export type DiscordSessionCreateWithoutDiscordAccountLinkInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
  }

  export type DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
  }

  export type DiscordSessionCreateOrConnectWithoutDiscordAccountLinkInput = {
    where: DiscordSessionWhereUniqueInput
    create: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput>
  }

  export type DiscordSessionCreateManyDiscordAccountLinkInputEnvelope = {
    data: DiscordSessionCreateManyDiscordAccountLinkInput | DiscordSessionCreateManyDiscordAccountLinkInput[]
    skipDuplicates?: boolean
  }

  export type DiscordGuildMemberCreateWithoutDiscordInput = {
    id?: string
    isOwner?: boolean
    joinedAt?: Date | string
    discordGuild: DiscordGuildCreateNestedOneWithoutGuildMembersInput
    messages?: DiscordGuildMessageCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberUncheckedCreateWithoutDiscordInput = {
    id?: string
    discordGuildId: string
    isOwner?: boolean
    joinedAt?: Date | string
    messages?: DiscordGuildMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type DiscordGuildMemberCreateOrConnectWithoutDiscordInput = {
    where: DiscordGuildMemberWhereUniqueInput
    create: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput>
  }

  export type DiscordGuildMemberCreateManyDiscordInputEnvelope = {
    data: DiscordGuildMemberCreateManyDiscordInput | DiscordGuildMemberCreateManyDiscordInput[]
    skipDuplicates?: boolean
  }

  export type LinkedAccountsUpsertWithoutDiscordInput = {
    update: XOR<LinkedAccountsUpdateWithoutDiscordInput, LinkedAccountsUncheckedUpdateWithoutDiscordInput>
    create: XOR<LinkedAccountsCreateWithoutDiscordInput, LinkedAccountsUncheckedCreateWithoutDiscordInput>
    where?: LinkedAccountsWhereInput
  }

  export type LinkedAccountsUpdateToOneWithWhereWithoutDiscordInput = {
    where?: LinkedAccountsWhereInput
    data: XOR<LinkedAccountsUpdateWithoutDiscordInput, LinkedAccountsUncheckedUpdateWithoutDiscordInput>
  }

  export type LinkedAccountsUpdateWithoutDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountsUncheckedUpdateWithoutDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscordSessionUpsertWithWhereUniqueWithoutDiscordAccountLinkInput = {
    where: DiscordSessionWhereUniqueInput
    update: XOR<DiscordSessionUpdateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedUpdateWithoutDiscordAccountLinkInput>
    create: XOR<DiscordSessionCreateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedCreateWithoutDiscordAccountLinkInput>
  }

  export type DiscordSessionUpdateWithWhereUniqueWithoutDiscordAccountLinkInput = {
    where: DiscordSessionWhereUniqueInput
    data: XOR<DiscordSessionUpdateWithoutDiscordAccountLinkInput, DiscordSessionUncheckedUpdateWithoutDiscordAccountLinkInput>
  }

  export type DiscordSessionUpdateManyWithWhereWithoutDiscordAccountLinkInput = {
    where: DiscordSessionScalarWhereInput
    data: XOR<DiscordSessionUpdateManyMutationInput, DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkInput>
  }

  export type DiscordSessionScalarWhereInput = {
    AND?: DiscordSessionScalarWhereInput | DiscordSessionScalarWhereInput[]
    OR?: DiscordSessionScalarWhereInput[]
    NOT?: DiscordSessionScalarWhereInput | DiscordSessionScalarWhereInput[]
    id?: StringFilter<"DiscordSession"> | string
    token?: StringFilter<"DiscordSession"> | string
    accessToken?: StringNullableFilter<"DiscordSession"> | string | null
    accessTokenExpiry?: DateTimeNullableFilter<"DiscordSession"> | Date | string | null
    escalationSecret?: StringFilter<"DiscordSession"> | string
    isAuthenticated?: BoolFilter<"DiscordSession"> | boolean
    isRevoked?: BoolFilter<"DiscordSession"> | boolean
    discordAccountLinkId?: StringNullableFilter<"DiscordSession"> | string | null
  }

  export type DiscordGuildMemberUpsertWithWhereUniqueWithoutDiscordInput = {
    where: DiscordGuildMemberWhereUniqueInput
    update: XOR<DiscordGuildMemberUpdateWithoutDiscordInput, DiscordGuildMemberUncheckedUpdateWithoutDiscordInput>
    create: XOR<DiscordGuildMemberCreateWithoutDiscordInput, DiscordGuildMemberUncheckedCreateWithoutDiscordInput>
  }

  export type DiscordGuildMemberUpdateWithWhereUniqueWithoutDiscordInput = {
    where: DiscordGuildMemberWhereUniqueInput
    data: XOR<DiscordGuildMemberUpdateWithoutDiscordInput, DiscordGuildMemberUncheckedUpdateWithoutDiscordInput>
  }

  export type DiscordGuildMemberUpdateManyWithWhereWithoutDiscordInput = {
    where: DiscordGuildMemberScalarWhereInput
    data: XOR<DiscordGuildMemberUpdateManyMutationInput, DiscordGuildMemberUncheckedUpdateManyWithoutDiscordInput>
  }

  export type DiscordAccountLinkCreateWithoutSessionsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccounts?: LinkedAccountsCreateNestedOneWithoutDiscordInput
    guilds?: DiscordGuildMemberCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkUncheckedCreateWithoutSessionsInput = {
    id: string
    username: string
    avatarUrl?: string | null
    linkedAccountsId?: string | null
    guilds?: DiscordGuildMemberUncheckedCreateNestedManyWithoutDiscordInput
  }

  export type DiscordAccountLinkCreateOrConnectWithoutSessionsInput = {
    where: DiscordAccountLinkWhereUniqueInput
    create: XOR<DiscordAccountLinkCreateWithoutSessionsInput, DiscordAccountLinkUncheckedCreateWithoutSessionsInput>
  }

  export type DiscordAccountLinkUpsertWithoutSessionsInput = {
    update: XOR<DiscordAccountLinkUpdateWithoutSessionsInput, DiscordAccountLinkUncheckedUpdateWithoutSessionsInput>
    create: XOR<DiscordAccountLinkCreateWithoutSessionsInput, DiscordAccountLinkUncheckedCreateWithoutSessionsInput>
    where?: DiscordAccountLinkWhereInput
  }

  export type DiscordAccountLinkUpdateToOneWithWhereWithoutSessionsInput = {
    where?: DiscordAccountLinkWhereInput
    data: XOR<DiscordAccountLinkUpdateWithoutSessionsInput, DiscordAccountLinkUncheckedUpdateWithoutSessionsInput>
  }

  export type DiscordAccountLinkUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccounts?: LinkedAccountsUpdateOneWithoutDiscordNestedInput
    guilds?: DiscordGuildMemberUpdateManyWithoutDiscordNestedInput
  }

  export type DiscordAccountLinkUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedAccountsId?: NullableStringFieldUpdateOperationsInput | string | null
    guilds?: DiscordGuildMemberUncheckedUpdateManyWithoutDiscordNestedInput
  }

  export type StudentProfileCreateWithoutVerificationMethodsInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedAccounts?: LinkedAccountsCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateWithoutVerificationMethodsInput = {
    id?: string
    fullName?: string | null
    studentId?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    linkedAccounts?: LinkedAccountsUncheckedCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileCreateOrConnectWithoutVerificationMethodsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutVerificationMethodsInput, StudentProfileUncheckedCreateWithoutVerificationMethodsInput>
  }

  export type EmailVerificationCreateWithoutVerificationMethodsInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationUncheckedCreateWithoutVerificationMethodsInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationCreateOrConnectWithoutVerificationMethodsInput = {
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput>
  }

  export type EmailVerificationCreateManyVerificationMethodsInputEnvelope = {
    data: EmailVerificationCreateManyVerificationMethodsInput | EmailVerificationCreateManyVerificationMethodsInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileUpsertWithoutVerificationMethodsInput = {
    update: XOR<StudentProfileUpdateWithoutVerificationMethodsInput, StudentProfileUncheckedUpdateWithoutVerificationMethodsInput>
    create: XOR<StudentProfileCreateWithoutVerificationMethodsInput, StudentProfileUncheckedCreateWithoutVerificationMethodsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutVerificationMethodsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutVerificationMethodsInput, StudentProfileUncheckedUpdateWithoutVerificationMethodsInput>
  }

  export type StudentProfileUpdateWithoutVerificationMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedAccounts?: LinkedAccountsUpdateOneWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutVerificationMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedAccounts?: LinkedAccountsUncheckedUpdateOneWithoutStudentProfileNestedInput
  }

  export type EmailVerificationUpsertWithWhereUniqueWithoutVerificationMethodsInput = {
    where: EmailVerificationWhereUniqueInput
    update: XOR<EmailVerificationUpdateWithoutVerificationMethodsInput, EmailVerificationUncheckedUpdateWithoutVerificationMethodsInput>
    create: XOR<EmailVerificationCreateWithoutVerificationMethodsInput, EmailVerificationUncheckedCreateWithoutVerificationMethodsInput>
  }

  export type EmailVerificationUpdateWithWhereUniqueWithoutVerificationMethodsInput = {
    where: EmailVerificationWhereUniqueInput
    data: XOR<EmailVerificationUpdateWithoutVerificationMethodsInput, EmailVerificationUncheckedUpdateWithoutVerificationMethodsInput>
  }

  export type EmailVerificationUpdateManyWithWhereWithoutVerificationMethodsInput = {
    where: EmailVerificationScalarWhereInput
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyWithoutVerificationMethodsInput>
  }

  export type EmailVerificationScalarWhereInput = {
    AND?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    OR?: EmailVerificationScalarWhereInput[]
    NOT?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    emailAddress?: StringFilter<"EmailVerification"> | string
    verificationCode?: StringFilter<"EmailVerification"> | string
    isVerified?: BoolFilter<"EmailVerification"> | boolean
    expiresAt?: DateTimeNullableFilter<"EmailVerification"> | Date | string | null
    verificationMethodsId?: StringNullableFilter<"EmailVerification"> | string | null
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
  }

  export type VerificationMethodsCreateWithoutEmailVerificationInput = {
    id?: string
    studentProfile: StudentProfileCreateNestedOneWithoutVerificationMethodsInput
  }

  export type VerificationMethodsUncheckedCreateWithoutEmailVerificationInput = {
    id?: string
    studentProfileId: string
  }

  export type VerificationMethodsCreateOrConnectWithoutEmailVerificationInput = {
    where: VerificationMethodsWhereUniqueInput
    create: XOR<VerificationMethodsCreateWithoutEmailVerificationInput, VerificationMethodsUncheckedCreateWithoutEmailVerificationInput>
  }

  export type VerificationMethodsUpsertWithoutEmailVerificationInput = {
    update: XOR<VerificationMethodsUpdateWithoutEmailVerificationInput, VerificationMethodsUncheckedUpdateWithoutEmailVerificationInput>
    create: XOR<VerificationMethodsCreateWithoutEmailVerificationInput, VerificationMethodsUncheckedCreateWithoutEmailVerificationInput>
    where?: VerificationMethodsWhereInput
  }

  export type VerificationMethodsUpdateToOneWithWhereWithoutEmailVerificationInput = {
    where?: VerificationMethodsWhereInput
    data: XOR<VerificationMethodsUpdateWithoutEmailVerificationInput, VerificationMethodsUncheckedUpdateWithoutEmailVerificationInput>
  }

  export type VerificationMethodsUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfile?: StudentProfileUpdateOneRequiredWithoutVerificationMethodsNestedInput
  }

  export type VerificationMethodsUncheckedUpdateWithoutEmailVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentProfileId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationMethodsCreateWithoutStudentProfileInput = {
    id?: string
    emailVerification?: EmailVerificationCreateNestedManyWithoutVerificationMethodsInput
  }

  export type VerificationMethodsUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    emailVerification?: EmailVerificationUncheckedCreateNestedManyWithoutVerificationMethodsInput
  }

  export type VerificationMethodsCreateOrConnectWithoutStudentProfileInput = {
    where: VerificationMethodsWhereUniqueInput
    create: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput>
  }

  export type VerificationMethodsCreateManyStudentProfileInputEnvelope = {
    data: VerificationMethodsCreateManyStudentProfileInput | VerificationMethodsCreateManyStudentProfileInput[]
    skipDuplicates?: boolean
  }

  export type LinkedAccountsCreateWithoutStudentProfileInput = {
    id?: string
    discord?: DiscordAccountLinkCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountsUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    discord?: DiscordAccountLinkUncheckedCreateNestedOneWithoutLinkedAccountsInput
  }

  export type LinkedAccountsCreateOrConnectWithoutStudentProfileInput = {
    where: LinkedAccountsWhereUniqueInput
    create: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
  }

  export type VerificationMethodsUpsertWithWhereUniqueWithoutStudentProfileInput = {
    where: VerificationMethodsWhereUniqueInput
    update: XOR<VerificationMethodsUpdateWithoutStudentProfileInput, VerificationMethodsUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<VerificationMethodsCreateWithoutStudentProfileInput, VerificationMethodsUncheckedCreateWithoutStudentProfileInput>
  }

  export type VerificationMethodsUpdateWithWhereUniqueWithoutStudentProfileInput = {
    where: VerificationMethodsWhereUniqueInput
    data: XOR<VerificationMethodsUpdateWithoutStudentProfileInput, VerificationMethodsUncheckedUpdateWithoutStudentProfileInput>
  }

  export type VerificationMethodsUpdateManyWithWhereWithoutStudentProfileInput = {
    where: VerificationMethodsScalarWhereInput
    data: XOR<VerificationMethodsUpdateManyMutationInput, VerificationMethodsUncheckedUpdateManyWithoutStudentProfileInput>
  }

  export type VerificationMethodsScalarWhereInput = {
    AND?: VerificationMethodsScalarWhereInput | VerificationMethodsScalarWhereInput[]
    OR?: VerificationMethodsScalarWhereInput[]
    NOT?: VerificationMethodsScalarWhereInput | VerificationMethodsScalarWhereInput[]
    id?: StringFilter<"VerificationMethods"> | string
    studentProfileId?: StringFilter<"VerificationMethods"> | string
  }

  export type LinkedAccountsUpsertWithoutStudentProfileInput = {
    update: XOR<LinkedAccountsUpdateWithoutStudentProfileInput, LinkedAccountsUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<LinkedAccountsCreateWithoutStudentProfileInput, LinkedAccountsUncheckedCreateWithoutStudentProfileInput>
    where?: LinkedAccountsWhereInput
  }

  export type LinkedAccountsUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: LinkedAccountsWhereInput
    data: XOR<LinkedAccountsUpdateWithoutStudentProfileInput, LinkedAccountsUncheckedUpdateWithoutStudentProfileInput>
  }

  export type LinkedAccountsUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    discord?: DiscordAccountLinkUpdateOneWithoutLinkedAccountsNestedInput
  }

  export type LinkedAccountsUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    discord?: DiscordAccountLinkUncheckedUpdateOneWithoutLinkedAccountsNestedInput
  }

  export type DiscordGuildMemberCreateManyDiscordGuildInput = {
    id?: string
    discordAccountLinkId: string
    isOwner?: boolean
    joinedAt?: Date | string
  }

  export type DiscordGuildMemberUpdateWithoutDiscordGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discord?: DiscordAccountLinkUpdateOneRequiredWithoutGuildsNestedInput
    messages?: DiscordGuildMessageUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateWithoutDiscordGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordAccountLinkId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscordGuildMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateManyWithoutDiscordGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordAccountLinkId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMessageCreateManyUserInput = {
    id: string
    message?: string | null
    parentMessageId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type DiscordGuildMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUpdateManyWithoutParentMessageNestedInput
    parentMessage?: DiscordGuildMessageUpdateOneWithoutMentionsNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    parentMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordGuildMessageCreateManyParentMessageInput = {
    id: string
    message?: string | null
    userId?: string | null
    attachmentUrl?: string | null
    createdAt?: Date | string
  }

  export type DiscordGuildMessageUpdateWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUpdateManyWithoutParentMessageNestedInput
    user?: DiscordGuildMemberUpdateOneWithoutMessagesNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageNestedInput
  }

  export type DiscordGuildMessageUncheckedUpdateManyWithoutParentMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscordSessionCreateManyDiscordAccountLinkInput = {
    id?: string
    token: string
    accessToken?: string | null
    accessTokenExpiry?: Date | string | null
    escalationSecret: string
    isAuthenticated?: boolean
    isRevoked?: boolean
  }

  export type DiscordGuildMemberCreateManyDiscordInput = {
    id?: string
    discordGuildId: string
    isOwner?: boolean
    joinedAt?: Date | string
  }

  export type DiscordSessionUpdateWithoutDiscordAccountLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordSessionUncheckedUpdateWithoutDiscordAccountLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordSessionUncheckedUpdateManyWithoutDiscordAccountLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    escalationSecret?: StringFieldUpdateOperationsInput | string
    isAuthenticated?: BoolFieldUpdateOperationsInput | boolean
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscordGuildMemberUpdateWithoutDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discordGuild?: DiscordGuildUpdateOneRequiredWithoutGuildMembersNestedInput
    messages?: DiscordGuildMessageUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateWithoutDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuildId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscordGuildMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiscordGuildMemberUncheckedUpdateManyWithoutDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordGuildId?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyVerificationMethodsInput = {
    id?: string
    emailAddress: string
    verificationCode: string
    isVerified?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateWithoutVerificationMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateWithoutVerificationMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyWithoutVerificationMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationMethodsCreateManyStudentProfileInput = {
    id?: string
  }

  export type VerificationMethodsUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailVerification?: EmailVerificationUpdateManyWithoutVerificationMethodsNestedInput
  }

  export type VerificationMethodsUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailVerification?: EmailVerificationUncheckedUpdateManyWithoutVerificationMethodsNestedInput
  }

  export type VerificationMethodsUncheckedUpdateManyWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
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