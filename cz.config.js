const { definePrompt } = require('cz-git');

module.exports = definePrompt({
    alias: { fd: 'docs: fix typos' },
    messages: {
        type: "Select the type of change that you're committing:",
        scope: 'Denote the SCOPE of this change (optional):',
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
        footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
        customFooterPrefix: 'Input ISSUES prefix:',
        footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
        generatingByAI: 'Generating your AI commit subject...',
        generatedSelectByAI: 'Select suitable subject by AI generated:',
        confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
        { value: 'feat', name: '✨ feat: Introduce new features', emoji: ':sparkles:' },
        { value: 'fix', name: '🐛 fix: Fix a bug', emoji: ':bug:' },
        { value: 'fix;typos', name: '✏️  fix: Fix typos', emoji: ':pencil2:' },
        { value: 'docs', name: '📝 docs: Add or update documentation', emoji: ':memo:' },
        { value: 'style', name: '💄 style: Add or update the UI and style files', emoji: ':lipstick:' },
        { value: 'refactor', name: '♻️  refactor: Refactor code', emoji: ':recycle:' },
        { value: 'perf', name: '⚡️ perf: Improve performance', emoji: ':zap:' },
        { value: 'test', name: '✅ test: Add, update, or pass tests.', emoji: ':white_check_mark:' },
        { value: 'build', name: '📦️ build: Changes that affect the build system', emoji: ':package:' },
        {
            value: 'ci',
            name: '👷 ci: Changes to our CI configuration files and scripts',
            emoji: ':construction_worker:',
        },
        { value: 'chore', name: '🧹 chore: Updating grunt tasks etc', emoji: '🧹' },
        { value: 'chore;prototype', name: '🧪 chore: Prototype code', emoji: ':test_tube:' },
        { value: 'revert', name: '⏪️ revert: Reverts a previous commit', emoji: ':rewind:' },
        { value: 'init', name: '🎉 init: Begin a project', emoji: ':tada:' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    themeColorCode: '',
    scopes: [{ value: 'home', name: '🏠 home: Home Page related' }],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    allowBreakingChanges: ['fix', 'feat'],
    customScopesAlign: 'top',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    skipQuestions: [],
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
    defaultFooterPrefix: 'closed',
    markBreakingChangeMode: true,

    formatMessageCB: (messageMod) => {
        const { type, scope, emoji, subject, body, breaking, footer, markBreaking } = messageMod;

        const cleanedType = type?.split(';')[0] || 'docs';
        const scopePart = scope ? `(${scope})` : '';
        const emojiPart = emoji ? `${emoji} ` : '';
        const markBreakingPart = markBreaking ? `${markBreaking}` : '';

        const footerPart = () => {
            if (footer?.trim()) {
                const parts = footer?.replace(/\n/g, '').trim().split(' ');
                const prefix = parts[0];
                const issueNum = parts.slice(1).join(' ').replace(/\s+/g, '').split(',');

                const list = issueNum.map((itm) => `${prefix} ${itm}`);
                const res = `;${list.join(', ')}`;

                return res;
            } else {
                return '';
            }
        };

        const header = `${cleanedType}${scopePart}${markBreakingPart}: ${emojiPart}${subject}${footerPart()}`;

        const lines = [header];

        if (body?.trim()) lines.push('', body.trim());
        if (breaking?.trim()) lines.push('', `BREAKING CHANGE ${breaking.trim()}`);

        return lines.join('\n');
    },
});