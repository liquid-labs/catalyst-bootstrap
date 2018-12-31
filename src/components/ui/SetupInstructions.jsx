import React from 'react'

const projectId = 'liquid-labs-test'
const generalSettingsUrl = `https://console.firebase.google.com/project/${projectId}/settings/general/`
const authSettingsUrl = `https://console.firebase.google.com/project/${projectId}/authentication`
const authProvidersSettingsUrl = `https://console.firebase.google.com/project/${projectId}/authentication/users`
const databaseSettingsUrl = `https://console.firebase.google.com/project/${projectId}/database`

export const SetupInstructions = () => (
  <div>
    It looks like this is the application is not yet configured to connect to
    firebase. If this is the initial launch, follow the steps below:
    <ol>
      <li>First, you'll need a Firebase project. We recommend attaching it to a
        GCP project, though this optional. TODO: link recommendations on naming
        projects.
        <ol>
          <li>If you don't already have a GCP project, head over to the <a
            href="https://console.cloud.google.com/">GCP console</a> and create
            a new project if you don't already have one.</li>
          <li>Head to the <a href="https://console.firebase.google.com/">Firebase
            console</a> and create a project, attached the GCP project, if you
            haven't already done so.</li>
        </ol>
      </li>
      <li>TODO: enter project ID here to flesh out URL.</li>
      <li>Update the <a href={generalSettingsUrl}>general project settings</a>.
        <ol>
          <li>Set the 'Public-facing name' to match the 'Project name' or something friendly.</li>
          <li>Select a 'Support email'.</li>
        </ol>
      </li>
      <li>Enable Firebase authentication under '<a href={authProvidersSettingsUrl}>Develop->Authentication</a>'.
        <ol>
          <li>Select 'Sign-in method' in the tabs along top.</li>
          <li>Enable 'Email' by clicking the edit. Enable both basic login and
            "passwordless" login.</li>
          <li>Enable 'Google' authentiaction.</li>
          <li>TODO: provide instructions for FB, twitter, and GitHub.</li>
        </ol>
      </li>
      <li>Enable Cloud Firestore DB under '<a href={databaseSettingsUrl}>Develop->Database</a>'.
        <ol>
          <li>Click 'Create database'.</li>
          <li>Select to 'Start in locked mode' and hit 'Enable'.</li>
        </ol>
      </li>
      <li>Back to the <a href={authSettingsUrl}>authentication management screen</a> and click 'Web setup'.
        <ol>
          <li>Create a '.env' file in the project root.</li>
          <li>Copy the <code>apiKey</code> value to <code>REACT_APP_FIREBASE_API_KEY</code>.</li>
          <li>Copy the <code>authDomain</code> value to <code>REACT_APP_FIREBASE_API_KEY</code>.</li>
          <li>Copy the <code>databaseURL</code> value to <code>REACT_APP_FIREBASE_DB_URL</code>.</li>
          <li>Copy the <code>projectId</code> value to <code>REACT_APP_FIREBASE_PROJECT_ID</code>.</li>
          <li>Copy the <code>storageBucket</code> value to <code>REACT_APP_FIREBASE_STORAGE_BUCKET</code>.</li>
          <li>Copy the <code>messagingSenderId</code> value to <code>REACT_APP_FIREBASE_MESSAGING_SENDER_ID</code>.</li>
          <li>TODO: provide widget to accept value hash and generate the config file text.</li>
          </ol>
      </li>
      <li>Restart the development server and the bootstrap login screen should appear.</li>
    </ol>
    References: <a href="https://firebase.google.com/docs/firestore/security/rules-conditions">Writing conditions for Cloud Firestore Security Rules</a>
  </div>
)
