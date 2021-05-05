import { Grid } from "@material-ui/core";
import React from "react";
import * as S from "./styles";

export default function HybrooDescription() {
  return (
    <S.Container className="container">
      <h2>About Hybroo</h2>

      <Grid>
        <p>
          The Hybroo project was created by Edgar Marcos Ancioto Junior, in his
          master's dissertation in May 2018. The platform aims to bring together
          sets of problems of different types and enable them to be solved using
          Artificial Intelligence algorithms.
        </p>
        <p>
          The repository has problems with multidimensional non-linear
          functions, traveling salesman problem and enabled vehicle routing. The
          resolution methods have metaheuristics such as: Genetic Algorithm,
          Simulated Annealing and Ant Colony Optimization, with the possibility
          of collaborative hybrid use.
        </p>
        <p>
          Note: Currently, the platform is undergoing adjustments aimed at
          scalability and preparation to solve real problems, with
          non-linearities and high dimensions.
        </p>

        <p>
          The development of the platform counted on the production of 2
          graduates of the master's degree and 10 students of scientific
          initiation, between 2018 and 2020. The development of Hybroo generated
          a great impact in the training of new researchers, currently having 4
          scientific initiation works in progress, between the August 2020 to
          September 2021, in addition to 7 new submissions in 2021.
        </p>
        <p>
          Based on the scientific initiation plans, 5 course completion works
          were developed in 2020, with emphasis on 3 master's approvals at
          Unicamp in 2020. In 2018, one of the scientific initiation students
          was awarded for work related to the platform.
        </p>
        <p>
          Work plans were developed involving research with portfolio
          optimization and price prediction, return and volatility of assets on
          the Brazilian stock exchange, with a view to innovation in finance, to
          generate investment automatic (1 dissertation, 02 CI students), using
          colony bee algorithm and LSTM neural networks and deterministic
          algorithms.
        </p>
        <p>
          Efforts were made to operationalize the metaheuristic parameters
          online calibration resource platform, statistical analysis with
          non-parametric tests to compare collaborative and integrative
          algorithms and hybrids between Swarm Intelligence algorithms and
          integrative hybrids based on the genetic algorithm. The platform is a
          technical production with a real possibility of having software
          registration, in the future, increasing the visibility of the program
          and contributing to a research area, since it has an experimental
          environment for testing algorithms and with the possibility of solving
          real problems.
        </p>
      </Grid>
    </S.Container>
  );
}
