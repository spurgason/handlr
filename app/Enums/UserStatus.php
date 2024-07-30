<?php

namespace App\Enums;

enum UserStatus: int
{
    case Active = 1;

    case Inactive = 0;

    case Locked = 2;

    public function label(): string
    {
        return match ($this) {
           self::Active => 'Active',
           self::Inactive => 'Inactive',
           self::Locked => 'Locked',
        };
    }
}
