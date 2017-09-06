import * as commandLineArgs from 'command-line-args';

export interface ICommandLineArgument {
    srcDirectory: string;
    outputType: string;
    outputDirectory: string;
}

export function getCommandLineArguments(): ICommandLineArgument {
    const argumentsDefinitions = [
        {name: 'srcDirectory', type: String},
        {name: 'outputType', type: String},
        {name: 'outputDirectory', type: String}
    ];

    return commandLineArgs(argumentsDefinitions);
}
