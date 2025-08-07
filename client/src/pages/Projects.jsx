import React from "react";

function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Vibify</h3>
          <p>ML model using Librosa & Scikit-Learn to classify song moods with 86.4% accuracy.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Stri-AI</h3>
          <p>PCOD awareness chatbot using React, Dialogflow, Firebase; engaged 250+ users.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">DijkstraWay</h3>
          <p>Route planner using Dijkstra’s Algorithm to suggest optimal travel paths.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
