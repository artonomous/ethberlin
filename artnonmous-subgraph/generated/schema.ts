import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Generator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Generator entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Generator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Generator", id.toString(), this);
  }

  static load(id: string): Generator | null {
    return store.get("Generator", id) as Generator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get creator(): string | null {
    let value = this.get("creator");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set creator(value: string | null) {
    if (value === null) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromString(value as string));
    }
  }

  get sourceUri(): string | null {
    let value = this.get("sourceUri");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sourceUri(value: string | null) {
    if (value === null) {
      this.unset("sourceUri");
    } else {
      this.set("sourceUri", Value.fromString(value as string));
    }
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get __typename(): string | null {
    let value = this.get("__typename");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set __typename(value: string | null) {
    if (value === null) {
      this.unset("__typename");
    } else {
      this.set("__typename", Value.fromString(value as string));
    }
  }
}

export class SoulToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SoulToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SoulToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SoulToken", id.toString(), this);
  }

  static load(id: string): SoulToken | null {
    return store.get("SoulToken", id) as SoulToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get balance(): BigInt | null {
    let value = this.get("balance");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt | null) {
    if (value === null) {
      this.unset("balance");
    } else {
      this.set("balance", Value.fromBigInt(value as BigInt));
    }
  }

  get __typename(): string | null {
    let value = this.get("__typename");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set __typename(value: string | null) {
    if (value === null) {
      this.unset("__typename");
    } else {
      this.set("__typename", Value.fromString(value as string));
    }
  }
}
