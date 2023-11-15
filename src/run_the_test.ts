/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  collection,
  deleteDoc,
  disableNetwork,
  enableNetwork,
  doc,
  enableIndexedDbPersistence,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  query,
  runTransaction,
  where,
  writeBatch,
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  Query,
  QuerySnapshot
} from 'firebase/firestore';

import { log } from './common/logging.js';
import { TestEnvironment } from './common/test_environment.js';
import {
  Deferred,
  SnapshotListener,
  createDocument,
  createDocuments,
  createEmptyCollection,
  generateValue
} from './common/util.js';
import { Random } from './common/random.js';

/**
 * Runs the test.
 *
 * Replace the body of this function with the code you would like to execute
 * when the user clicks the "Run Test" button in the UI.
 *
 * @param db the `Firestore` instance to use.
 * @param env extra information about the given Firestore instance and some
 * helper methods.
 */
export async function runTheTest(
  db: Firestore,
  env: TestEnvironment
): Promise<void> {
  log("This is a reproduction app for support ticket b/310681788");
  log("Steps to Reproduce:");
  log("1. Open this web page in Safari.");
  log("2. Open the JavaScript Console in Safari.");
  log("3. Enable 'Preserve Logs'.");
  log("3. Press the 'Run Test' button in the web page.");
  log("4. Once completed, press COMMAND+R to reload the web page.");
  log("Expected Results: no errors are shown in the JavaScript console");
  log("Actual Results: 2 instances of the following error are shown in the JavaScript console: " +
     "Fetch API cannot load https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?... due to access control checks.");
  log("")

  const q = query(collection(db, "users"));
  log("getDocs()");
  const querySnapshot = await getDocs(q);
  log(`getDocs() returned snapshot with querySnapshot.docs.length=${querySnapshot.docs.length}`);
}
