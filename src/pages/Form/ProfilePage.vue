<template>
  <div class="w-full">
    <q-card class="p-10" flat>
      <q-img
        class="h-80 rounded-full object-cover"
        src="https://wallpaperaccess.com/full/1871775.jpg"
      />
    </q-card>
    <q-card class="p-5 mx-auto relative w-4/5">
      <q-card-section>
        <div class="flex">
          <q-avatar class="mx-2">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <div class="ml-2 font-semibold flex flex-col">
            <span>Queen Elizabeth</span>
            <span>CEO</span>
          </div>
        </div>
        <div class="flex mt-10">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey w-full"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="notifications" label="Notifications" />
            <q-tab name="profile" label="Profile" />
            <q-tab name="account" label="Account" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel class="row" name="notifications">
              <div class="flex flex-col w-30">
                <div class="text-h6">Notifications</div>

                <q-toggle
                  label="Notify me when new order received"
                  v-model="toggles.toggle1"
                  color="green"
                  :false-value="false"
                  :true-value="true"
                />
                <q-toggle
                  label="Notify me when email is received"
                  v-model="toggles.toggle2"
                  color="green"
                  :false-value="false"
                  :true-value="true"
                />
                <q-toggle
                  label="Notify me when a order is complete"
                  v-model="toggles.toggle3"
                  color="green"
                  :false-value="false"
                  :true-value="true"
                />
                <q-toggle
                  label="Notify me when an order is canceled"
                  v-model="toggles.toggle4"
                  color="green"
                  :false-value="false"
                  :true-value="true"
                />
              </div>
              <div class="row w-full mt-10 items-center">
                <span class="mr-2">Send me a push when: </span>
                <q-btn-toggle
                  class="mx-2"
                  v-model="toggles.btnToggle"
                  toggle-color="primary"
                  :options="[
                    { label: 'New order is pending', value: 'one' },
                    { label: 'New order is started', value: 'two' },
                    { label: 'New order is completed', value: 'three' },
                  ]"
                />
              </div>
            </q-tab-panel>
            <q-tab-panel name="profile">
              <q-space />
              <div class="text-h6">Profile</div>

              <div class="row">
                <div class="col">
                  <q-form class="q-gutter-md">
                    <q-input
                      filled
                      v-model="formModel.firstName"
                      label="Your first name *"
                      hint="Just your first name"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />
                    <q-input
                      filled
                      v-model="formModel.lastName"
                      label="Your last name *"
                      hint="Just your last name"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />
                  </q-form>
                </div>
                <div class="col mx-10">
                  <q-form class="q-gutter-md">
                    <q-input
                      filled
                      type="number"
                      v-model="formModel.phone"
                      label="Your Phone *"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />
                    <q-input
                      filled
                      type="email"
                      v-model="formModel.email"
                      label="Your email *"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    />
                  </q-form>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const tab = ref();
const toggles = reactive({
  toggle1: true,
  toggle2: false,
  toggle3: false,
  toggle4: false,
  toggle5: false,
  btnToggle: '',
});
const formModel = reactive({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  email: '',
  phone: '',
});
</script>

<style></style>
