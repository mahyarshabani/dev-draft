const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const ticketId = core.getInput('ticketId');
    const title = core.getInput('title');
    const description = core.getInput('description');

    console.log(`🚀 Generating AI code for: ${ticketId}`);
    console.log(`📌 Title: ${title}`);
    if (description) console.log(`📝 Description: ${description}`);

    // Later: run shell commands like `gemini -s --yolo` here
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();