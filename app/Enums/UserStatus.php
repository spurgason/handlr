<?php

namespace App\Enums;

enum UserStatus: string
{
    case Active = 'active';

    case Inactive = 'inactive';

    case Locked = 'locked';

    public function label(): string
    {
        return match ($this) {
            self::Active => 'Active',
            self::Inactive => 'Inactive',
            self::Locked => 'Locked',
        };
    }
}
