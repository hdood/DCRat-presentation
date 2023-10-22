<script setup>

import Layout from "../layouts/index.vue"; 
</script>

<template>
    <section data-index="8">

        <div class="">
            <div class="p-4 rounded-xl border flex flex-col gap-9 card glass">
                
                <div class="flex justify-center gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594c-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792l.686-.406ZM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z"
                            clip-rule="evenodd" />
                    </svg>
                    <div>Dammages</div>
                </div>

                <ul class="max-w-xl space-y-1 text-xl list-disc list-inside  mt-10">
                    <li>
                        Unauthorized access and control over a victim's system.
                    </li>
                    <li class="fragment">
                        Steal sensitive data.
                    </li>
                    <li class="fragment">
                        Monitor user activities.
                    </li>
                    <li class="fragment">
                        Manipulate files.
                    </li>
                    <li class="fragment">
                        Install additional malware.
                    </li>
                </ul>

                <p class="fragment text-xl">
                    RATs in general can be used to facilitate other cybercrimes, such as launching distributed denial-of-service
                    (DDoS) attacks, spreading ransomware, or conducting espionage.
                </p>

            </div>
        </div>
    </section>
</template>