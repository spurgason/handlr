<?php

namespace App\Enums;

use App\Traits\Enums\HasEnumArray;

enum UserStatus: string
{
    use HasEnumArray;

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
