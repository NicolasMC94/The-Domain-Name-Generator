window.onload = function domainName() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".es", ".com"];

  function generateDomainNames(pronoun, adj, noun, domain) {
    let domainsName = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < domain.length; l++) {
            domainsName.push(" " + pronoun[i] + adj[j] + noun[k] + domain[l]);
          }
        }
      }
    }
    return domainsName;
  }
  console.log(generateDomainNames(pronoun, adj, noun, domain));
  document.getElementById("domain").innerHTML = generateDomainNames(
    pronoun,
    adj,
    noun,
    domain
  );
  domain.push(".net");
  generateDomainNames(pronoun, adj, noun, domain);
};
