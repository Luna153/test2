'use client';

import React, { useEffect, useState } from 'react';
import { initI18n } from '../../../i18n';

export default function I18nProvider({ children }: { children: React.ReactNode; }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initI18n().then(() => setReady(true));
    }, []);

    if (!ready) return <div>Loading translations...</div>;

    return <>{children}</>;
}
