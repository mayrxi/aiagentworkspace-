
from flask import Flask, jsonify, request
app = Flask(__name__)

# Simple in-memory simulation of agents
agents = {}

@app.route('/agents', methods=['GET'])
def list_agents():
    return jsonify(list(agents.values()))

@app.route('/agents', methods=['POST'])
def create_agent():
    data = request.json
    name = data.get('name', 'agent')
    role = data.get('role', 'researcher')
    agent = {'name': name, 'role': role, 'status': 'idle'}
    agents[name] = agent
    return jsonify(agent), 201

@app.route('/agents/<name>/run', methods=['POST'])
def run_agent(name):
    # simulate agent action
    agent = agents.get(name)
    if not agent:
        return jsonify({'error': 'agent not found'}), 404
    agent['status'] = 'running'
    # simple simulated output
    return jsonify({'result': f"{name} ran as {agent['role']}", 'status': 'completed'})

if __name__ == '__main__':
    app.run(debug=True)
