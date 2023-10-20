<script setup>

import Layout from "../layouts/index.vue"; 
import Infection from "./Infection.vue";
import Capabilities from "./Capabilities.vue";
import Dammages from "./Dammages.vue";
import Prevention from "./Prevention.vue";
</script>

<template>
  <Layout>
    <template #header="{ activeIndex }">
      <div class="w-full  px-20  mt-5 ">
        <div  class="transition-transform flex justify-between text-base-content duration-300" >
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 1 && ' scale-150 text-blue-500 font-semibold']">Remote Access Trojan</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 2 && 'scale-150 text-blue-500 font-semibold']">Dark Crystal Rat</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 3 && 'scale-150 text-blue-500 font-semibold']">Malware As A Service</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 4 && 'scale-150 text-blue-500 font-semibold']">Infection</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 5 && 'scale-150 text-blue-500 font-semibold']">Targets</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 6 && 'scale-150 text-blue-500 font-semibold']">Capabilities</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 7 && 'scale-150 text-blue-500 font-semibold']">Examples</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 8 && 'scale-150 text-blue-500 font-semibold']">Dammages</div>
          <div class="text-lg transition-all duration-200" :class="[activeIndex == 9 && 'scale-150 text-blue-500 font-semibold']">Prevention</div>
        </div>
      </div>
    </template>

    <template #sections>
      <section data-index="1">
        <div class="">
          <div class="p-4 rounded-xl border ">
            <div class="flex justify-center gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M236.156 19.906c-27 .295-52.444 5.788-75.75 15.938L210.22 141.5c9.623-5.683 20.014-10.723 31.186-15.03L258.47 20.843a214.583 214.583 0 0 0-22.314-.938zm40.813 3.407l-15.564 96.468c16.898-4.827 35.387-8.166 55.53-9.81l2.377-.19l68.03-41.843c-37.876-23.798-75.08-38.45-110.374-44.624zM143.655 44.156C124.946 54.62 107.858 68.31 92.812 84.97c-8.682 9.613-16.686 20.277-23.937 31.905l85.813 74.28a188.577 188.577 0 0 1 39.78-39.28l-50.812-107.72zm170 84.97c-98.41 9.502-148.772 59.09-172.437 127.718c-23.358 67.732-18.883 154.58-1.814 235.97l232.22-.002c-13.15-51.313-36.813-75.542-55.532-96.53c-10.04-11.257-19.156-21.87-22.75-35.97c-2.973-11.657-1.41-24.738 5.156-40c-11.903-3.81-26.067-3.973-43.125.188l-4.406-18.156c29.26-7.137 55.266-3.473 74.874 11.28c18.24 13.725 30.198 36.15 36.437 65.188c26.094 4.41 55.303 7.784 89.595 9.5c4.537-30.6 15.487-60.877 30.875-90.875c-66.84-50.032-120.642-107.877-169.094-168.312zm-254.25 4.28c-12.305 23.56-21.735 50.528-27.75 80.563l93.28 32.968c5.143-14.15 11.484-27.632 19.19-40.22l-84.72-73.312zm220.938 42.344c13.897 0 25.156 11.26 25.156 25.156c0 13.898-11.26 25.156-25.156 25.156c-13.897 0-25.156-11.258-25.156-25.156c0-13.897 11.26-25.156 25.156-25.156zM28.406 232.625c-3.147 21.435-4.62 44.283-4.218 68.438l84.75 16.375c2.073-18.17 5.39-35.827 10.218-52.72l-90.75-32.093zm-3.5 87.594c.968 17.276 2.856 35.174 5.75 53.655l75.688 1.47c-.246-13.2.05-26.307.906-39.19L24.906 320.22zm9 72.405c3.113 16.454 7.015 33.356 11.72 50.656l65.25-6.842c-1.765-14.152-3.054-28.315-3.814-42.407l-73.156-1.405zm79.53 62.344l-62.592 6.56a768.93 768.93 0 0 0 9.906 30.69h59.344a756.739 756.739 0 0 1-6.656-37.25z" />
              </svg>

              <div>Remote Access Trojan</div>
            </div>
            <p class="text-2xl">
              A RAT (remote access Trojan) is malware an attacker uses to gain full administrative privileges and remote
              control of a target computer. RATs are often downloaded along with seemingly legitimate user-requested
              programs
              -- such as video games -- or are sent to their target as an email attachment via a phishing email.
            </p>
          </div>
          <div class="flex justify-center rat">
            <img src="../assets/RAT.svg" class="w-[40rem]" alt="">
          </div>

        </div>
      </section>

      <section data-index="2">
        <div class="">
          <div class="p-4 rounded-xl border relative ">
            <div class="flex justify-center gap-3 items-center">
              <div>Dark</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M9.2 8.25L11.85 3h.3l2.65 5.25H9.2Zm2.05 11.85L2.625 9.75h8.625V20.1Zm1.5 0V9.75h8.625L12.75 20.1Zm3.7-11.85L13.85 3H19l2.625 5.25H16.45Zm-14.075 0L5 3h5.15l-2.6 5.25H2.375Z" />
              </svg>
              <div>RAT</div>
            </div>
            <p class="text-2xl">
              DCRat (AKA Dark Crystal) is a modular remote access trojan (RAT) operated as a Malware-as-a-Service (MaaS)
              that was first observed in 2018 and has received continuous updates and new modules from both its lone
              original developer (known as boldenis44, crystalcoder, and qwqdanchun) and third-party affiliates. Notably,
              the malware strain has its integrated development environment (IDE) application named DCRat Studio for
              developing new modules that serve various functions, primarily stealing sensitive information, executing
              remote commands, and importing additional malware.
            </p>
          </div>
        </div>
      </section>

      <section data-index="3">
        <div>
          <div class="p-4 flex flex-col gap-4">            <div class="">
            <img src="../assets/MAAS.svg" class="scale-110" alt="">
          </div>
          </div>
        </div>
      </section>

      <Infection />
      <Capabilities />
      <Dammages />
      <Prevention />

    </template>

</Layout>
</template>